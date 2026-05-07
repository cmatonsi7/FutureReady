import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useAnimations";
import { siteMedia } from "../../content/siteMedia";
import { tokens } from "../../styles/tokens";

const cardBg = ["#2d4a3e", "#1c2b1f"];

function AudienceImage({ src, alt, eyebrow }: { src: string; alt: string; eyebrow?: string }) {
  return (
    <div
      style={{
        position: "relative",
        height: 220,
        borderRadius: 18,
        overflow: "hidden",
        marginBottom: 28,
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 16px 36px rgba(0,0,0,0.18)",
      }}
    >
      <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(10,22,16,0.82), rgba(10,22,16,0.18) 45%, rgba(10,22,16,0.2))",
        }}
      />
      {eyebrow && (
        <div style={{ position: "absolute", left: 18, bottom: 18, zIndex: 1 }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.58)",
              marginBottom: 6,
            }}
          >
            {eyebrow}
          </div>
        </div>
      )}
    </div>
  );
}

const deliveryTags = ["LMS-based learning", "Assessment-gated progression", "Facilitated sessions"];

const orgCategories = [
  {
    heading: "Employability Programme",
    points: ["Training Needs Analysis based tailored programme"],
  },
  {
    heading: "Organisational Development",
    points: ["R1,800–R2,500 per participant vs R42,000+ alternatives"],
  },
  {
    heading: "Custom Programme Design",
    points: ["Scale across provinces without proportional cost growth"],
  },
];

const indItems = [
  "Assessment gated certification",
  "7 days verified, real world work exposure arranged for you",
  "CV review, LinkedIn profile, and interview preparation",
  "Access to course materials",
  "R1,800 full or flexible payment options",
];

