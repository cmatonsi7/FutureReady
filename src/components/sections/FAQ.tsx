import { useState } from "react";
import { useInView } from "../../hooks/useAnimations";
import { tokens } from "../../styles/tokens";

/* ─── FAQ ───────────────────────────────────────────────────── */
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [ref, inView] = useInView();

  const items = [
    {
      q: "Is this SETA accredited?",
      a: "Not currently. FRA's value is in assessment rigour and verified workplace exposure, not SETA compliance. Our certificate proves demonstrated competence and real work experience, which is what employers increasingly care about. SETA accreditation is part of our long-term roadmap.",
    },
    {
      q: "How is the 7-day work exposure arranged?",
      a: "FRA manages the placement process entirely. We maintain a vetted network of SME and NGO host organisations across the Western Cape, Gauteng, and KwaZulu-Natal. Participants are placed based on their profile and geographic location.",
    },
    {
      q: "What happens if a participant fails an assessment?",
      a: "Participants must pass all four assessments to proceed and receive certification. If a participant fails, they receive targeted feedback and one opportunity to resubmit. If they still don't meet the standard, they do not receive the certificate.",
    },
    {
      q: "Can our NGO customise the cohort schedule?",
      a: "Yes, cohort timing is agreed per contract and quarterly cycles are available. We work around your programme calendar. Minimum cohort size for B2B partnerships is 10 participants.",
    }
  ];

  return (
    <section id="faq" ref={ref} className="fra-section-responsive" style={{ background: tokens.cream, padding: "100px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="fra-faq-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start", flexWrap: "wrap" }}>
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all 0.6s ease" }}>
            <div className="section-label">Common Questions</div>
            <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
              Everything you need to know
            </h2>
            <p style={{ color: tokens.inkMid, fontSize: 15, lineHeight: 1.75, marginBottom: 32 }}>
              If you have a question that isn’t answered here, reach out and you’ll hear from us soon.
            </p>
            
          </div>

          <div style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}>
            {items.map(({ q, a }, i) => (
              <div key={i} className="faq-item">
                <button type="button" className="faq-btn" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                  <span style={{ fontSize: 16, fontWeight: 600, color: tokens.ink, lineHeight: 1.4 }}>{q}</span>
                  <span style={{
                    width: 28, height: 28, borderRadius: "50%",
                    border: `1.5px solid ${tokens.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.25s ease",
                    transform: open === i ? "rotate(45deg)" : "none",
                    color: open === i ? tokens.amber : tokens.inkLight,
                    borderColor: open === i ? tokens.amber : tokens.border,
                    fontSize: 18, lineHeight: 1,
                  }}>+</span>
                </button>
                <div className="faq-content" style={{ maxHeight: open === i ? 300 : 0 }}>
                  <p>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}