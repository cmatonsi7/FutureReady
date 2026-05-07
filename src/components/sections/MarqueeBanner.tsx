export default function MarqueeBanner() {
  const items = [
    "Verified 7-day workplace exposure",
    "NGO-auditable impact reporting",
    "From R1,800 per individual",
    "71% gross margin model",
    "Assessment-gated certification",
    "No certificate without demonstrated competence",
  ];

  // Duplicate enough times so the loop is seamless even on wide screens
  const repeated = [...items, ...items, ...items];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500&display=swap');

        .fra-marquee-track {
          display: flex;
          width: max-content;
          animation: fraMarquee 32s linear infinite;
        }

        .fra-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes fraMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .fra-marquee-track {
            animation: none;
          }
        }
      `}</style>

      <div
        aria-label="Key features"
        style={{
          width: "100%",
          background: "#b5730a",
          overflow: "hidden",
          borderTop: "0.5px solid rgba(255,255,255,0.12)",
          borderBottom: "0.5px solid rgba(0,0,0,0.15)",
          padding: "12px 0",
          position: "relative",
        }}
      >
        {/* Left fade */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "80px",
            background: "linear-gradient(to right, #b5730a, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Right fade */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "80px",
            background: "linear-gradient(to left, #b5730a, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div className="fra-marquee-track" aria-hidden="true">
          {repeated.map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontSize: "12.5px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.92)",
                  letterSpacing: "0.03em",
                  padding: "0 28px",
                }}
              >
                {item}
              </span>
              {/* Dot separator */}
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.4)",
                  flexShrink: 0,
                }}
              />
            </span>
          ))}
        </div>

        {/* Accessible static list for screen readers */}
        <ul
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            whiteSpace: "nowrap",
          }}
        >
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}