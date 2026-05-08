// import { useRef, useState } from "react";
// import { useInView } from "../../hooks/useAnimations";
// import { tokens } from "../../styles/tokens";

// export default function Testimonials() {
//   const [active, setActive] = useState(0);
//   const [ref, inView] = useInView();
//   const touchStartX = useRef<number | null>(null);
//   const touchStartY = useRef<number | null>(null);

//   const stories = [
//     {
//       quote: "Before FRA I had a degree and no job offers. After 8 weeks I had 3 interviews and employers actually trusted my certificate because they could verify what I did.",
//       name: "Someleze C.",
//       role: "Graduate · Now employed at Cape Town SME",
//       avatar: "AM",
//       color: "#7EC8A4",
//     },
//     {
//       quote: "We have run learnership programmes for 10 years and had no verifiable data to show our funder. FRA's impact dashboard changed our conversation completely.",
//       name: "Nomsa D.",
//       role: "Programme Manager · Western Cape NGO",
//       avatar: "ND",
//       color: tokens.amber,
//     },
//     {
//       quote: "As an employer, I've seen hundreds of certificates that mean nothing. The FRA certificate is different — I can see exactly what the candidate was assessed on and how they performed.",
//       name: "James P.",
//       role: "Operations Director · Gauteng SME",
//       avatar: "JP",
//       color: "#A0C4E8",
//     },
//   ];

//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX;
//     touchStartY.current = e.touches[0].clientY;
//   };

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     if (touchStartX.current === null || touchStartY.current === null) return;
//     const dx = e.changedTouches[0].clientX - touchStartX.current;
//     const dy = e.changedTouches[0].clientY - touchStartY.current;

//     if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;

//     if (dx < 0 && active < stories.length - 1) {
//       setActive((i) => i + 1);
//     } else if (dx > 0 && active > 0) {
//       setActive((i) => i - 1);
//     }

//     touchStartX.current = null;
//     touchStartY.current = null;
//   };

//   return (
//     <section
//       id="testimonials"
//       ref={ref}
//       className="fra-section-responsive"
//       style={{ background: tokens.green900, padding: "100px 32px", overflow: "hidden" }}
//     >
//       <style>{`
//         @media (max-width: 639px) {
//           .fra-testimonial-grid-desktop { display: none !important; }
//           .fra-testimonial-mobile { display: block !important; }
//         }
//         @media (min-width: 640px) {
//           .fra-testimonial-grid-desktop { display: grid !important; }
//           .fra-testimonial-mobile { display: none !important; }
//         }

//         .fra-testimonial-mobile {
//           display: none;
//           margin: 0 -32px;
//         }

//         .fra-testimonial-mobile-track {
//           display: flex;
//           transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
//           will-change: transform;
//         }

//         .fra-testimonial-mobile-slide {
//           flex: 0 0 100%;
//           padding: 0 32px;
//           box-sizing: border-box;
//         }

//         .fra-testimonial-mobile-arrows {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-top: 20px;
//           padding: 0 4px;
//         }

//         .fra-testimonial-mobile-arrow-btn {
//           border: 1px solid rgba(255,255,255,0.15);
//           background: rgba(255,255,255,0.06);
//           border-radius: 50%;
//           width: 40px;
//           height: 40px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: background 0.18s, border-color 0.18s;
//         }

//         .fra-testimonial-mobile-arrow-btn:disabled {
//           opacity: 0.25;
//           cursor: default;
//         }

//         .fra-testimonial-mobile-arrow-btn:not(:disabled):hover {
//           background: rgba(255,255,255,0.12);
//           border-color: rgba(255,255,255,0.28);
//         }

//         .fra-testimonial-mobile-counter {
//           font-size: 13px;
//           font-weight: 600;
//           color: rgba(255,255,255,0.4);
//           font-variant-numeric: tabular-nums;
//         }

//         .fra-testimonial-mobile-dots {
//           display: flex;
//           justify-content: center;
//           gap: 8px;
//           margin-top: 20px;
//         }

//         .fra-testimonial-mobile-dot {
//           height: 8px;
//           border-radius: 999px;
//           border: none;
//           cursor: pointer;
//           padding: 0;
//           transition: width 0.3s ease, background 0.3s ease;
//         }
//       `}</style>