export default function WhoItsFor() {
  const [ref, inView] = useInView();
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const cards = [
    {
      label: "For Organisations",
      title: "Turn programme spend into auditable outcomes",
      body: "NGOs, corporate foundations, government funded programmes that need measurable, funder reportable employability data.",
      cta: "Partner with us →",
      bg: cardBg[0],
      media: siteMedia.organisations,
      isOrg: true,
    },
    {
      label: "For Individuals",
      title: "Get workplace ready and employer-trusted in 8 weeks",
      body: "Graduates, career change, and job seekers",
      cta: "Enrol Now →",
      bg: cardBg[1],
      media: siteMedia.individuals,
      isOrg: false,
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

    if (dx < 0 && activeIndex < cards.length - 1) {
      setActiveIndex((i) => i + 1);
    } else if (dx > 0 && activeIndex > 0) {
      setActiveIndex((i) => i - 1);
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      id="who-its-for"
      className="fra-section-responsive"
      ref={ref}
      style={{ background: tokens.cream2, padding: "100px 0", overflow: "hidden", scrollMarginTop: 110 }}
    >
      <style>{`
        .fra-who-carousel {
          display: none;
        }
        @media (max-width: 640px) {
          .fra-who-grid {
            display: none !important;
          }
          .fra-who-carousel {
            display: block;
          }
          .fra-section-header,
          .fra-delivery-strip {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }

        .fra-who-mobile-track {
          display: flex;
          transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .fra-who-mobile-slide {
          flex: 0 0 100%;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .fra-who-mobile-arrows {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;
          padding: 0 24px;
        }

        .fra-who-mobile-arrow-btn {
          border: 1px solid rgba(0,0,0,0.15);
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

        .fra-who-mobile-arrow-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }

        .fra-who-mobile-arrow-btn:not(:disabled):hover {
          background: #f3f4f6;
          border-color: #9ca3af;
        }

        .fra-who-mobile-counter {
          font-size: 13px;
          font-weight: 600;
          color: #6b7280;
          font-variant-numeric: tabular-nums;
        }

        .fra-who-mobile-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
        }

        .fra-who-mobile-dot {
          height: 8px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: width 0.25s ease, background 0.25s ease;
          padding: 0;
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div className="fra-section-header" style={{ marginBottom: 32, padding: "0 48px" }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Who We Serve</div>
          <h2
            className="display fra-h2-mobile"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
              color: tokens.ink,
              textAlign: "left",
            }}
          >
            Built for <em style={{ color: tokens.green800, fontStyle: "italic" }}>organisations</em> and individuals
          </h2>
        </div>

        {/* Delivery Model strip */}
        <div
          className="fra-delivery-strip"
          style={{ padding: "0 48px", marginBottom: 36 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: tokens.ink,
                opacity: 0.7,
                flexShrink: 0,
              }}
            >
              Delivery Model
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 0, flexWrap: "wrap" }}>
              {deliveryTags.map((tag, i) => (
                <span key={tag} style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: tokens.ink, opacity: 0.9 }}>
                    {tag}
                  </span>
                  {i < deliveryTags.length - 1 && (
                    <span style={{ margin: "0 10px", color: tokens.green800, opacity: 0.8, fontSize: 13 }}>|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Desktop grid ── */}
        <div
          className="fra-who-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: 24,
            padding: "0 48px",
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              className="hover-lift"
              initial={{ opacity: 0, x: index === 0 ? -24 : 24, y: 10 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: index === 0 ? -24 : 24, y: 10 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderRadius: 20,
                background: card.bg,
                position: "relative",
                overflow: "hidden",
                padding: 28,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.08) 0%, transparent 65%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", zIndex: 1, textAlign: "left", display: "flex", flexDirection: "column", flex: 1 }}>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: 20,
                  }}
                >
                  {card.label}
                </div>
                <AudienceImage src={card.media.src} alt={card.media.alt} eyebrow={card.media.eyebrow} />
                <h3 className="display" style={{ fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.2, textAlign: "left" }}>
                  {card.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 15, lineHeight: 1.75, marginBottom: 28, textAlign: "left" }}>
                  {card.body}
                </p>
                <div style={{ flex: 1 }}>
                  {card.isOrg ? (
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, margin: 0, padding: 0 }}>
                      {orgCategories.map((cat) => (
                        <li key={cat.heading}>
                          <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6 }}>
                            <span style={{ color: tokens.amber, fontSize: 16, lineHeight: 1.5, flexShrink: 0 }}>✓</span>
                            <span style={{ color: "#fff", fontSize: 14, fontWeight: 600, lineHeight: 1.5 }}>{cat.heading}</span>
                          </div>
                          <ul style={{ listStyle: "none", padding: "0 0 0 26px", margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                            {cat.points.map((pt) => (
                              <li key={pt} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, lineHeight: 1.5, flexShrink: 0 }}>○</span>
                                <span style={{ color: "rgba(255,255,255,0.72)", fontSize: 13, lineHeight: 1.6 }}>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, margin: 0, padding: 0 }}>
                      {indItems.map((item) => (
                        <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <span style={{ color: tokens.amber, fontSize: 16, lineHeight: 1.5, flexShrink: 0 }}>✓</span>
                          <span style={{ color: "rgba(255,255,255,0.78)", fontSize: 14, lineHeight: 1.6, textAlign: "left" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div style={{ marginTop: 28 }}>
                  <button className="btn btn-amber fra-focus-ring" style={{ width: "100%", justifyContent: "center" }}>
                    {card.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Mobile carousel ── */}
        <div className="fra-who-carousel">
          {/* Swipeable track */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ overflow: "hidden", margin: "0 0" }}
          >
            <div
              className="fra-who-mobile-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {cards.map((card) => (
                <div key={card.label} className="fra-who-mobile-slide">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      borderRadius: 20,
                      background: card.bg,
                      position: "relative",
                      overflow: "hidden",
                      padding: 24,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.08) 0%, transparent 65%)",
                        pointerEvents: "none",
                      }}
                    />
                    <div style={{ position: "relative", zIndex: 1, textAlign: "left", display: "flex", flexDirection: "column", flex: 1 }}>
                      <div
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 10,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.4)",
                          marginBottom: 20,
                        }}
                      >
                        {card.label}
                      </div>
                      <AudienceImage src={card.media.src} alt={card.media.alt} eyebrow={card.media.eyebrow} />
                      <h3 className="display" style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 14, lineHeight: 1.2 }}>
                        {card.title}
                      </h3>
                      <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 14, lineHeight: 1.75, marginBottom: 24 }}>
                        {card.body}
                      </p>
                      <div style={{ flex: 1 }}>
                        {card.isOrg ? (
                          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, margin: 0, padding: 0 }}>
                            {orgCategories.map((cat) => (
                              <li key={cat.heading}>
                                <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6 }}>
                                  <span style={{ color: tokens.amber, fontSize: 16, lineHeight: 1.5, flexShrink: 0 }}>✓</span>
                                  <span style={{ color: "#fff", fontSize: 14, fontWeight: 600, lineHeight: 1.5 }}>{cat.heading}</span>
                                </div>
                                <ul style={{ listStyle: "none", padding: "0 0 0 26px", margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                                  {cat.points.map((pt) => (
                                    <li key={pt} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                                      <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, lineHeight: 1.5, flexShrink: 0 }}>○</span>
                                      <span style={{ color: "rgba(255,255,255,0.72)", fontSize: 13, lineHeight: 1.6 }}>{pt}</span>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, margin: 0, padding: 0 }}>
                            {indItems.map((item) => (
                              <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                                <span style={{ color: tokens.amber, fontSize: 16, lineHeight: 1.5, flexShrink: 0 }}>✓</span>
                                <span style={{ color: "rgba(255,255,255,0.78)", fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div style={{ marginTop: 24 }}>
                        <button className="btn btn-amber fra-focus-ring" style={{ width: "100%", justifyContent: "center" }}>
                          {card.cta}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation row: prev arrow · counter · next arrow */}
          <div className="fra-who-mobile-arrows">
            <button
              className="fra-who-mobile-arrow-btn"
              onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous card"
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

            <span className="fra-who-mobile-counter">
              {activeIndex + 1} / {cards.length}
            </span>

            <button
              className="fra-who-mobile-arrow-btn"
              onClick={() => setActiveIndex((i) => Math.min(cards.length - 1, i + 1))}
              disabled={activeIndex === cards.length - 1}
              aria-label="Next card"
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
          <div className="fra-who-mobile-dots" role="tablist" aria-label="Card indicators">
            {cards.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to card ${i + 1}`}
                className="fra-who-mobile-dot"
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