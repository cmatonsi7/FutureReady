// import { useRef, useState } from "react";
// import { useInView } from "../../hooks/useAnimations";
// import { tokens } from "../../styles/tokens";

// export default function Pricing() {
//   const [ref, inView] = useInView(0.1);
//   const [tab, setTab] = useState<"organisations" | "individuals">("organisations");
//   const [activeIndex, setActiveIndex] = useState(0);
//   const touchStartX = useRef<number | null>(null);
//   const touchStartY = useRef<number | null>(null);

//   const orgPlans = [
//     {
//       tier: "Growth",
//       price: "R3,500",
//       sub: "per participant",
//       cohort: "10–25 cohort",
//       features: [
//         "Custom programmes",
//         "Full 8-week course access",
//         "Facilitated group clinics",
//         "Assessment and certification",
//         "Priority support and reporting",
//         "Custom impact dashboards",
//       ],
//       highlighted: false,
//       popular: false,
//     },
//     {
//       tier: "Starter",
//       price: "R2,500",
//       sub: "per participant",
//       cohort: "26–50 cohort",
//       features: [
//         "Full 8-week course access",
//         "Facilitated group clinics",
//         "Assessment & certification",
//         "Work exposure placement",
//         "Progress tracking dashboard",
//         "Impact report for funders",
//       ],
//       highlighted: true,
//       popular: true,
//     },
//     {
//       tier: "Scale",
//       price: "R2,000",
//       sub: "per participant",
//       cohort: "51–100 cohort",
//       features: [
//         "Full 8-week course access",
//         "Facilitated group clinics",
//         "Assessment and certification",
//         "Progress tracking dashboard",
//         "Impact report for funders",
//       ],
//       highlighted: false,
//       popular: false,
//     },
//     {
//       tier: "Enterprise",
//       price: "R1,800",
//       sub: "per participant",
//       cohort: "100+ cohort",
//       features: [
//         "Custom programmes",
//         "Facilitated group clinics",
//         "Assessment and certification",
//         "Priority support and reporting",
//         "Custom impact dashboards",
//       ],
//       highlighted: false,
//       popular: false,
//     },
//   ];

//   const indPlans = [
//     {
//       tier: "Full Payment",
//       price: "R1,710",
//       sub: "Once off",
//       badge: "Save R90 — 5% off",
//       cta: "Enrol — R1,710",
//       note: "50% on sign-up · 50% at Week 4",
//       features: [
//         "Full 8-week course access",
//         "Group clinic sessions (optional)",
//         "All assessments & certification",
//         "Work exposure placement",
//         "Professional profile review",
//         "Lifetime material access",
//       ],
//       highlighted: false,
//     },
//     {
//       tier: "2 Instalments",
//       price: "R950",
//       sub: "× 2 payments · Total R1,900",
//       badge: null,
//       cta: "Enrol — R950 × 2",
//       note: "Split across Week 1 & Week 4",
//       features: [
//         "Full 8-week course access",
//         "Group clinic sessions (optional)",
//         "All assessments & certification",
//         "Work exposure placement",
//         "Professional profile review",
//         "Lifetime material access",
//       ],
//       highlighted: true,
//     },
//     {
//       tier: "Monthly",
//       price: "R500",
//       sub: "× 4 months · Total R2,000",
//       badge: null,
//       cta: "Enrol — R500/mo",
//       note: "Billed monthly over 4 months",
//       features: [
//         "Full 8-week course access",
//         "Group clinic sessions (optional)",
//         "All assessments & certification",
//         "Work exposure placement",
//         "Professional profile review",
//         "Lifetime material access",
//       ],
//       highlighted: false,
//     },
//   ];

//   const activePlans = tab === "organisations" ? orgPlans : indPlans;

//   const switchTab = (t: "organisations" | "individuals") => {
//     setTab(t);
//     setActiveIndex(0);
//   };

//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX;
//     touchStartY.current = e.touches[0].clientY;
//   };

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     if (touchStartX.current === null || touchStartY.current === null) return;
//     const dx = e.changedTouches[0].clientX - touchStartX.current;
//     const dy = e.changedTouches[0].clientY - touchStartY.current;

//     if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;