//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>

//         {/* ── Section header ── */}
//         <div className="section-label" style={{ color: "rgba(255,255,255,0.4)" }}>
//           <span style={{ display: "inline-block", width: 24, height: 1.5, background: "rgba(255,255,255,0.3)" }} />
//           Real Stories
//         </div>
//         <h2
//           className="display"
//           style={{
//             fontSize: "clamp(32px, 4vw, 52px)",
//             fontWeight: 800,
//             color: "#fff",
//             marginBottom: 56,
//             lineHeight: 1.1,
//           }}
//         >
//           What happens when a certificate<br />
//           <em style={{ color: tokens.amber, fontStyle: "italic" }}>actually means something</em>
//         </h2>

//         {/* ── Desktop grid ── */}
//         <div
//           className="fra-testimonial-grid fra-testimonial-grid-desktop"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr 1fr",
//             gap: 20,
//             opacity: inView ? 1 : 0,
//             transition: "opacity 0.7s ease",
//           }}
//         >
//           {stories.map(({ quote, name, role, avatar, color }, i) => (
//             <div
//               key={i}
//               role="button"
//               tabIndex={0}
//               aria-pressed={active === i}
//               aria-label={`Show testimonial ${i + 1}`}
//               onClick={() => setActive(i)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); }
//               }}
//               style={{
//                 background: active === i ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.04)",
//                 border: `1px solid ${active === i ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.07)"}`,
//                 borderRadius: 20,
//                 padding: 32,
//                 cursor: "pointer",
//                 transition: "all 0.3s ease",
//                 transform: active === i ? "scale(1.02)" : "scale(1)",
//               }}
//             >
//               <div style={{ fontSize: 28, color, marginBottom: 20, lineHeight: 1 }}>"</div>
//               <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: 28, fontStyle: "italic" }}>
//                 {quote}
//               </p>
//               <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
//                 <div style={{
//                   width: 44, height: 44, borderRadius: "50%",
//                   background: `${color}30`, border: `2px solid ${color}`,
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 500, color,
//                 }}>
//                   {avatar}
//                 </div>
//                 <div>
//                   <div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>{name}</div>
//                   <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 2 }}>{role}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Desktop dots */}
//         <div
//           className="fra-testimonial-grid-desktop"
//           style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32 }}
//         >
//           {stories.map((_, i) => (
//             <button
//               key={i}
//               aria-pressed={active === i}
//               aria-label={`Show testimonial ${i + 1}`}
//               onClick={() => setActive(i)}
//               style={{
//                 width: active === i ? 28 : 8,
//                 height: 8,
//                 borderRadius: 4,
//                 background: active === i ? tokens.amber : "rgba(255,255,255,0.2)",
//                 border: "none",
//                 cursor: "pointer",
//                 transition: "all 0.3s ease",
//               }}
//             />
//           ))}
//         </div>

//         {/* ── Mobile carousel ── */}
//         <div className="fra-testimonial-mobile">
//           {/* Swipeable track */}
//           <div
//             onTouchStart={handleTouchStart}
//             onTouchEnd={handleTouchEnd}
//             style={{ overflow: "hidden" }}
//           >
//             <div
//               className="fra-testimonial-mobile-track"
//               style={{ transform: `translateX(-${active * 100}%)` }}
//             >
//               {stories.map(({ quote, name, role, avatar, color }, i) => (
//                 <div key={i} className="fra-testimonial-mobile-slide">
//                   <div
//                     style={{
//                       background: "rgba(255,255,255,0.07)",
//                       border: "1px solid rgba(255,255,255,0.12)",
//                       borderRadius: 20,
//                       padding: 28,
//                       opacity: inView ? 1 : 0,
//                       transition: "opacity 0.7s ease 0.1s",
//                     }}
//                   >
//                     <div style={{ fontSize: 28, color, marginBottom: 20, lineHeight: 1 }}>"</div>
//                     <p style={{
//                       fontSize: 15,
//                       color: "rgba(255,255,255,0.75)",
//                       lineHeight: 1.8,
//                       marginBottom: 28,
//                       fontStyle: "italic",
//                     }}>
//                       {quote}
//                     </p>
//                     <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
//                       <div style={{
//                         width: 44, height: 44, borderRadius: "50%",
//                         background: `${color}30`, border: `2px solid ${color}`,
//                         display: "flex", alignItems: "center", justifyContent: "center",
//                         fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 500, color,
//                       }}>
//                         {avatar}
//                       </div>
//                       <div>
//                         <div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>{name}</div>
//                         <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 2 }}>{role}</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation row: prev arrow · counter · next arrow */}
//           <div className="fra-testimonial-mobile-arrows">
//             <button
//               className="fra-testimonial-mobile-arrow-btn"
//               onClick={() => setActive((i) => Math.max(0, i - 1))}
//               disabled={active === 0}
//               aria-label="Previous testimonial"
//             >
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                 <path
//                   d="M10 12L6 8l4-4"
//                   stroke="rgba(255,255,255,0.7)"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>

