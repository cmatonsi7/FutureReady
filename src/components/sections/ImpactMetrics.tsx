import { useRef, useState } from "react";
import { useCountUp, useInView } from "../../hooks/useAnimations";
import { tokens } from "../../styles/tokens";

export default function ImpactMetrics() {
  const [ref, inView] = useInView(0.2);
  const youth = useCountUp(41, 1600, inView);
  const billion = useCountUp(37, 1800, inView);
  const weeks = useCountUp(8, 1200, inView);
  const margin = useCountUp(71, 1800, inView);

  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const metrics = [
    {
      display: `${youth}%`,
      label: "Youth unemployment rate in South Africa",
      note: "Stats SA 2025",
    },
    {
      display: `R${(billion / 10).toFixed(1)}bn+`,
      label: "Invested annually in youth programmes without auditable outcomes",
      note: "Industry estimate",
    },
    {
      display: `${weeks} wks`,
      label: "To produce a workplace-ready, employer-verified graduate",
      note: "FRA programme",
    },
    {
      display: `${margin}%`,
      label: "Gross margin model for NGO and funder sustainability",
      note: "Programme economics",
    },
  ];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;

    if (dx < 0 && activeIndex < metrics.length - 1) {
      setActiveIndex((i) => i + 1);
    } else if (dx > 0 && activeIndex > 0) {
      setActiveIndex((i) => i - 1);
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      id="impact"
      ref={ref}
      className="fra-section-responsive"
      style={{
        background: tokens.cream,
        padding: "96px 32px 104px",
        borderTop: `1px solid ${tokens.border}`,
        borderBottom: `1px solid ${tokens.border}`,
        overflow: "hidden",
        scrollMarginTop: 110,
      }}
    >
      <style>{`
        @media (max-width: 639px) {
          .fra-impact-grid-desktop { display: none !important; }
          .fra-impact-mobile { display: block !important; }
          .fra-impact-header-pad {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
        @media (min-width: 640px) {
          .fra-impact-grid-desktop { display: grid !important; }
          .fra-impact-mobile { display: none !important; }
        }

        .fra-impact-mobile {
          display: none;
          margin: 0 -32px;
        }

        .fra-impact-mobile-track {
          display: flex;
          transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .fra-impact-mobile-slide {
          flex: 0 0 100%;
          padding: 0 32px;
          box-sizing: border-box;
        }

        .fra-impact-mobile-card {
          min-height: 220px;
          border-radius: 20px;
          border: 1px solid ${tokens.border};
          background: #fff;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 14px 34px rgba(15,36,25,0.06);
        }

        .fra-impact-mobile-arrows {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;
          padding: 0 4px;
        }

        .fra-impact-mobile-arrow-btn {
          border: 1px solid ${tokens.border};
          background: #fff;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.18s, border-color 0.18s;
        }

        .fra-impact-mobile-arrow-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }

        .fra-impact-mobile-arrow-btn:not(:disabled):hover {
          background: #f3f4f6;
          border-color: #9ca3af;
        }

        .fra-impact-mobile-counter {
          font-size: 13px;
          font-weight: 600;
          color: #6b7280;
          font-variant-numeric: tabular-nums;
        }

        .fra-impact-mobile-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
        }

        .fra-impact-mobile-dot {
          height: 8px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: width 0.25s ease, background 0.25s ease;
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Section header ── */}
        <div
          style={{
            marginBottom: 52,
            paddingBottom: 48,
            borderBottom: `1px solid ${tokens.border}`,
          }}
        >
          <div className="section-label" style={{ marginBottom: 20 }}>
            Why it matters
          </div>

          <h1
            className="fra-type-h1"
            style={{
              color: tokens.ink,
              margin: "0 0 20px",
              lineHeight: 1.1,
              maxWidth: 1340,
              fontSize: "47px",
            }}
          >
            A skills gap backed by data{" "}
            <em style={{ color: tokens.green800, fontStyle: "italic" }}>
              A programme designed to close it.
            </em>
          </h1>

          <p
            className="fra-body"
            style={{
              margin: 0,
              color: tokens.inkMid,
              fontSize: 16,
              lineHeight: 1.8,
              maxWidth: "73ch",
              textAlign: "justify",
            }}
          >
            South Africa's youth employment crisis is well-documented. What's
            been missing is a verifiable, employer-trusted standard for
            demonstrating work readiness. These numbers show the scale of the
            gap and what a structured programme can achieve.
          </p>
        </div>

        {/* ── Desktop grid ── */}
        <div
          className="fra-impact-grid fra-impact-grid-desktop"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 22,
            alignItems: "stretch",
          }}
        >
          {metrics.map(({ display, label, note }, i) => (
            <article
              key={label}
              className="hover-lift"
              style={{
                minHeight: 220,
                borderRadius: 20,
                border: `1px solid ${tokens.border}`,
                background: "#fff",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(24px)",
                transition: `all 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`,
                boxShadow: "0 14px 34px rgba(15,36,25,0.06)",
              }}
            >
              <div>
                <div
                  className="display"
                  style={{
                    fontSize: "clamp(36px, 5vw, 58px)",
                    fontWeight: 900,
                    lineHeight: 1,
                    color: tokens.green900,
                    letterSpacing: "-0.04em",
                    marginBottom: 16,
                  }}
                >
                  {display}
                </div>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: tokens.inkMid,
                    margin: 0,
                    maxWidth: 260,
                  }}
                >
                  {label}
                </p>
              </div>
              <div
                style={{
                  marginTop: 24,
                  paddingTop: 16,
                  borderTop: `1px solid ${tokens.border}`,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: tokens.inkLight,
                }}
              >
                {note}
              </div>
            </article>
          ))}
        </div>

        {/* ── Mobile carousel ── */}
        <div className="fra-impact-mobile">
          {/* Swipeable track */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ overflow: "hidden" }}
          >
            <div
              className="fra-impact-mobile-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {metrics.map(({ display, label, note }) => (
                <div key={label} className="fra-impact-mobile-slide">
                  <article
                    className="fra-impact-mobile-card"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "none" : "translateY(24px)",
                      transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) 0.1s,
                                   transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.1s`,
                    }}
                  >
                    <div>
                      <div
                        className="display"
                        style={{
                          fontSize: "clamp(44px, 14vw, 58px)",
                          fontWeight: 900,
                          lineHeight: 1,
                          color: tokens.green900,
                          letterSpacing: "-0.04em",
                          marginBottom: 16,
                        }}
                      >
                        {display}
                      </div>
                      <p
                        style={{
                          fontSize: 15,
                          lineHeight: 1.55,
                          color: tokens.inkMid,
                          margin: 0,
                        }}
                      >
                        {label}
                      </p>
                    </div>
                    <div
                      style={{
                        marginTop: 24,
                        paddingTop: 16,
                        borderTop: `1px solid ${tokens.border}`,
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: tokens.inkLight,
                      }}
                    >
                      {note}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation row: prev arrow · counter · next arrow */}
          <div className="fra-impact-mobile-arrows">
            <button
              className="fra-impact-mobile-arrow-btn"
              onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous metric"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8l4-4"
                  stroke={tokens.green900}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <span className="fra-impact-mobile-counter">
              {activeIndex + 1} / {metrics.length}
            </span>

            <button
              className="fra-impact-mobile-arrow-btn"
              onClick={() => setActiveIndex((i) => Math.min(metrics.length - 1, i + 1))}
              disabled={activeIndex === metrics.length - 1}
              aria-label="Next metric"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4l4 4-4 4"
                  stroke={tokens.green900}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="fra-impact-mobile-dots" role="tablist" aria-label="Metric indicators">
            {metrics.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to metric ${i + 1}`}
                className="fra-impact-mobile-dot"
                onClick={() => setActiveIndex(i)}
                style={{
                  background: i === activeIndex ? tokens.green900 : "#d1d5db",
                  width: i === activeIndex ? 20 : 8,
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}