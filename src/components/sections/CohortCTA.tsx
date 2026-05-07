import { tokens } from "../../styles/tokens";

/* ─── COHORT CTA ────────────────────────────────────────────── */
export default function CohortCTA() {
  return (
    <section style={{ background: tokens.amber, padding: "64px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>Next Cohort</div>
          <h2 className="display" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
            Applications open now.<br />
            <em style={{ fontStyle: "italic", opacity: 0.85 }}>Cohort size is limited.</em>
          </h2>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button className="btn" style={{ background: "#fff", color: tokens.amber, fontWeight: 700, padding: "16px 32px", fontSize: 16 }}>
            Enrol Now →
          </button>
          <button className="btn btn-outline-white" style={{ padding: "16px 32px", fontSize: 16 }}>
            Book Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
}