//     if (dx < 0 && activeIndex < activePlans.length - 1) {
//       setActiveIndex((i) => i + 1);
//     } else if (dx > 0 && activeIndex > 0) {
//       setActiveIndex((i) => i - 1);
//     }

//     touchStartX.current = null;
//     touchStartY.current = null;
//   };

//   // ── Shared card renderer ──────────────────────────────────────
//   const OrgCard = ({ plan, i }: { plan: typeof orgPlans[number]; i: number }) => (
//     <div
//       style={{
//         background: plan.highlighted ? tokens.green800 : "#fff",
//         border: `1.5px solid ${plan.highlighted ? tokens.green800 : tokens.border}`,
//         borderRadius: 20,
//         padding: "28px 24px 24px",
//         display: "flex",
//         flexDirection: "column",
//         position: "relative",
//         boxShadow: plan.highlighted ? "0 8px 40px rgba(45,74,62,0.18)" : "none",
//         opacity: inView ? 1 : 0,
//         transform: inView ? "none" : "translateY(20px)",
//         transition: `all 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`,
//         height: "100%",
//         boxSizing: "border-box",
//       }}
//     >
//       {plan.popular && (
//         <div style={{
//           position: "absolute", top: -14, left: "50%",
//           transform: "translateX(-50%)",
//           background: tokens.amber, color: "#fff",
//           fontFamily: "'DM Mono', monospace",
//           fontSize: 9, letterSpacing: "0.14em",
//           textTransform: "uppercase",
//           padding: "5px 14px", borderRadius: 20,
//           whiteSpace: "nowrap",
//         }}>Most Popular</div>
//       )}
//       <div style={{
//         fontFamily: "'DM Mono', monospace",
//         fontSize: 10, letterSpacing: "0.16em",
//         textTransform: "uppercase",
//         color: plan.highlighted ? tokens.amber : tokens.inkMid,
//         marginBottom: 12,
//       }}>{plan.tier}</div>
//       <div style={{ marginBottom: 4 }}>
//         <span className="display" style={{
//           fontSize: 44, fontWeight: 800, lineHeight: 1,
//           color: plan.highlighted ? "#fff" : tokens.ink,
//         }}>{plan.price}</span>
//       </div>
//       <div style={{
//         fontSize: 13,
//         color: plan.highlighted ? "rgba(255,255,255,0.55)" : tokens.inkMid,
//         marginBottom: 4,
//       }}>{plan.sub}</div>
//       <div style={{
//         fontFamily: "'DM Mono', monospace",
//         fontSize: 10, letterSpacing: "0.08em",
//         color: plan.highlighted ? "rgba(255,255,255,0.4)" : tokens.inkLight,
//         marginBottom: 24, textTransform: "uppercase",
//       }}>{plan.cohort}</div>
//       <div style={{
//         height: 1,
//         background: plan.highlighted ? "rgba(255,255,255,0.12)" : tokens.border,
//         marginBottom: 20,
//       }} />
//       <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
//         {plan.features.map((f) => (
//           <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
//             <span style={{
//               color: plan.highlighted ? tokens.amber : tokens.green800,
//               fontSize: 13, lineHeight: 1.6, flexShrink: 0,
//             }}>✓</span>
//             <span style={{
//               fontSize: 13,
//               color: plan.highlighted ? "rgba(255,255,255,0.8)" : tokens.inkMid,
//               lineHeight: 1.6,
//             }}>{f}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const IndCard = ({ plan, i }: { plan: typeof indPlans[number]; i: number }) => (
//     <div
//       style={{
//         background: plan.highlighted ? tokens.green800 : "#fff",
//         border: `1.5px solid ${plan.highlighted ? tokens.green800 : tokens.border}`,
//         borderRadius: 20,
//         padding: "28px 24px 24px",
//         display: "flex",
//         flexDirection: "column",
//         position: "relative",
//         boxShadow: plan.highlighted ? "0 8px 40px rgba(45,74,62,0.18)" : "none",
//         opacity: inView ? 1 : 0,
//         transform: inView ? "none" : "translateY(20px)",
//         transition: `all 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`,
//         height: "100%",
//         boxSizing: "border-box",
//       }}
//     >
//       <div style={{
//         fontFamily: "'DM Mono', monospace",
//         fontSize: 10, letterSpacing: "0.16em",
//         textTransform: "uppercase",
//         color: plan.highlighted ? tokens.amber : tokens.inkMid,
//         marginBottom: 12,
//       }}>{plan.tier}</div>
//       <div style={{ marginBottom: 4 }}>
//         <span className="display" style={{
//           fontSize: 44, fontWeight: 800, lineHeight: 1,
//           color: plan.highlighted ? "#fff" : tokens.ink,
//         }}>{plan.price}</span>
//       </div>
//       <div style={{
//         fontSize: 13,
//         color: plan.highlighted ? "rgba(255,255,255,0.55)" : tokens.inkMid,
//         marginBottom: plan.badge ? 12 : 24,
//       }}>{plan.sub}</div>
//       {plan.badge && (
//         <div style={{
//           display: "inline-block",
//           background: `${tokens.amber}22`, color: tokens.amber,
//           fontFamily: "'DM Mono', monospace",
//           fontSize: 10, letterSpacing: "0.08em",
//           padding: "4px 12px", borderRadius: 6,
//           marginBottom: 24, alignSelf: "flex-start",
//           textTransform: "uppercase",
//         }}>{plan.badge}</div>
//       )}
//       <div style={{
//         height: 1,
//         background: plan.highlighted ? "rgba(255,255,255,0.12)" : tokens.border,
//         marginBottom: 20,
//       }} />
//       <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, marginBottom: 24 }}>
//         {plan.features.map((f) => (
//           <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
//             <span style={{
//               color: plan.highlighted ? tokens.amber : tokens.green800,
//               fontSize: 13, lineHeight: 1.6, flexShrink: 0,
//             }}>✓</span>
//             <span style={{
//               fontSize: 13,
//               color: plan.highlighted ? "rgba(255,255,255,0.8)" : tokens.inkMid,
//               lineHeight: 1.6,
//             }}>{f}</span>
//           </div>
//         ))}
//       </div>
//       <button
//         type="button"
//         style={{
//           width: "100%", padding: "14px 20px",
//           borderRadius: 10,
//           border: plan.highlighted ? "none" : `1.5px solid ${tokens.green800}`,
//           cursor: "pointer",
//           fontFamily: "'DM Sans', sans-serif",
//           fontSize: 14, fontWeight: 700, letterSpacing: "0.01em",
//           background: plan.highlighted ? tokens.amber : "transparent",
//           color: plan.highlighted ? "#fff" : tokens.green800,
//           marginBottom: 14, transition: "all 0.2s ease",
//         }}
//         onMouseEnter={e => {
//           e.currentTarget.style.opacity = "0.85";
//           e.currentTarget.style.transform = "translateY(-1px)";
//         }}
//         onMouseLeave={e => {
//           e.currentTarget.style.opacity = "1";
//           e.currentTarget.style.transform = "none";
//         }}
//       >{plan.cta}</button>
//       <div style={{
//         borderTop: `1px solid ${plan.highlighted ? "rgba(255,255,255,0.12)" : tokens.border}`,
//         paddingTop: 14,
//         fontFamily: "'DM Mono', monospace",
//         fontSize: 10, letterSpacing: "0.06em",
//         color: plan.highlighted ? "rgba(255,255,255,0.4)" : tokens.inkLight,
//         textTransform: "uppercase",
//       }}>{plan.note}</div>
//     </div>
//   );

