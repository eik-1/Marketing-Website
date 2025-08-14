import { Resend } from "resend";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      website = "",
      goals = "",
      format = "PDF",
      source = "get-audit",
    } = body || {};

    if (!name || !email) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailOk = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
    if (!emailOk) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    const submittedAt = new Date().toISOString();
    const payload = {
      name,
      email,
      website,
      goals,
      format,
      source,
      submittedAt,
      userAgent: request.headers.get("user-agent") || "",
      referer: request.headers.get("referer") || "",
      ip: request.headers.get("x-forwarded-for") || "",
    };

    const composedMessage = [
      "Free Audit Request",
      `Website / Link: ${website || "N/A"}`,
      `Goals/Challenges: ${goals || "N/A"}`,
      `Preferred Format: ${format}`,
    ].join("\n");

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Oddstone <onboarding@resend.dev>";

    if (!resendApiKey || !toEmail) {
      console.warn(
        "Audit email sending skipped: missing RESEND_API_KEY or CONTACT_TO_EMAIL"
      );
      return Response.json({ ok: true });
    }

    const resend = new Resend(resendApiKey);

    const adminSubject = `New Audit Request from ${name}`;
    const adminHtml = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,Helvetica Neue,Arial;line-height:1.6;color:#0a0a0a">
        <h2 style="margin:0 0 8px 0">New Audit Request</h2>
        <p style="margin:0 0 16px 0">Submitted at: <strong>${submittedAt}</strong></p>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;background:#f8fafc;border-radius:12px">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Website / Link</strong></td><td>${escapeHtml(
            website
          )}</td></tr>
          <tr><td><strong>Format</strong></td><td>${escapeHtml(
            format
          )}</td></tr>
          <tr><td><strong>Source</strong></td><td>${escapeHtml(
            source
          )}</td></tr>
        </table>
        <div style="margin-top:16px">
          <div style="font-weight:700;margin-bottom:6px">Goals / Challenges</div>
          <pre style="white-space:pre-wrap;background:#eef2ff;padding:12px;border-radius:10px">${escapeHtml(
            goals
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
          "Thanks for requesting a free audit — we’ll be in touch";
        const confirmHtml = `
          <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,Helvetica Neue,Arial;line-height:1.6;color:#0a0a0a">
            <h2 style="margin:0 0 8px 0">Thanks, ${escapeHtml(name)} 👋</h2>
            <p style="margin:0 0 12px 0">We’ve received your audit request and will send it within 2 business days.</p>
            <p style="margin:0 0 4px 0">Summary:</p>
            <pre style="white-space:pre-wrap;background:#f8fafc;padding:12px;border-radius:10px">${escapeHtml(
              composedMessage
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
    console.error("/api/audit error", error);
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
