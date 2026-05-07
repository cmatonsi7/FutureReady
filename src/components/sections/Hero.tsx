import { motion } from "framer-motion";
import { siteMedia } from "../../content/siteMedia";

export default function Hero() {
  return (
    <section
      id="hero"
      className="fra-hero-section"
      aria-label="Hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        backgroundColor: "#102419",
      }}
    >
      {/* Background image */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${siteMedia.hero.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          transform: "scale(1.03)",
        }}
      />

      {/* Dark gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(8,18,12,0.34) 0%, rgba(9,20,14,0.52) 38%, rgba(8,18,12,0.84) 100%)",
        }}
      />

      {/* Radial accent overlays */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 24%, rgba(212,148,58,0.2), transparent 24%), radial-gradient(circle at 78% 32%, rgba(255,255,255,0.08), transparent 20%)",
        }}
      />

      {/* Main hero content */}
      <motion.div
        className="fra-hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "140px 48px 40px",
        }}
      >
        <div
          className="fra-hero-panel"
          style={{
            maxWidth: 640,
            backdropFilter: "blur(8px)",
            background: "rgba(11, 24, 17, 0.36)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 28,
            padding: "28px 28px 24px",
            boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
          }}
        >
          {/* Badge */}
          <div
            className="fra-focus-ring fra-hero-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              minHeight: 40,
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "rgba(255,255,255,0.82)",
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#D4943A",
                boxShadow: "0 0 0 8px rgba(212,148,58,0.12)",
              }}
            />
            A verified pathway from education to employment
          </div>

          {/* Heading */}
          <h1
            className="display"
            style={{
              fontSize: "clamp(44px, 7vw, 84px)",
              lineHeight: 0.96,
              letterSpacing: "-0.04em",
              color: "#fff",
              margin: "0 0 18px",
              textAlign: "left",
            }}
          >
            From learning to work-ready
          </h1>

          {/* Body */}
          <p
            style={{
              margin: "0 0 26px",
              fontSize: 17,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 570,
              textAlign: "justify",
            }}
          >
            We bridge the gap between qualifications and employability by
            producing workplace-ready, employer-trusted graduates in just 8
            weeks.
          </p>

          {/* CTAs */}
          <div className="fra-hero-cta-row">
            <a href="#contact" className="fra-cta-gold fra-focus-ring">
              Enroll Now
            </a>
            <a href="#how-it-works" className="fra-cta-outline fra-focus-ring">
              Partner With Us
            </a>
          </div>
        </div>
      </motion.div>

      {/* Tagline strip — anchored to the bottom of the hero */}
      <div
        className="fra-hero-tagline"
        aria-label="Key values"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(8,18,12,0.55)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          className="fra-hero-tagline-inner"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "16px 48px",
            display: "flex",
            alignItems: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          {[
            "Built for South Africa",
            "Designed for measurable impact",
            "Trusted by employers",
          ].map((item, i, arr) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 32,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.62)",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </span>
              {i < arr.length - 1 && (
                <span
                  aria-hidden="true"
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#D4943A",
                    opacity: 0.7,
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}