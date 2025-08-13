import { Resend } from "resend";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone = "", message, source = "" } = body || {};

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailOk = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
    if (!emailOk) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    const submittedAt = new Date().toISOString();
    const payload = {
      name,
      email,
      phone,
      message,
      source,
      submittedAt,
      userAgent: request.headers.get("user-agent") || "",
      referer: request.headers.get("referer") || "",
      ip: request.headers.get("x-forwarded-for") || "",
    };

    // Optional: forward to external webhook (e.g. Slack, Make.com, Zapier)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Source": "oddstone-marketing-website",
          },
          body: JSON.stringify(payload),
          cache: "no-store",
        });
      } catch (err) {
        // Do not fail the user request if webhook forwarding fails
        console.error("CONTACT_WEBHOOK_URL forward failed", err);
      }
    }

    // Send email via Resend if configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Oddstone <onboarding@resend.dev>";

    if (!resendApiKey || !toEmail) {
      console.warn(
        "Contact email sending skipped: missing RESEND_API_KEY or CONTACT_TO_EMAIL"
      );
      return Response.json({ ok: true, forwarded: Boolean(webhookUrl) });
    }

    const resend = new Resend(resendApiKey);

    const adminSubject = `New enquiry from ${name}`;
    const adminHtml = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,Helvetica Neue,Arial;line-height:1.6;color:#0a0a0a">
        <h2 style="margin:0 0 8px 0">New Contact Enquiry</h2>
        <p style="margin:0 0 16px 0">Submitted at: <strong>${submittedAt}</strong></p>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;background:#f8fafc;border-radius:12px">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
          <tr><td><strong>Source</strong></td><td>${escapeHtml(
            source
          )}</td></tr>
        </table>
        <div style="margin-top:16px">
          <div style="font-weight:700;margin-bottom:6px">Message</div>
          <pre style="white-space:pre-wrap;background:#eef2ff;padding:12px;border-radius:10px">${escapeHtml(
            message
          )}</pre>
        </div>
      </div>
    `;

    const { error: adminErr } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: adminSubject,
      html: adminHtml,
      reply_to: email,
    });

    if (adminErr) {
      console.error("Resend admin email error", adminErr);
      return Response.json({ error: "Email delivery failed" }, { status: 502 });
    }

    const sendConfirmation = process.env.CONTACT_SEND_CONFIRMATION === "true";
    if (sendConfirmation) {
      try {
        const confirmSubject =
          "Thanks for contacting Oddstone — we’ll be in touch";
        const confirmHtml = `
          <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,Helvetica Neue,Arial;line-height:1.6;color:#0a0a0a">
            <h2 style="margin:0 0 8px 0">Thanks, ${escapeHtml(name)} 👋</h2>
            <p style="margin:0 0 12px 0">We’ve received your message and a UK specialist will reply within 24 hours.</p>
            <p style="margin:0 0 4px 0">Here’s a copy of what you sent:</p>
            <pre style="white-space:pre-wrap;background:#f8fafc;padding:12px;border-radius:10px">${escapeHtml(
              message
            )}</pre>
            <p style="margin-top:16px;color:#3b82f6">— Oddstone</p>
          </div>
        `;
        await resend.emails.send({
          from: fromEmail,
          to: [email],
          subject: confirmSubject,
          html: confirmHtml,
        });
      } catch (e) {
        console.error("Resend confirmation failed", e);
      }
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("/api/contact error", error);
    return Response.json({ error: "Unexpected error" }, { status: 500 });
  }
}

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function escapeHtml(unsafe = "") {
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
