import { useRef, useState } from "react";
import founderImg from "../../assets/founder.jpeg";
import founder1Img from "../../assets/founder1.jpeg";
import { BookOpen, ClipboardCheck, Briefcase, BadgeCheck, ArrowUpRight } from "lucide-react";
import { useInView } from "../../hooks/useAnimations";
import { tokens } from "../../styles/tokens";

const team = [
  {
    num: "01",
    img: founderImg,
    name: "Sibabaliwe Zwide",
    role: "Chief Executive Officer",
    desc: "Strategy, curriculum integrity, NGO & funder partnerships",
    linkedin: "https://www.linkedin.com/in/siba-zwide/",
  },
  {
    num: "02",
    img: founder1Img,
    name: "Vuyo Sigauke",
    role: "General Manager",
    desc: "Operations, revenue, host network & delivery",
    linkedin: "https://www.linkedin.com/in/vuyosigauke/",
  },
];

const pillars = [
  {
    Icon: BookOpen,
    label: "Structured learning",
    detail: "Assessment-gated modules that build on each other",
  },
  {
    Icon: ClipboardCheck,
    label: "Continuous assessment",
    detail: "Progress is tracked and verified at every stage",
  },
  {
    Icon: Briefcase,
    label: "Workplace exposure",
    detail: "7 consecutive days in a real host environment",
  },
  {
    Icon: BadgeCheck,
    label: "Verified certification",
    detail: "Credentials employers can trust and act on",
  },
];

const linkedInBtnStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontSize: 12,
  fontWeight: 600,
  color: "#fff",
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.22)",
  borderRadius: 8,
  padding: "7px 14px",
  letterSpacing: "0.02em",
  transition: "background 0.2s, border-color 0.2s",
};

const TeamCard = ({ member }: { member: typeof team[number] }) => (
  <div
    style={{
      borderRadius: 20,
      overflow: "hidden",
      background: tokens.green900,
      position: "relative",
      height: "100%",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 18, left: 22, zIndex: 2,
        fontFamily: "'DM Mono', monospace",
        fontSize: 11,
        color: "rgba(255,255,255,0.25)",
        letterSpacing: "0.08em",
      }}
    >
      {member.num}
    </div>

    <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
      <img
        src={member.img}
        alt={member.name}
        style={{
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center top",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to top, ${tokens.green900} 0%, transparent 55%)`,
          pointerEvents: "none",
        }}
      />
    </div>

    <div style={{ padding: "0 24px 28px", position: "relative", marginTop: -52, zIndex: 1 }}>
      <div style={{ fontSize: 21, fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 6 }}>
        {member.name}
      </div>
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 10, letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: tokens.amber, marginBottom: 12,
      }}>
        {member.role}
      </div>
      <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.72)", lineHeight: 1.65, margin: "0 0 20px" }}>
        {member.desc}
      </p>
      
       <a
  href={member.linkedin}
  target="_blank"
  rel="noreferrer"
  style={linkedInBtnStyle}
  onMouseEnter={(e) => {
    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.4)";
  }}
  onMouseLeave={(e) => {
    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.22)";
  }}
>
  View LinkedIn <ArrowUpRight size={13} strokeWidth={2} />
</a>
    </div>
  </div>
);