//             <span className="fra-testimonial-mobile-counter">
//               {active + 1} / {stories.length}
//             </span>

//             <button
//               className="fra-testimonial-mobile-arrow-btn"
//               onClick={() => setActive((i) => Math.min(stories.length - 1, i + 1))}
//               disabled={active === stories.length - 1}
//               aria-label="Next testimonial"
//             >
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                 <path
//                   d="M6 4l4 4-4 4"
//                   stroke="rgba(255,255,255,0.7)"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Dot indicators */}
//           <div
//             className="fra-testimonial-mobile-dots"
//             role="tablist"
//             aria-label="Testimonial indicators"
//           >
//             {stories.map((_, i) => (
//               <button
//                 key={i}
//                 role="tab"
//                 aria-selected={i === active}
//                 aria-label={`Go to testimonial ${i + 1}`}
//                 className="fra-testimonial-mobile-dot"
//                 onClick={() => setActive(i)}
//                 style={{
//                   background: i === active ? tokens.amber : "rgba(255,255,255,0.2)",
//                   width: i === active ? 24 : 8,
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

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const stories = [
    {
      quote: "Before FRA I had a degree and no job offers. After 8 weeks I had 3 interviews and employers actually trusted my certificate because they could verify what I did.",
      name: "Someleze C.",
      role: "Graduate · Now employed at Cape Town SME",
      avatar: "AM",
      color: "#7EC8A4",
    },
    {
      quote: "We have run learnership programmes for 10 years and had no verifiable data to show our funder. FRA's impact dashboard changed our conversation completely.",
      name: "Nomsa D.",
      role: "Programme Manager · Western Cape NGO",
      avatar: "ND",
      color: tokens.amber,
    },
    {
      quote: "As an employer, I've seen hundreds of certificates that mean nothing. The FRA certificate is different — I can see exactly what the candidate was assessed on and how they performed.",
      name: "James P.",
      role: "Operations Director · Gauteng SME",
      avatar: "JP",
      color: "#A0C4E8",
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

    if (dx < 0 && active < stories.length - 1) {
      setActive((i) => i + 1);
    } else if (dx > 0 && active > 0) {
      setActive((i) => i - 1);
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="fra-section-responsive"
      style={{ background: tokens.green900, padding: "100px 32px", overflow: "hidden" }}
    >
      <style>{`
        @media (max-width: 639px) {
          .fra-testimonial-grid-desktop { display: none !important; }
          .fra-testimonial-dots-desktop { display: none !important; }
          .fra-testimonial-mobile { display: block !important; }
        }
        @media (min-width: 640px) {
          .fra-testimonial-grid-desktop { display: grid !important; }
          .fra-testimonial-dots-desktop { display: flex !important; }
          .fra-testimonial-mobile { display: none !important; }
        }

        .fra-testimonial-mobile {
          display: none;
          margin: 0 -32px;
        }

        .fra-testimonial-mobile-track {
          display: flex;
          transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .fra-testimonial-mobile-slide {
          flex: 0 0 100%;
          padding: 0 32px;
          box-sizing: border-box;
        }

        .fra-testimonial-mobile-arrows {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          padding: 0 4px;
        }

        .fra-testimonial-mobile-arrow-btn {
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.06);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.18s, border-color 0.18s;
        }

        .fra-testimonial-mobile-arrow-btn:disabled {
          opacity: 0.25;
          cursor: default;
        }

        .fra-testimonial-mobile-arrow-btn:not(:disabled):hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.28);
        }

        .fra-testimonial-mobile-counter {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.4);
          font-variant-numeric: tabular-nums;
        }

        .fra-testimonial-mobile-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }

        .fra-testimonial-mobile-dot {
          height: 8px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: width 0.3s ease, background 0.3s ease;
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Section header ── */}
        <div className="section-label" style={{ color: "rgba(255,255,255,0.4)" }}>
          <span style={{ display: "inline-block", width: 24, height: 1.5, background: "rgba(255,255,255,0.3)" }} />
          Real Stories
        </div>
        <h2
          className="display"
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: 56,
            lineHeight: 1.1,
          }}
        >
          What happens when a certificate<br />
          <em style={{ color: tokens.amber, fontStyle: "italic" }}>actually means something</em>
        </h2>

        {/* ── Desktop grid ── */}
        <div
          className="fra-testimonial-grid fra-testimonial-grid-desktop"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 20,
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s ease",
          }}
        >
          {stories.map(({ quote, name, role, avatar, color }, i) => (
            <div
              key={i}
              role="button"
              tabIndex={0}
              aria-pressed={active === i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); }
              }}
              style={{
                background: active === i ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${active === i ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: 20,
                padding: 32,
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: active === i ? "scale(1.02)" : "scale(1)",
              }}
            >
              <div style={{ fontSize: 28, color, marginBottom: 20, lineHeight: 1 }}>"</div>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: 28, fontStyle: "italic" }}>
                {quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: `${color}30`, border: `2px solid ${color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 500, color,
                }}>
                  {avatar}
                </div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>{name}</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 2 }}>{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Desktop dots ── */}
        <div
          className="fra-testimonial-dots-desktop"
          style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32 }}
        >
          {stories.map((_, i) => (
            <button
              key={i}
              aria-pressed={active === i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              style={{
                width: active === i ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background: active === i ? tokens.amber : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* ── Mobile carousel ── */}
        <div className="fra-testimonial-mobile">
          {/* Swipeable track */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ overflow: "hidden" }}
          >
            <div
              className="fra-testimonial-mobile-track"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {stories.map(({ quote, name, role, avatar, color }, i) => (
                <div key={i} className="fra-testimonial-mobile-slide">
                  <div
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 20,
                      padding: 28,
                      opacity: inView ? 1 : 0,
                      transition: "opacity 0.7s ease 0.1s",
                    }}
                  >
                    <div style={{ fontSize: 28, color, marginBottom: 20, lineHeight: 1 }}>"</div>
                    <p style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.75)",
                      lineHeight: 1.8,
                      marginBottom: 28,
                      fontStyle: "italic",
                    }}>
                      {quote}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: "50%",
                        background: `${color}30`, border: `2px solid ${color}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 500, color,
                      }}>
                        {avatar}
                      </div>
                      <div>
                        <div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>{name}</div>
                        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 2 }}>{role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation row: prev arrow · counter · next arrow */}
          <div className="fra-testimonial-mobile-arrows">
            <button
              className="fra-testimonial-mobile-arrow-btn"
              onClick={() => setActive((i) => Math.max(0, i - 1))}
              disabled={active === 0}
              aria-label="Previous testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8l4-4"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <span className="fra-testimonial-mobile-counter">
              {active + 1} / {stories.length}
            </span>

            <button
              className="fra-testimonial-mobile-arrow-btn"
              onClick={() => setActive((i) => Math.min(stories.length - 1, i + 1))}
              disabled={active === stories.length - 1}
              aria-label="Next testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4l4 4-4 4"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div
            className="fra-testimonial-mobile-dots"
            role="tablist"
            aria-label="Testimonial indicators"
          >
            {stories.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to testimonial ${i + 1}`}
                className="fra-testimonial-mobile-dot"
                onClick={() => setActive(i)}
                style={{
                  background: i === active ? tokens.amber : "rgba(255,255,255,0.2)",
                  width: i === active ? 24 : 8,
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}