//   return (
//     <section
//       id="pricing"
//       ref={ref}
//       className="fra-section-responsive"
//       style={{ background: "#fff", padding: "100px 32px" }}
//     >
//       <style>{`
//         @media (max-width: 639px) {
//           .fra-pricing-grid-desktop { display: none !important; }
//           .fra-pricing-mobile { display: block !important; }
//         }
//         @media (min-width: 640px) {
//           .fra-pricing-grid-desktop { display: grid !important; }
//           .fra-pricing-mobile { display: none !important; }
//         }

//         .fra-pricing-mobile {
//           display: none;
//           margin: 0 -32px;
//         }

//         .fra-pricing-mobile-track {
//           display: flex;
//           transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
//           will-change: transform;
//         }

//         .fra-pricing-mobile-slide {
//           flex: 0 0 100%;
//           padding: 0 32px;
//           box-sizing: border-box;
//           /* Extra top padding so the "Most Popular" badge isn't clipped */
//           padding-top: 20px;
//         }

//         .fra-pricing-mobile-arrows {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-top: 20px;
//           padding: 0 4px;
//         }

//         .fra-pricing-mobile-arrow-btn {
//           border: 1px solid ${tokens.border};
//           background: #fff;
//           border-radius: 50%;
//           width: 40px;
//           height: 40px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: background 0.18s, border-color 0.18s;
//         }

