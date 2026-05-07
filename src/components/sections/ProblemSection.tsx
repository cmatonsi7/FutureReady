import { useInView } from "../../hooks/useAnimations";
import { tokens } from "../../styles/tokens";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const IconBuild = () => (
  <motion.svg width="48" height="48" viewBox="0 0 48 48" fill="none"
    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 1.2, ease: "easeInOut" }}>
    <motion.rect x="6" y="28" width="36" height="14" rx="3"
      stroke="rgba(255,255,255,0.85)" strokeWidth="2" fill="none"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      transition={{ duration: 0.9, delay: 0.1 }} />
    <motion.rect x="14" y="16" width="20" height="14" rx="2"
      stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      transition={{ duration: 0.9, delay: 0.3 }} />
    <motion.rect x="20" y="6" width="8" height="12" rx="2"
      stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      transition={{ duration: 0.9, delay: 0.5 }} />
  </motion.svg>
);

const IconChart = () => (
  <motion.svg width="48" height="48" viewBox="0 0 48 48" fill="none"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}>
    <motion.rect x="6" y="28" width="8" height="14" rx="2"
      fill="rgba(255,255,255,0.85)"
      initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
      style={{ originY: 1 }} transition={{ duration: 0.6, delay: 0.1 }} />
    <motion.rect x="20" y="18" width="8" height="24" rx="2"
      fill="rgba(255,255,255,0.65)"
      initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
      style={{ originY: 1 }} transition={{ duration: 0.6, delay: 0.25 }} />
    <motion.rect x="34" y="10" width="8" height="32" rx="2"
      fill="rgba(255,255,255,0.45)"
      initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
      style={{ originY: 1 }} transition={{ duration: 0.6, delay: 0.4 }} />
    <motion.line x1="6" y1="44" x2="42" y2="44"
      stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }} />
  </motion.svg>
);

const IconVerify = () => (
  <motion.svg width="48" height="48" viewBox="0 0 48 48" fill="none"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}>
    <motion.circle cx="22" cy="22" r="13"
      stroke="rgba(255,255,255,0.85)" strokeWidth="2" fill="none"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }} />
    <motion.line x1="31" y1="31" x2="42" y2="42"
      stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" strokeLinecap="round"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, delay: 0.7 }} />
    <motion.path d="M16 22 L20 26 L28 18"
      stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" fill="none"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }} />
  </motion.svg>
);

const icons = [<IconBuild />, <IconChart />, <IconVerify />];
const cardBg = ["#2d4a3e", "#1c2b1f", "#3b2f2f"];

