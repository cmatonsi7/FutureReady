import { motion } from "framer-motion";
import { tokens } from "../../styles/tokens";
import { useInView } from "../../hooks/useAnimations";
import { useState, useRef } from "react";

type JourneyStep = {
  number: string;
  title: string;
  timeframe: string;
  description: string;
  bullets?: string[];
  highlight: string;
};

const steps: JourneyStep[] = [
  {
    number: "01",
    title: "Workplace Foundations",
    timeframe: "Weeks 1–2",
    description: "",
    bullets: [
      "Labour Market Positioning (CV writing, LinkedIn, interview preparation)",
      "Workplace Behaviour",
      "Professional Discipline",
    ],
    highlight: "Core readiness",
  },
  {
    number: "02",
    title: "Employability Skills",
    timeframe: "Weeks 3–6",
    description: "",
    bullets: [
      "Task Ownership",
      "Teamwork",
      "Conflict Resolution",
      "Intro to Digital Literacy",
    ],
    highlight: "Assessment-gated ",
  },
  {
    number: "03",
    title: "Real Workplace Exposure",
    timeframe: "7 consecutive days",
    description:
      "A real host environment where attendance, conduct, and contribution are verified in practice.",
    highlight: "Host observation",
  },
  {
    number: "04",
    title: "Certification",
    timeframe: "Final outcome",
    description:
      "Certification is awarded after the full standard is met, giving employers a clearer signal of work readiness and participants a valuable credential for heightened career trajectories.",
    highlight: "Employer-trusted",
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView(0.12);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    // Only treat as horizontal swipe if horizontal movement dominates
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;

    if (dx < 0 && activeIndex < steps.length - 1) {
      setActiveIndex((i) => i + 1);
    } else if (dx > 0 && activeIndex > 0) {
      setActiveIndex((i) => i - 1);
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      id="how-it-works"
      className="fra-section-responsive"
      ref={ref}
      style={{
        background: "#fff",
        padding: "96px 0 104px",
        scrollMarginTop: 110,
        borderBottom: `1px solid ${tokens.border}`,
      }}
    >
      <style>{`
        @media (max-width: 639px) {
          .fra-journey-grid-desktop { display: none !important; }
          .fra-journey-mobile { display: block !important; }
        }
        @media (min-width: 640px) {
          .fra-journey-grid-desktop { display: grid !important; }
          .fra-journey-mobile { display: none !important; }
        }

        .fra-journey-mobile {
          display: none;
          position: relative;
          overflow: hidden;
          /* full-bleed so card fills the viewport width */
          margin: 0 -24px;
          padding: 0;
        }

        .fra-mobile-track {
          display: flex;
          transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .fra-mobile-slide {
          /* each slide = 100% of the outer container */
          flex: 0 0 100%;
          padding: 0 24px;
          box-sizing: border-box;
        }

        .fra-mobile-card {
          border-radius: 20px;
          border: 1px solid #e5e7eb;
          background: #fff;
          padding: 28px 24px 24px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          min-height: 340px;
          display: flex;
          flex-direction: column;
        }

        .fra-mobile-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }

        .fra-mobile-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0;
        }

        .fra-mobile-arrows {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;
          padding: 0 4px;
        }

        .fra-mobile-arrow-btn {
          border: 1px solid #d1d5db;
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

        .fra-mobile-arrow-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }

        .fra-mobile-arrow-btn:not(:disabled):hover {
          background: #f3f4f6;
          border-color: #9ca3af;
        }

        .fra-mobile-counter {
          font-size: 13px;
          font-weight: 600;
          color: #6b7280;
          font-variant-numeric: tabular-nums;
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}
           className="fra-outer-pad">

        {/* ── Section header ── */}
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto 56px",
            textAlign: "center",
          }}
        >
          <div className="section-label" style={{ marginBottom: 14 }}>
            Your journey to certification
          </div>

          <h1
            className="display fra-h1-mobile"
            style={{
              fontSize: "clamp(26px, 3vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: "0 0 20px",
              letterSpacing: "-0.02em",
              color: tokens.green900,
              textAlign: "center",
              maxWidth: "1900px",
              width: "100%",
            }}
          >
            A step-by-step path from training to trusted certification
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.8,
              color: tokens.inkMid,
              margin: 0,
              textAlign: "justify",
            }}
          >
            The programme uses assessment-gated learning to ensure capability
            across all stakeholders. Each stage builds on the last and ends in
            verified proof of readiness.
          </p>
        </div>

        {/* ── Desktop grid ── */}
        <div className="fra-journey-grid fra-journey-grid-desktop">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fra-journey-card hover-lift"
            >
              <div className="fra-journey-topline">
                <span className="fra-journey-number">{step.number}</span>
                <span className="fra-journey-timeframe">{step.timeframe}</span>
              </div>

              <h3
                className="display"
                style={{
                  fontSize: 27,
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  color: tokens.green900,
                  margin: "0 0 12px",
                  textAlign: "left",
                  minHeight: "3em",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                {step.title}
              </h3>

              {step.description ? (
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: tokens.inkMid,
                    margin: "0 0 18px",
                    flex: 1,
                    textAlign: "left",
                  }}
                >
                  {step.description}
                </p>
              ) : null}

              {step.bullets && step.bullets.length > 0 ? (
                <ul
                  style={{
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: tokens.inkMid,
                    margin: "0 0 18px",
                    paddingLeft: 16,
                    flex: 1,
                    textAlign: "left",
                    listStyleType: "disc",
                  }}
                >
                  {step.bullets.map((item) => (
                    <li key={item} style={{ marginBottom: 6 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div
                className="fra-journey-highlight"
                style={{
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.03em",
                  display: "block",
                  width: "fit-content",
                  margin: "0 auto",
                  padding: "6px 14px",
                  textAlign: "center",
                  borderRadius: 999,
                  whiteSpace: "pre-line",
                }}
              >
                {step.highlight}
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── Mobile carousel ── */}
        <div className="fra-journey-mobile">
          {/* Swipeable track */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ overflow: "hidden" }}
          >
            <div
              className="fra-mobile-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {steps.map((step) => (
                <div key={step.number} className="fra-mobile-slide">
                  <motion.article
                    className="fra-mobile-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* Top line */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 16,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 13,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          color: tokens.green900,
                          opacity: 0.45,
                        }}
                      >
                        {step.number}
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 11,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: tokens.inkMid,
                          opacity: 0.7,
                        }}
                      >
                        {step.timeframe}
                      </span>
                    </div>

                    <h3
                      className="display"
                      style={{
                        fontSize: 24,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: tokens.green900,
                        margin: "0 0 14px",
                        fontWeight: 800,
                      }}
                    >
                      {step.title}
                    </h3>

                    {step.description ? (
                      <p
                        style={{
                          fontSize: 15,
                          lineHeight: 1.75,
                          color: tokens.inkMid,
                          margin: "0 0 16px",
                          flex: 1,
                        }}
                      >
                        {step.description}
                      </p>
                    ) : null}

                    {step.bullets && step.bullets.length > 0 ? (
                      <ul
                        style={{
                          fontSize: 15,
                          lineHeight: 1.75,
                          color: tokens.inkMid,
                          margin: "0 0 16px",
                          paddingLeft: 18,
                          flex: 1,
                          listStyleType: "disc",
                        }}
                      >
                        {step.bullets.map((item) => (
                          <li key={item} style={{ marginBottom: 6 }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <div style={{ marginTop: "auto", paddingTop: 16 }}>
                      <div
                        className="fra-journey-highlight"
                        style={{
                          fontWeight: 700,
                          fontSize: 13,
                          letterSpacing: "0.03em",
                          display: "inline-block",
                          padding: "6px 14px",
                          textAlign: "center",
                          borderRadius: 999,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {step.highlight}
                      </div>
                    </div>
                  </motion.article>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation row: prev arrow · dots · next arrow */}
          <div className="fra-mobile-arrows">
            <button
              className="fra-mobile-arrow-btn"
              onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous step"
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

            <span className="fra-mobile-counter">
              {activeIndex + 1} / {steps.length}
            </span>

            <button
              className="fra-mobile-arrow-btn"
              onClick={() =>
                setActiveIndex((i) => Math.min(steps.length - 1, i + 1))
              }
              disabled={activeIndex === steps.length - 1}
              aria-label="Next step"
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
          <div className="fra-mobile-dots" role="tablist" aria-label="Step indicators">
            {steps.map((step, i) => (
              <button
                key={step.number}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to step ${i + 1}`}
                className="fra-mobile-dot"
                onClick={() => setActiveIndex(i)}
                style={{
                  background:
                    i === activeIndex ? tokens.green900 : "#d1d5db",
                  width: i === activeIndex ? 20 : 8,
                }}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Fix outer padding on mobile so carousel bleeds correctly */}
      <style>{`
        @media (max-width: 639px) {
          .fra-outer-pad {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}