//         .fra-pricing-mobile-arrow-btn:disabled {
//           opacity: 0.3;
//           cursor: default;
//         }

//         .fra-pricing-mobile-arrow-btn:not(:disabled):hover {
//           background: #f3f4f6;
//           border-color: #9ca3af;
//         }

//         .fra-pricing-mobile-counter {
//           font-size: 13px;
//           font-weight: 600;
//           color: #6b7280;
//           font-variant-numeric: tabular-nums;
//         }

//         .fra-pricing-mobile-dots {
//           display: flex;
//           justify-content: center;
//           gap: 8px;
//           margin-top: 16px;
//         }

//         .fra-pricing-mobile-dot {
//           height: 8px;
//           border-radius: 999px;
//           border: none;
//           cursor: pointer;
//           padding: 0;
//           transition: width 0.25s ease, background 0.25s ease;
//         }
//       `}</style>

//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>

//         {/* ── Header ── */}
//         <div style={{ padding: "0", marginBottom: 48, textAlign: "center" }}>
//           <div className="section-label" style={{ marginBottom: 12 }}>Pricing</div>
//           <h2 className="display" style={{
//             fontSize: "clamp(32px, 4vw, 68px)",
//             fontWeight: 800, lineHeight: 1.1,
//             margin: "0 0 16px", letterSpacing: "-0.02em",
//             color: tokens.ink, textAlign: "center",
//           }}>
//             Transparent,{" "}
//             <em style={{ color: tokens.green800, fontStyle: "italic" }}>accessible</em>{" "}
//             pricing
//           </h2>
//           <p style={{ fontSize: 20, color: tokens.inkMid, lineHeight: 1.7, margin: "0 auto", maxWidth: 760 }}>
//             Cohort-based for organisations, flexible payment for individuals. No hidden fees.
//           </p>
//         </div>

//         {/* ── Tab toggle ── */}
//         <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
//           <div className="fra-pricing-tabs" style={{
//             display: "inline-flex",
//             background: tokens.cream,
//             borderRadius: 10, padding: 4,
//             border: `1px solid ${tokens.border}`,
//           }}>
//             {(["organisations", "individuals"] as const).map((t) => (
//               <button
//                 key={t}
//                 type="button"
//                 aria-pressed={tab === t}
//                 onClick={() => switchTab(t)}
//                 style={{
//                   padding: "10px 24px", borderRadius: 8,
//                   border: "none", cursor: "pointer",
//                   fontFamily: "'DM Sans', sans-serif",
//                   fontSize: 14, fontWeight: 600,
//                   transition: "all 0.2s ease",
//                   background: tab === t ? tokens.green800 : "transparent",
//                   color: tab === t ? "#fff" : tokens.inkMid,
//                 }}
//               >
//                 {t === "organisations" ? "For Organisations" : "For Individuals"}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* ── Desktop grids ── */}
//         {tab === "organisations" && (
//           <div className="fra-pricing-grid fra-pricing-grid-desktop fra-pricing-grid-org" style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(4, 1fr)",
//             gap: 16, alignItems: "stretch",
//           }}>
//             {orgPlans.map((plan, i) => <OrgCard key={plan.tier} plan={plan} i={i} />)}
//           </div>
//         )}

//         {tab === "individuals" && (
//           <div className="fra-pricing-grid fra-pricing-grid-desktop fra-pricing-grid-ind" style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(3, 1fr)",
//             gap: 16, alignItems: "stretch",
//           }}>
//             {indPlans.map((plan, i) => <IndCard key={plan.tier} plan={plan} i={i} />)}
//           </div>
//         )}