function WordRevealOverlay({ text, hovered }: { text: string; hovered: boolean }) {
  const words = text.split(" ");
  return (
    <motion.div
      animate={{ opacity: hovered ? 1 : 0 }}
      transition={{ duration: 0.08 }}
      style={{
        position: "absolute", inset: 0,
        background: "rgba(0,0,0,0.58)", borderRadius: 16,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px 22px", zIndex: 10, pointerEvents: "none",
      }}
    >
      <p style={{ margin: 0, display: "flex", flexWrap: "wrap",
        justifyContent: "center", gap: "0 5px", textAlign: "center" }}>
        {words.map((word, i) => (
          <motion.span key={i}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
            transition={{ duration: 0.12, delay: hovered ? i * 0.012 : 0, ease: "easeOut" }}
            style={{ fontFamily: "'Georgia', serif", fontSize: 14,
              color: "rgba(255,255,255,0.88)", lineHeight: 1.75, display: "inline-block" }}
          >
            {word}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}

export default function ProblemSection() {
  const [ref, inView] = useInView();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const gaps = [
    {
      n: "01", title: "The Credibility Gap", who: "Employer Pain",
      desc: "Employers cannot trust educational credentials as reliable signals of workplace readiness. Degrees open fewer doors than they once did and employers know it",
    },
    {
      n: "02", title: "The Impact Gap", who: "NGO Pain",
      desc: "NGOs invest 37+ billion annually in youth programs with no auditable employability outcomes to show funders. Millions spent, stories told, data missing.",
    },
    {
      n: "03", title: "The Verification Gap", who: "Youth Pain",
      desc: "Entry level candidates lack third-party validated workplace experience even after years of education. Youth face rejection despite holding qualifications.",
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

    if (dx < 0 && carouselIndex < gaps.length - 1) {
      setCarouselIndex((i) => i + 1);
    } else if (dx > 0 && carouselIndex > 0) {
      setCarouselIndex((i) => i - 1);
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      id="problem"
      className="fra-section-responsive"
      ref={ref}
      style={{ background: tokens.cream, padding: "80px 0 100px", overflow: "hidden", scrollMarginTop: 110 }}
    >
      <style>{`
        @media (max-width: 639px) {
          .fra-problem-desktop { display: none !important; }
          .fra-problem-mobile  { display: block !important; }
        }
        @media (min-width: 640px) {
          .fra-problem-desktop { display: flex !important; }
          .fra-problem-mobile  { display: none !important; }
        }

        .fra-problem-mobile {
          display: none;
          position: relative;
          overflow: hidden;
          margin: 0 -24px;
          padding: 0;
        }

        .fra-problem-track {
          display: flex;
          transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .fra-problem-slide {
          flex: 0 0 100%;
          padding: 0 24px;
          box-sizing: border-box;
        }

        .fra-problem-mobile-arrows {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;
          padding: 0 28px;
        }

        .fra-problem-arrow-btn {
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

        .fra-problem-arrow-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }

        .fra-problem-arrow-btn:not(:disabled):hover {
          background: #f3f4f6;
          border-color: #9ca3af;
        }

        .fra-problem-counter {
          font-size: 13px;
          font-weight: 600;
          color: #6b7280;
          font-variant-numeric: tabular-nums;
        }

        .fra-problem-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
        }

        .fra-problem-dot {
          height: 8px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0;
        }

        @media (max-width: 639px) {
          .fra-problem-outer-pad {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }} className="fra-problem-outer-pad">

        {/* ── Header ── */}
        <div className="fra-section-header" style={{ marginBottom: 48 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Why We Exist</div>
          <h2 className="display fra-h2-mobile"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.1,
              margin: "0 0 16px", letterSpacing: "-0.02em", color: tokens.ink, textAlign: "center" }}>
            Three gaps that cost{" "}
            <em style={{ color: tokens.green800, fontStyle: "italic" }}>everyone</em>
          </h2>
          <p style={{ fontSize: 15, color: tokens.inkMid, lineHeight: 1.7, margin: 0,
            textAlign: "justify", maxWidth: 820 }}>
            South Africa's labour market has three compounding failures. Future Ready Africa is built
            to solve all three simultaneously.
          </p>
        </div>

        {/* ── Desktop strip ── */}
        <div className="fra-strip-wrap cream fra-problem-desktop">
          <div className="fra-card-strip">
            {gaps.map(({ n, title, desc }, i) => (
              <div key={n}
                className="hover-lift fra-focus-ring"
                role="button" tabIndex={0}
                aria-pressed={activeIndex === i}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(i)}
                onBlur={() => setActiveIndex(null)}
                onClick={() => setActiveIndex((c) => (c === i ? null : i))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIndex((c) => (c === i ? null : i));
                  }
                }}
                style={{
                  flex: "0 0 320px", scrollSnapAlign: "start",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(24px)",
                  transition: `all 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s`,
                  cursor: "pointer",
                }}
              >
                <CardVisual n={n} title={title} desc={desc} index={i}
                  hovered={activeIndex === i} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile carousel ── */}
        <div className="fra-problem-mobile">
          <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
            style={{ overflow: "hidden" }}>
            <div className="fra-problem-track"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
              {gaps.map(({ n, title, desc }, i) => (
                <div key={n} className="fra-problem-slide">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Tap-to-reveal on mobile — toggle activeIndex */}
                    <div
                      role="button" tabIndex={0}
                      aria-pressed={activeIndex === i}
                      onClick={() => setActiveIndex((c) => (c === i ? null : i))}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveIndex((c) => (c === i ? null : i));
                        }
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <CardVisual n={n} title={title} desc={desc} index={i}
                        hovered={activeIndex === i} />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows + counter */}
          <div className="fra-problem-mobile-arrows">
            <button className="fra-problem-arrow-btn"
              onClick={() => setCarouselIndex((i) => Math.max(0, i - 1))}
              disabled={carouselIndex === 0}
              aria-label="Previous card">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke={tokens.green900}
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <span className="fra-problem-counter">
              {carouselIndex + 1} / {gaps.length}
            </span>

            <button className="fra-problem-arrow-btn"
              onClick={() => setCarouselIndex((i) => Math.min(gaps.length - 1, i + 1))}
              disabled={carouselIndex === gaps.length - 1}
              aria-label="Next card">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke={tokens.green900}
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="fra-problem-dots" role="tablist" aria-label="Card indicators">
            {gaps.map((gap, i) => (
              <button key={gap.n}
                role="tab"
                aria-selected={i === carouselIndex}
                aria-label={`Go to card ${i + 1}`}
                className="fra-problem-dot"
                onClick={() => setCarouselIndex(i)}
                style={{
                  background: i === carouselIndex ? tokens.green900 : "#d1d5db",
                  width: i === carouselIndex ? 20 : 8,
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ── Extracted shared card visual ─────────────────────────────────────────────
function CardVisual({
  n, title, desc, index, hovered,
}: {
  n: string; title: string; desc: string; index: number; hovered: boolean;
}) {
  return (
    <div style={{ width: "100%", height: 220, borderRadius: 16,
      background: cardBg[index], position: "relative", overflow: "hidden",
      marginBottom: 16, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center" }}>

      <div style={{ position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.07) 0%, transparent 65%)" }} />

      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 88, fontWeight: 700,
        color: "rgba(255,255,255,0.12)", lineHeight: 1, position: "absolute",
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        userSelect: "none", pointerEvents: "none", letterSpacing: "-0.04em" }}>
        {n}
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {icons[index]}
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "32px 20px 20px",
        background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",
        textAlign: "center" }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: 17,
          fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
          {title}
        </span>
      </div>

      <WordRevealOverlay text={desc} hovered={hovered} />
    </div>
  );
}