export default function OurStory() {
  const [ref, inView] = useInView(0.08);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const fadeUp = (delay = 0): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "none" : "translateY(22px)",
    transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;

    if (dx < 0 && activeIndex < team.length - 1) {
      setActiveIndex((i) => i + 1);
    } else if (dx > 0 && activeIndex > 0) {
      setActiveIndex((i) => i - 1);
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      id="our-story"
      ref={ref}
      className="fra-section-responsive"
      style={{ background: tokens.cream, padding: "96px 32px 112px" }}
    >
      <style>{`
        @media (max-width: 639px) {
          .fra-team-grid-desktop { display: none !important; }
          .fra-team-mobile { display: block !important; }
          .fra-story-vmgrid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (min-width: 640px) {
          .fra-team-grid-desktop { display: grid !important; }
          .fra-team-mobile { display: none !important; }
        }

        .fra-team-mobile {
          display: none;
          margin: 0 -32px;
          margin-bottom: 80px;
        }

        .fra-team-mobile-track {
          display: flex;
          transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .fra-team-mobile-slide {
          flex: 0 0 100%;
          padding: 0 32px;
          box-sizing: border-box;
        }

        .fra-team-mobile-arrows {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          padding: 0 4px;
        }

        .fra-team-mobile-arrow-btn {
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

        .fra-team-mobile-arrow-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }

        .fra-team-mobile-arrow-btn:not(:disabled):hover {
          background: #f3f4f6;
          border-color: #9ca3af;
        }

        .fra-team-mobile-counter {
          font-size: 13px;
          font-weight: 600;
          color: #6b7280;
          font-variant-numeric: tabular-nums;
        }

        .fra-team-mobile-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
        }

        .fra-team-mobile-dot {
          height: 8px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: width 0.25s ease, background 0.25s ease;
        }
      `}</style>

      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* ── Section label ── */}
        <div className="section-label" style={{ marginBottom: 16, ...fadeUp(0) }}>
          Our Story
        </div>

        {/* ── Headline + intro ── */}
        <div style={{ maxWidth: 1300, marginBottom: 72, ...fadeUp(0.07) }}>
          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(26px, 3vw, 44px)",
              fontWeight: 800,
              color: tokens.ink,
              lineHeight: 1.1,
              margin: "0 0 20px",
              maxWidth: "1600px",
              width: "100%",
            }}
          >
            Meet the people behind{" "}
            <em style={{ color: tokens.green800, fontStyle: "italic" }}>
              Future Ready Africa
            </em>
          </h2>
          <p style={{ fontSize: 16, color: tokens.inkMid, lineHeight: 1.85, margin: 0, textAlign: "justify" }}>
            We don't just train; we verify, assess, and prepare individuals
            for real work environments. Every element of the programme is
            designed to produce graduates that employers can hire with
            confidence.
          </p>
        </div>

        {/* ── Desktop team grid ── */}
        <div
          className="fra-team-grid-desktop"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            marginBottom: 80,
          }}
        >
          {team.map((member, i) => (
            <div key={i} style={{ ...fadeUp(0.1 + i * 0.1) }}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>

        {/* ── Mobile team carousel ── */}
        <div className="fra-team-mobile">
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ overflow: "hidden" }}
          >
            <div
              className="fra-team-mobile-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {team.map((member, i) => (
                <div key={i} className="fra-team-mobile-slide">
                  <div style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "none" : "translateY(22px)",
                    transition: "opacity 0.65s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.1s",
                  }}>
                    <TeamCard member={member} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation row */}
          <div className="fra-team-mobile-arrows">
            <button
              className="fra-team-mobile-arrow-btn"
              onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous founder"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke={tokens.green900} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <span className="fra-team-mobile-counter">
              {activeIndex + 1} / {team.length}
            </span>

            <button
              className="fra-team-mobile-arrow-btn"
              onClick={() => setActiveIndex((i) => Math.min(team.length - 1, i + 1))}
              disabled={activeIndex === team.length - 1}
              aria-label="Next founder"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke={tokens.green900} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="fra-team-mobile-dots" role="tablist" aria-label="Founder indicators">
            {team.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to founder ${i + 1}`}
                className="fra-team-mobile-dot"
                onClick={() => setActiveIndex(i)}
                style={{
                  background: i === activeIndex ? tokens.green900 : "#d1d5db",
                  width: i === activeIndex ? 20 : 8,
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Vision + Mission ── */}
        <div
          style={{
            borderTop: `1px solid ${tokens.border}`,
            paddingTop: 64,
            marginBottom: 64,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            ...fadeUp(0.3),
          }}
          className="fra-story-vmgrid"
        >
          <div>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 9.5, letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: tokens.amber, marginBottom: 16,
            }}>
              Our Vision
            </div>
            <blockquote style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 18, fontStyle: "italic",
              color: tokens.green800, lineHeight: 1.7,
              borderLeft: `3px solid ${tokens.green800}`,
              paddingLeft: 20, margin: 0,
            }}>
              An Africa where youth are job-ready, organisations are
              future-ready, and skills development drives sustainable economic
              growth.
            </blockquote>
          </div>

          <div>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 9.5, letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: tokens.amber, marginBottom: 16,
            }}>
              Our Mission
            </div>
            <p style={{ fontSize: 15, color: tokens.inkMid, lineHeight: 1.9, margin: 0 }}>
              To equip young people with verified, employer-trusted credentials
              — bridging the gap between education and the world of work through
              structured training, honest assessment, and real workplace
              experience.
            </p>
          </div>
        </div>

        {/* ── Approach pillars ── */}
        <div style={{ ...fadeUp(0.38) }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 9.5, letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: tokens.amber, marginBottom: 28,
          }}>
            Our Approach
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}>
            {pillars.map(({ Icon, label, detail }, i) => (
              <div
                key={label}
                style={{
                  background: "#fff",
                  border: `1px solid ${tokens.border}`,
                  borderRadius: 16,
                  padding: "24px 22px",
                  ...fadeUp(0.38 + i * 0.07),
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{
                    width: 40, height: 40, flexShrink: 0,
                    borderRadius: 10,
                    background: tokens.cream,
                    border: `1px solid ${tokens.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={18} strokeWidth={1.75} color={tokens.green800} />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: tokens.ink, letterSpacing: "-0.01em" }}>
                    {label}
                  </div>
                </div>
                <p style={{ fontSize: 13, color: tokens.inkMid, lineHeight: 1.7, margin: 0 }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}