//         {/* ── Mobile carousel ── */}
//         <div className="fra-pricing-mobile">
//           <div
//             onTouchStart={handleTouchStart}
//             onTouchEnd={handleTouchEnd}
//             style={{ overflow: "hidden" }}
//           >
//             <div
//               className="fra-pricing-mobile-track"
//               style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//             >
//               {activePlans.map((plan, i) => (
//                 <div key={plan.tier} className="fra-pricing-mobile-slide">
//                   {tab === "organisations"
//                     ? <OrgCard plan={plan as typeof orgPlans[number]} i={i} />
//                     : <IndCard plan={plan as typeof indPlans[number]} i={i} />
//                   }
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation row */}
//           <div className="fra-pricing-mobile-arrows">
//             <button
//               className="fra-pricing-mobile-arrow-btn"
//               onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
//               disabled={activeIndex === 0}
//               aria-label="Previous plan"
//             >
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                 <path d="M10 12L6 8l4-4" stroke={tokens.green900} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>

//             <span className="fra-pricing-mobile-counter">
//               {activeIndex + 1} / {activePlans.length}
//             </span>

//             <button
//               className="fra-pricing-mobile-arrow-btn"
//               onClick={() => setActiveIndex((i) => Math.min(activePlans.length - 1, i + 1))}
//               disabled={activeIndex === activePlans.length - 1}
//               aria-label="Next plan"
//             >
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                 <path d="M6 4l4 4-4 4" stroke={tokens.green900} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//           </div>

//           {/* Dot indicators */}
//           <div className="fra-pricing-mobile-dots" role="tablist" aria-label="Plan indicators">
//             {activePlans.map((_, i) => (
//               <button
//                 key={i}
//                 role="tab"
//                 aria-selected={i === activeIndex}
//                 aria-label={`Go to plan ${i + 1}`}
//                 className="fra-pricing-mobile-dot"
//                 onClick={() => setActiveIndex(i)}
//                 style={{
//                   background: i === activeIndex ? tokens.green900 : "#d1d5db",
//                   width: i === activeIndex ? 20 : 8,
//                 }}
//               />
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

import { useRef, useState } from "react";
import { useInView } from "../../hooks/useAnimations";
import { tokens } from "../../styles/tokens";

