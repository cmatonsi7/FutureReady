import { useInView } from "../../hooks/useAnimations";
import { tokens } from "../../styles/tokens";

/* ─── TRUST BAR ─────────────────────────────────────────────── */
export default function TrustBar() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ background: tokens.cream, padding: "52px 32px", borderBottom: `1px solid ${tokens.border}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: tokens.inkLight, marginBottom: 32 }}>
          Programme hosts &amp; partners across South Africa
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "40px 60px", flexWrap: "wrap", alignItems: "center" }}>
          {["NGO Partner Network", "Western Cape DSD", "YES Programme", "B Corp Employers", "Harambee Adjacent", "SME Host Network"].map(name => (
            <div key={name} style={{
              padding: "10px 20px",
              border: `1px solid ${tokens.border}`,
              borderRadius: 8,
              background: "#fff",
              fontFamily: "'DM Mono', monospace",
              fontSize: 10, letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: tokens.inkLight,
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(8px)",
              transition: "all 0.5s ease",
            }}>{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
