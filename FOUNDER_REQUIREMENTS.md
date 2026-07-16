# Founder Requirements - Website Updates

## About Us Page

### New Copy
```
At Oddstone, we're not generalists — we're specialists by design.

Our team is built with MSc-qualified digital marketing experts from the UK, former ex-Meta team members, and practitioners who've worked across global markets, luxury brands, and performance-led businesses.

We don't believe in making one person do everything.
Instead, every account is handled by a dedicated crew, where each expert operates in their own forte — strategy, performance, creatives, CRO, or analytics. This ensures depth, accountability, and measurable impact.

Our approach blends brand thinking with performance execution.
We focus on building scalable systems that drive real business outcomes — not vanity metrics.

Oddstone works as an extension of your team, bringing clarity, structure, and precision to digital growth.
```

---

## Case Studies Section

### Overview Page
Create a case studies landing page showcasing all three case studies.

### Individual Case Study Pages

#### 1. Zabella Official
- **URL**: `/case-studies/zabella-official`
- **Industry**: Luxury Fashion (E-commerce)
- **Markets**: Pan-India, UAE
- **Engagement**: Oct 2024 – Oct 2025
- **Platforms**: Meta Ads, Google Search & Shopping
- **Results**:
  - ROAS improved from 1.5x to 3.5x
  - CPA reduced by ~30%
  - Revenue scaled 10x
  - UAE delivered consistent 4x ROAS

#### 2. Dua Beauty London
- **URL**: `/case-studies/dua-beauty-london`
- **Industry**: Beauty & Personal Care (E-commerce)
- **Markets**: UK, Africa
- **Engagement**: Feb 2024 – Dec 2025
- **Platforms**: Shopify, Meta Ads, Google Ads, Email/CRM, Amazon
- **Results**:
  - 500% revenue growth
  - Conversion rate: 0.1% → 3%
  - Meta became highest-performing channel
  - Viral Hair Gel + successful Hair Extensions launch

#### 3. Pegasus Group
- **URL**: `/case-studies/pegasus-group-real-estate`
- **Industry**: Real Estate
- **Markets**: Dubai, UAE, International HNI investors
- **Engagement**: Jan 2025 – Present
- **Platforms**: Meta Ads, Google Search, Display, YouTube, WhatsApp
- **Results**:
  - CPL reduced by ~25–35%
  - Lead quality improved by ~40%
  - 80–120 qualified leads per month
  - Google Search + Meta retargeting performed best

### Case Study Page Requirements
- Each case study = own page
- Breadcrumbs navigation
- Internal links between case studies
- CTA button at top + bottom
- Design: minimal, premium, scroll-friendly

---

## Homepage Changes

### Video Section
- [ ] Change homepage video (awaiting updated video from founder — swap the `videoSrc` prop in `app/page.js` when received)

### About Us Section
- [x] Remove "20+ businesses"
- [x] Remove "100% customer satisfaction"
- [x] Replace with: "Global expertise across luxury, e-commerce, and high-intent lead generation."

### Services Section
- [x] Rename: "Pay-Per-Click (PPC) Advertising" → "Brand & Performance Marketing"
- [x] Update background image for Brand & Performance Marketing section (current image incorrectly represents SEO)

### Testimonials Section
- [x] Remove client testimonial images (keep text only or replace later)

### Contact Info
- [ ] Update phone number (awaiting new number — update `lib/contact.js` when received)
- [ ] Update address (awaiting new address — update `lib/contact.js` when received; footer placeholder US address removed in the meantime)

---

## Implementation Notes

### Design Philosophy
- Stick with existing website design philosophy
- Make it creative & unique
- Push design capabilities
- Keep it exceptional but cohesive

### Technical Requirements
- Next.js App Router
- Framer Motion for animations
- Tailwind CSS v4
- Responsive design (mobile-first)
- Dynamic imports for code splitting