export default function Pricing() {
  const [ref, inView] = useInView(0.1);
  const [tab, setTab] = useState<"organisations" | "individuals">("organisations");
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const orgPlans = [
    {
      tier: "Growth",
      price: "R3,500",
      sub: "per participant",
      cohort: "10–25 cohort",
      features: [
        "Custom programmes",
        "Full 8-week course access",
        "Facilitated group clinics",
        "Assessment and certification",
        "Priority support and reporting",
        "Custom impact dashboards",
      ],
      highlighted: false,
      popular: false,
    },
    {
      tier: "Starter",
      price: "R2,500",
      sub: "per participant",
      cohort: "26–50 cohort",
      features: [
        "Full 8-week course access",
        "Facilitated group clinics",
        "Assessment & certification",
        "Work exposure placement",
        "Progress tracking dashboard",
        "Impact report for funders",
      ],
      highlighted: true,
      popular: true,
    },
    {
      tier: "Scale",
      price: "R2,000",
      sub: "per participant",
      cohort: "51–100 cohort",
      features: [
        "Full 8-week course access",
        "Facilitated group clinics",
        "Assessment and certification",
        "Progress tracking dashboard",
        "Impact report for funders",
      ],
      highlighted: false,
      popular: false,
    },
    {
      tier: "Enterprise",
      price: "R1,800",
      sub: "per participant",
      cohort: "100+ cohort",
      features: [
        "Custom programmes",
        "Facilitated group clinics",
        "Assessment and certification",
        "Priority support and reporting",
        "Custom impact dashboards",
      ],
      highlighted: false,
      popular: false,
    },
  ];

  const indPlans = [
    {
      tier: "Full Payment",
      price: "R1,710",
      sub: "Once off",
      badge: "Save R90 — 5% off",
      cta: "Enrol — R1,710",
      note: "50% on sign-up · 50% at Week 4",
      features: [
        "Full 8-week course access",
        "Group clinic sessions (optional)",
        "All assessments & certification",
        "Work exposure placement",
        "Professional profile review",
        "Lifetime material access",
      ],
      highlighted: false,
    },
    {
      tier: "2 Instalments",
      price: "R950",
      sub: "× 2 payments · Total R1,900",
      badge: null,
      cta: "Enrol — R950 × 2",
      note: "Split across Week 1 & Week 4",
      features: [
        "Full 8-week course access",
        "Group clinic sessions (optional)",
        "All assessments & certification",
        "Work exposure placement",
        "Professional profile review",
        "Lifetime material access",
      ],
      highlighted: true,
    },
    {
      tier: "Monthly",
      price: "R500",
      sub: "× 4 months · Total R2,000",
      badge: null,
      cta: "Enrol — R500/mo",
      note: "Billed monthly over 4 months",
      features: [
        "Full 8-week course access",
        "Group clinic sessions (optional)",
        "All assessments & certification",
        "Work exposure placement",
        "Professional profile review",
        "Lifetime material access",
      ],
      highlighted: false,
    },
  ];

  const activePlans = tab === "organisations" ? orgPlans : indPlans;

  const switchTab = (t: "organisations" | "individuals") => {
    setTab(t);
    setActiveIndex(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;

    if (dx < 0 && activeIndex < activePlans.length - 1) {
      setActiveIndex((i) => i + 1);
    } else if (dx > 0 && activeIndex > 0) {
      setActiveIndex((i) => i - 1);
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // ── Shared card renderer ──────────────────────────────────────
  const OrgCard = ({ plan, i }: { plan: typeof orgPlans[number]; i: number }) => (
    <div
      style={{
        background: plan.highlighted ? tokens.green800 : "#fff",
        border: `1.5px solid ${plan.highlighted ? tokens.green800 : tokens.border}`,
        borderRadius: 20,
        padding: "28px 24px 24px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        boxShadow: plan.highlighted ? "0 8px 40px rgba(45,74,62,0.18)" : "none",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(20px)",
        transition: `all 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`,
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {plan.popular && (
        <div style={{
          position: "absolute", top: -14, left: "50%",
          transform: "translateX(-50%)",
          background: tokens.amber, color: "#fff",
          fontFamily: "'DM Mono', monospace",
          fontSize: 9, letterSpacing: "0.14em",
          textTransform: "uppercase",
          padding: "5px 14px", borderRadius: 20,
          whiteSpace: "nowrap",
        }}>Most Popular</div>
      )}
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 10, letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: plan.highlighted ? tokens.amber : tokens.inkMid,
        marginBottom: 12,
      }}>{plan.tier}</div>
      <div style={{ marginBottom: 4 }}>
        <span className="display" style={{
          fontSize: 44, fontWeight: 800, lineHeight: 1,
          color: plan.highlighted ? "#fff" : tokens.ink,
        }}>{plan.price}</span>
      </div>
      <div style={{
        fontSize: 13,
        color: plan.highlighted ? "rgba(255,255,255,0.55)" : tokens.inkMid,
        marginBottom: 4,
      }}>{plan.sub}</div>
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 10, letterSpacing: "0.08em",
        color: plan.highlighted ? "rgba(255,255,255,0.4)" : tokens.inkLight,
        marginBottom: 24, textTransform: "uppercase",
      }}>{plan.cohort}</div>
      <div style={{
        height: 1,
        background: plan.highlighted ? "rgba(255,255,255,0.12)" : tokens.border,
        marginBottom: 20,
      }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        {plan.features.map((f) => (
          <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <span style={{
              color: plan.highlighted ? tokens.amber : tokens.green800,
              fontSize: 13, lineHeight: 1.6, flexShrink: 0,
            }}>✓</span>
            <span style={{
              fontSize: 13,
              color: plan.highlighted ? "rgba(255,255,255,0.8)" : tokens.inkMid,
              lineHeight: 1.6,
            }}>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const IndCard = ({ plan, i }: { plan: typeof indPlans[number]; i: number }) => (
    <div
      style={{
        background: plan.highlighted ? tokens.green800 : "#fff",
        border: `1.5px solid ${plan.highlighted ? tokens.green800 : tokens.border}`,
        borderRadius: 20,
        padding: "28px 24px 24px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        boxShadow: plan.highlighted ? "0 8px 40px rgba(45,74,62,0.18)" : "none",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(20px)",
        transition: `all 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`,
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 10, letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: plan.highlighted ? tokens.amber : tokens.inkMid,
        marginBottom: 12,
      }}>{plan.tier}</div>
      <div style={{ marginBottom: 4 }}>
        <span className="display" style={{
          fontSize: 44, fontWeight: 800, lineHeight: 1,
          color: plan.highlighted ? "#fff" : tokens.ink,
        }}>{plan.price}</span>
      </div>
      <div style={{
        fontSize: 13,
        color: plan.highlighted ? "rgba(255,255,255,0.55)" : tokens.inkMid,
        marginBottom: plan.badge ? 12 : 24,
      }}>{plan.sub}</div>
      {plan.badge && (
        <div style={{
          display: "inline-block",
          background: `${tokens.amber}22`, color: tokens.amber,
          fontFamily: "'DM Mono', monospace",
          fontSize: 10, letterSpacing: "0.08em",
          padding: "4px 12px", borderRadius: 6,
          marginBottom: 24, alignSelf: "flex-start",
          textTransform: "uppercase",
        }}>{plan.badge}</div>
      )}
      <div style={{
        height: 1,
        background: plan.highlighted ? "rgba(255,255,255,0.12)" : tokens.border,
        marginBottom: 20,
      }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, marginBottom: 24 }}>
        {plan.features.map((f) => (
          <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <span style={{
              color: plan.highlighted ? tokens.amber : tokens.green800,
              fontSize: 13, lineHeight: 1.6, flexShrink: 0,
            }}>✓</span>
            <span style={{
              fontSize: 13,
              color: plan.highlighted ? "rgba(255,255,255,0.8)" : tokens.inkMid,
              lineHeight: 1.6,
            }}>{f}</span>
          </div>
        ))}
      </div>
      <a
        href="https://learn.futurereadyafrica.co.za/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "100%", padding: "14px 20px",
          borderRadius: 10,
          border: plan.highlighted ? "none" : `1.5px solid ${tokens.green800}`,
          cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14, fontWeight: 700, letterSpacing: "0.01em",
          background: plan.highlighted ? tokens.amber : "transparent",
          color: plan.highlighted ? "#fff" : tokens.green800,
          marginBottom: 14, transition: "all 0.2s ease",
          display: "flex", alignItems: "center", justifyContent: "center",
          textDecoration: "none", boxSizing: "border-box",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.opacity = "0.85";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.transform = "none";
        }}
      >{plan.cta}</a>
      <div style={{
        borderTop: `1px solid ${plan.highlighted ? "rgba(255,255,255,0.12)" : tokens.border}`,
        paddingTop: 14,
        fontFamily: "'DM Mono', monospace",
        fontSize: 10, letterSpacing: "0.06em",
        color: plan.highlighted ? "rgba(255,255,255,0.4)" : tokens.inkLight,
        textTransform: "uppercase",
      }}>{plan.note}</div>
    </div>
  );

  return (
    <section
      id="pricing"
      ref={ref}
      className="fra-section-responsive"
      style={{ background: "#fff", padding: "100px 32px" }}
    >
      <style>{`
        @media (max-width: 639px) {
          .fra-pricing-grid-desktop { display: none !important; }
          .fra-pricing-mobile { display: block !important; }
        }
        @media (min-width: 640px) {
          .fra-pricing-grid-desktop { display: grid !important; }
          .fra-pricing-mobile { display: none !important; }
        }

        .fra-pricing-mobile {
          display: none;
          margin: 0 -32px;
        }

        .fra-pricing-mobile-track {
          display: flex;
          transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .fra-pricing-mobile-slide {
          flex: 0 0 100%;
          padding: 0 32px;
          box-sizing: border-box;
          /* Extra top padding so the "Most Popular" badge isn't clipped */
          padding-top: 20px;
        }

        .fra-pricing-mobile-arrows {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          padding: 0 4px;
        }

        .fra-pricing-mobile-arrow-btn {
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

        .fra-pricing-mobile-arrow-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }

        .fra-pricing-mobile-arrow-btn:not(:disabled):hover {
          background: #f3f4f6;
          border-color: #9ca3af;
        }

        .fra-pricing-mobile-counter {
          font-size: 13px;
          font-weight: 600;
          color: #6b7280;
          font-variant-numeric: tabular-nums;
        }

        .fra-pricing-mobile-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
        }

        .fra-pricing-mobile-dot {
          height: 8px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: width 0.25s ease, background 0.25s ease;
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div style={{ padding: "0", marginBottom: 48, textAlign: "center" }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Pricing</div>
          <h2 className="display" style={{
            fontSize: "clamp(32px, 4vw, 68px)",
            fontWeight: 800, lineHeight: 1.1,
            margin: "0 0 16px", letterSpacing: "-0.02em",
            color: tokens.ink, textAlign: "center",
          }}>
            Transparent,{" "}
            <em style={{ color: tokens.green800, fontStyle: "italic" }}>accessible</em>{" "}
            pricing
          </h2>
          <p style={{ fontSize: 20, color: tokens.inkMid, lineHeight: 1.7, margin: "0 auto", maxWidth: 760 }}>
            Cohort-based for organisations, flexible payment for individuals. No hidden fees.
          </p>
        </div>

        {/* ── Tab toggle ── */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <div className="fra-pricing-tabs" style={{
            display: "inline-flex",
            background: tokens.cream,
            borderRadius: 10, padding: 4,
            border: `1px solid ${tokens.border}`,
          }}>
            {(["organisations", "individuals"] as const).map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={tab === t}
                onClick={() => switchTab(t)}
                style={{
                  padding: "10px 24px", borderRadius: 8,
                  border: "none", cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14, fontWeight: 600,
                  transition: "all 0.2s ease",
                  background: tab === t ? tokens.green800 : "transparent",
                  color: tab === t ? "#fff" : tokens.inkMid,
                }}
              >
                {t === "organisations" ? "For Organisations" : "For Individuals"}
              </button>
            ))}
          </div>
        </div>

        {/* ── Desktop grids ── */}
        {tab === "organisations" && (
          <div className="fra-pricing-grid fra-pricing-grid-desktop fra-pricing-grid-org" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16, alignItems: "stretch",
          }}>
            {orgPlans.map((plan, i) => <OrgCard key={plan.tier} plan={plan} i={i} />)}
          </div>
        )}

        {tab === "individuals" && (
          <div className="fra-pricing-grid fra-pricing-grid-desktop fra-pricing-grid-ind" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16, alignItems: "stretch",
          }}>
            {indPlans.map((plan, i) => <IndCard key={plan.tier} plan={plan} i={i} />)}
          </div>
        )}

        {/* ── Mobile carousel ── */}
        <div className="fra-pricing-mobile">
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ overflow: "hidden" }}
          >
            <div
              className="fra-pricing-mobile-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {activePlans.map((plan, i) => (
                <div key={plan.tier} className="fra-pricing-mobile-slide">
                  {tab === "organisations"
                    ? <OrgCard plan={plan as typeof orgPlans[number]} i={i} />
                    : <IndCard plan={plan as typeof indPlans[number]} i={i} />
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Navigation row */}
          <div className="fra-pricing-mobile-arrows">
            <button
              className="fra-pricing-mobile-arrow-btn"
              onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous plan"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke={tokens.green900} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <span className="fra-pricing-mobile-counter">
              {activeIndex + 1} / {activePlans.length}
            </span>

            <button
              className="fra-pricing-mobile-arrow-btn"
              onClick={() => setActiveIndex((i) => Math.min(activePlans.length - 1, i + 1))}
              disabled={activeIndex === activePlans.length - 1}
              aria-label="Next plan"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke={tokens.green900} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="fra-pricing-mobile-dots" role="tablist" aria-label="Plan indicators">
            {activePlans.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to plan ${i + 1}`}
                className="fra-pricing-mobile-dot"
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