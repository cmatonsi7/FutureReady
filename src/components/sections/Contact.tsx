// import { useState } from "react";
// import { useInView } from "../../hooks/useAnimations";
// import { tokens } from "../../styles/tokens";
// import { motion } from "framer-motion";

// /* ─── SVG VECTOR ICONS ──────────────────────────────────────── */
// const IconPin = () => (
//   <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none"
//     initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5, ease: "easeOut" }}
//   >
//     <motion.path
//       d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
//       stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" fill="none"
//       initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
//       transition={{ duration: 0.9, delay: 0.1 }}
//     />
//     <motion.circle cx="12" cy="9" r="2.5"
//       stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none"
//       initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
//       transition={{ duration: 0.6, delay: 0.6 }}
//     />
//   </motion.svg>
// );

// const IconGlobe = () => (
//   <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none"
//     initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
//   >
//     <motion.circle cx="12" cy="12" r="9"
//       stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" fill="none"
//       initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
//       transition={{ duration: 0.9, delay: 0.15 }}
//     />
//     <motion.path d="M3 12h18M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9"
//       stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"
//       initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
//       transition={{ duration: 0.9, delay: 0.35 }}
//     />
//   </motion.svg>
// );

// const IconClock = () => (
//   <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none"
//     initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
//   >
//     <motion.circle cx="12" cy="12" r="9"
//       stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" fill="none"
//       initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
//       transition={{ duration: 0.9, delay: 0.2 }}
//     />
//     <motion.path d="M12 7v5l3 3"
//       stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" fill="none"
//       initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
//       transition={{ duration: 0.5, delay: 0.8 }}
//     />
//   </motion.svg>
// );

// const contactDetails = [
//   { Icon: IconPin,   label: "Headquarters", val: "Cape Town, South Africa" },
//   { Icon: IconGlobe, label: "Operating in",  val: "Gauteng · Western Cape · KwaZulu-Natal" },
//   { Icon: IconClock, label: "Response time", val: "Within 2 business days" },
// ];

// /* ─── LABEL helper ──────────────────────────────────────────── */
// const Label = ({ children }: { children: string }) => (
//   <label style={{
//     fontFamily: "'DM Mono', monospace",
//     fontSize: 10, letterSpacing: "0.15em",
//     textTransform: "uppercase",
//     color: "rgba(255,255,255,0.4)",
//     display: "block", marginBottom: 8,
//   }}>{children}</label>
// );

// const inputStyle: React.CSSProperties = {
//   width: "100%",
//   padding: "12px 14px",
//   borderRadius: 10,
//   border: "1px solid rgba(255,255,255,0.12)",
//   background: "rgba(255,255,255,0.06)",
//   color: "#fff",
//   fontSize: 14,
//   fontFamily: "'DM Sans', sans-serif",
//   outline: "none",
//   boxSizing: "border-box",
//   backdropFilter: "blur(4px)",
//   WebkitBackdropFilter: "blur(4px)",
//   transition: "border 0.2s ease, background 0.2s ease",
// };

// /* ─── CONTACT SECTION ───────────────────────────────────────── */
// export default function Contact() {
//   const [tab, setTab] = useState("org");
//   const [ref, inView] = useInView();

//   return (
//     <section
//       id="contact"
//       ref={ref}
//       style={{
//         background: tokens.green800,
//         padding: "100px 32px",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Glossy background blobs */}
//       <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
//         <div style={{
//           position: "absolute", top: -120, right: -80,
//           width: 480, height: 480, borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
//         }} />
//         <div style={{
//           position: "absolute", bottom: -100, left: -60,
//           width: 360, height: 360, borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
//         }} />
//       </div>

//       <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1.4fr",
//           gap: 80,
//           alignItems: "start",
//         }}>

//           {/* ── LEFT ── */}
//           <div style={{
//             opacity: inView ? 1 : 0,
//             transform: inView ? "none" : "translateY(20px)",
//             transition: "all 0.6s ease",
//           }}>
//             <div style={{
//               display: "flex",
//               alignItems: "center",
//               gap: 10,
//               marginBottom: 20,
//             }}>
//               <span style={{
//                 display: "inline-block",
//                 width: 24, height: 1.5,
//                 background: "rgba(255,255,255,0.3)",
//                 flexShrink: 0,
//               }} />
//               <span style={{
//                 fontFamily: "'DM Mono', monospace",
//                 fontSize: 10, letterSpacing: "0.18em",
//                 textTransform: "uppercase",
//                 color: "rgba(255,255,255,0.4)",
//               }}>Get in Touch</span>
//             </div>

//             <h2 className="display" style={{
//               fontSize: "clamp(32px, 4vw, 52px)",
//               fontWeight: 800, color: "#fff",
//               lineHeight: 1.1, marginBottom: 20,
//               textAlign: "left",
//             }}>
//               Ready to close<br />
//               <em style={{ color: tokens.amber, fontStyle: "italic" }}>the gap?</em>
//             </h2>

//             <p style={{
//               color: "rgba(255,255,255,0.6)",
//               fontSize: 15, lineHeight: 1.8,
//               marginBottom: 48,
//               textAlign: "left",
//             }}>
//               Whether you're an organisation looking to partner or an individual ready to enrol, we'd love to hear from you. We respond within 2 business days.
//             </p>

//             {contactDetails.map(({ Icon, label, val }) => (
//               <div
//                 key={label}
//                 style={{
//                   display: "flex",
//                   gap: 16,
//                   marginBottom: 28,
//                   alignItems: "center",
//                 }}
//               >
//                 <div style={{
//                   width: 40, height: 40,
//                   borderRadius: 10, flexShrink: 0,
//                   background: "rgba(255,255,255,0.07)",
//                   border: "1px solid rgba(255,255,255,0.1)",
//                   backdropFilter: "blur(8px)",
//                   WebkitBackdropFilter: "blur(8px)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}>
//                   <Icon />
//                 </div>

//                 <div style={{ textAlign: "left" }}>
//                   <div style={{
//                     fontFamily: "'DM Mono', monospace",
//                     fontSize: 10, letterSpacing: "0.15em",
//                     textTransform: "uppercase",
//                     color: "rgba(255,255,255,0.35)",
//                     marginBottom: 3,
//                   }}>{label}</div>
//                   <div style={{
//                     color: "rgba(255,255,255,0.85)",
//                     fontSize: 15,
//                     lineHeight: 1.4,
//                   }}>{val}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* ── RIGHT: Glossy form card ── */}
//           <div style={{
//             background: "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)",
//             border: "1px solid rgba(255,255,255,0.15)",
//             borderRadius: 24,
//             padding: 40,
//             backdropFilter: "blur(20px)",
//             WebkitBackdropFilter: "blur(20px)",
//             boxShadow: "0 8px 48px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.12)",
//             opacity: inView ? 1 : 0,
//             transition: "opacity 0.6s ease 0.2s",
//           }}>

//             <div style={{
//               display: "flex",
//               background: "rgba(0,0,0,0.2)",
//               borderRadius: 10, padding: 4,
//               marginBottom: 32,
//               border: "1px solid rgba(255,255,255,0.08)",
//             }}>
//               {[
//                 { key: "org", label: "For Organisations" },
//                 { key: "ind", label: "For Individuals" },
//               ].map((t) => (
//                 <button
//                   key={t.key}
//                   onClick={() => setTab(t.key)}
//                   style={{
//                     flex: 1, padding: "10px 0",
//                     borderRadius: 8, border: "none",
//                     cursor: "pointer",
//                     fontFamily: "'DM Sans', sans-serif",
//                     fontSize: 13, fontWeight: 600,
//                     transition: "all 0.2s ease",
//                     background: tab === t.key
//                       ? "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)"
//                       : "transparent",
//                     color: tab === t.key ? "#fff" : "rgba(255,255,255,0.45)",
//                     boxShadow: tab === t.key ? "inset 0 1px 0 rgba(255,255,255,0.15)" : "none",
//                   }}
//                 >{t.label}</button>
//               ))}
//             </div>

//             {/* ── ORG FORM ── */}
//             {tab === "org" && (
//               <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//                 <div className="fra-form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
//                   <div>
//                     <Label>Organisation Name</Label>
//                     <input placeholder="Your organisation" style={inputStyle} />
//                   </div>
//                   <div>
//                     <Label>Your Name</Label>
//                     <input placeholder="Full name" style={inputStyle} />
//                   </div>
//                 </div>
//                 <div className="fra-form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
//                   <div>
//                     <Label>Your Role</Label>
//                     <input placeholder="e.g. Programme Manager" style={inputStyle} />
//                   </div>
//                   <div>
//                     <Label>Est. Participants</Label>
//                     <input placeholder="e.g. 30–50" style={inputStyle} />
//                   </div>
//                 </div>
//                 <div>
//                   <Label>Email Address</Label>
//                   <input placeholder="you@organisation.co.za" style={inputStyle} />
//                 </div>
//                 <div>
//                   <Label>Tell Us About Your Programme</Label>
//                   <textarea
//                     placeholder="What are you trying to achieve? What does your funder require?"
//                     style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
//                   />
//                 </div>
//                 <button
//                   className="btn btn-amber"
//                   style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: 15, marginTop: 8 }}
//                 >
//                   Book a Discovery Call →
//                 </button>
//               </div>
//             )}

//             {/* ── INDIVIDUAL FORM ── */}
//             {tab === "ind" && (
//               <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//                 <div className="fra-form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
//                   <div>
//                     <Label>Your Name</Label>
//                     <input placeholder="Your name" style={inputStyle} />
//                   </div>
//                   <div>
//                     <Label>Phone Number</Label>
//                     <input placeholder="+27..." style={inputStyle} />
//                   </div>
//                 </div>
//                 <div>
//                   <Label>Email Address</Label>
//                   <input placeholder="you@email.com" style={inputStyle} />
//                 </div>
//                 <div>
//                   <Label>How Did You Hear About Us?</Label>
//                   <input placeholder="e.g. LinkedIn, friend, NGO referral" style={inputStyle} />
//                 </div>
//                 <div>
//                   <Label>Your Situation (Optional)</Label>
//                   <textarea
//                     placeholder="Tell us where you are in your career journey..."
//                     style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
//                   />
//                 </div>
//                 <button
//                   className="btn btn-amber"
//                   style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: 15, marginTop: 8 }}
//                 >
//                   Submit →
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { useInView } from "../../hooks/useAnimations";
import { tokens } from "../../styles/tokens";
import { motion } from "framer-motion";

/* ─── SVG VECTOR ICONS ──────────────────────────────────────── */
const IconPin = () => (
  <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <motion.path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" fill="none"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      transition={{ duration: 0.9, delay: 0.1 }}
    />
    <motion.circle cx="12" cy="9" r="2.5"
      stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    />
  </motion.svg>
);

const IconGlobe = () => (
  <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
  >
    <motion.circle cx="12" cy="12" r="9"
      stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" fill="none"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      transition={{ duration: 0.9, delay: 0.15 }}
    />
    <motion.path d="M3 12h18M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9"
      stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      transition={{ duration: 0.9, delay: 0.35 }}
    />
  </motion.svg>
);

const IconClock = () => (
  <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
  >
    <motion.circle cx="12" cy="12" r="9"
      stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" fill="none"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
    />
    <motion.path d="M12 7v5l3 3"
      stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" fill="none"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    />
  </motion.svg>
);

const contactDetails = [
  { Icon: IconPin,   label: "Headquarters", val: "Cape Town, South Africa" },
  { Icon: IconGlobe, label: "Operating in",  val: "Gauteng · Western Cape · KwaZulu-Natal" },
  { Icon: IconClock, label: "Response time", val: "Within 2 business days" },
];

/* ─── PACKAGE OPTIONS ───────────────────────────────────────── */
const orgPackageOptions = [
  { value: "",          label: "Select a package…" },
  { value: "growth",    label: "Growth — R3,500/participant · 10–25 cohort" },
  { value: "starter",   label: "Starter — R2,500/participant · 26–50 cohort" },
  { value: "scale",     label: "Scale — R2,000/participant · 51–100 cohort" },
  { value: "enterprise",label: "Enterprise — R1,800/participant · 100+ cohort" },
];

const indPackageOptions = [
  { value: "",           label: "Select a payment plan…" },
  { value: "full",       label: "Full Payment — R1,710 once off (save R90)" },
  { value: "instalments",label: "2 Instalments — R950 × 2 · Total R1,900" },
  { value: "monthly",    label: "Monthly — R500 × 4 months · Total R2,000" },
];

/* ─── LABEL helper ──────────────────────────────────────────── */
const Label = ({ children }: { children: string }) => (
  <label style={{
    fontFamily: "'DM Mono', monospace",
    fontSize: 10, letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.4)",
    display: "block", marginBottom: 8,
  }}>{children}</label>
);

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.06)",
  color: "#fff",
  fontSize: 14,
  fontFamily: "'DM Sans', sans-serif",
  outline: "none",
  boxSizing: "border-box",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
  transition: "border 0.2s ease, background 0.2s ease",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: "none",
  WebkitAppearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 14px center",
  paddingRight: 36,
  cursor: "pointer",
};

/* ─── CONTACT SECTION ───────────────────────────────────────── */
export default function Contact() {
  const [tab, setTab] = useState("org");
  const [ref, inView] = useInView();
  const [orgPackage, setOrgPackage] = useState("");
  const [indPackage, setIndPackage] = useState("");

  

  const handleDiscoveryCall = () => {
  window.location.href = "tel:+27643298928";
};

  return (
    <section
      id="contact"
      ref={ref}
      className="fra-section-responsive"
      style={{
        background: tokens.green800,
        padding: "100px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glossy background blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: -120, right: -80,
          width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: -100, left: -60,
          width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="fra-contact-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 80,
          alignItems: "start",
        }}>

          {/* ── LEFT ── */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 20,
            }}>
              <span style={{
                display: "inline-block",
                width: 24, height: 1.5,
                background: "rgba(255,255,255,0.3)",
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10, letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}>Get in Touch</span>
            </div>

            <h2 className="display" style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800, color: "#fff",
              lineHeight: 1.1, marginBottom: 20,
              textAlign: "left",
            }}>
              Ready to close<br />
              <em style={{ color: tokens.amber, fontStyle: "italic" }}>the gap?</em>
            </h2>

            <p style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 15, lineHeight: 1.8,
              marginBottom: 48,
              textAlign: "left",
            }}>
              Whether you're an organisation looking to partner or an individual ready to enrol, we'd love to hear from you. We respond within 2 business days.
            </p>

            {contactDetails.map(({ Icon, label, val }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  gap: 16,
                  marginBottom: 28,
                  alignItems: "center",
                }}
              >
                <div style={{
                  width: 40, height: 40,
                  borderRadius: 10, flexShrink: 0,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Icon />
                </div>

                <div style={{ textAlign: "left" }}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10, letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                    marginBottom: 3,
                  }}>{label}</div>
                  <div style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: 15,
                    lineHeight: 1.4,
                  }}>{val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ── RIGHT: Glossy form card ── */}
          <div className="fra-contact-card" style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 24,
            padding: 40,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.12)",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease 0.2s",
          }}>

            <div className="fra-contact-tabs" style={{
              display: "flex",
              background: "rgba(0,0,0,0.2)",
              borderRadius: 10, padding: 4,
              marginBottom: 32,
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              {[
                { key: "org", label: "For Organisations" },
                { key: "ind", label: "For Individuals" },
              ].map((t) => (
                <button
                  key={t.key}
                  type="button"
                  aria-pressed={tab === t.key}
                  onClick={() => setTab(t.key)}
                  style={{
                    flex: 1, padding: "10px 0",
                    borderRadius: 8, border: "none",
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13, fontWeight: 600,
                    transition: "all 0.2s ease",
                    background: tab === t.key
                      ? "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)"
                      : "transparent",
                    color: tab === t.key ? "#fff" : "rgba(255,255,255,0.45)",
                    boxShadow: tab === t.key ? "inset 0 1px 0 rgba(255,255,255,0.15)" : "none",
                  }}
                >{t.label}</button>
              ))}
            </div>

            {/* ── ORG FORM ── */}
            {tab === "org" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div className="fra-form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <Label>Organisation Name</Label>
                    <input placeholder="Your organisation" style={inputStyle} />
                  </div>
                  <div>
                    <Label>Your Name</Label>
                    <input placeholder="Full name" style={inputStyle} />
                  </div>
                </div>
                <div className="fra-form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <Label>Your Role</Label>
                    <input placeholder="e.g. Programme Manager" style={inputStyle} />
                  </div>
                  <div>
                    <Label>Est. Participants</Label>
                    <input placeholder="e.g. 30–50" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <Label>Email Address</Label>
                  <input placeholder="you@organisation.co.za" style={inputStyle} />
                </div>
                <div>
                  <Label>Package</Label>
                  <div style={{ position: "relative" }}>
                    <select
                      value={orgPackage}
                      onChange={e => setOrgPackage(e.target.value)}
                      style={{
                        ...selectStyle,
                        color: orgPackage ? "#fff" : "rgba(255,255,255,0.35)",
                      }}
                    >
                      {orgPackageOptions.map(opt => (
                        <option
                          key={opt.value}
                          value={opt.value}
                          style={{ background: tokens.green800, color: "#fff" }}
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <Label>Tell Us About Your Programme</Label>
                  <textarea
                    placeholder="What are you trying to achieve? What does your funder require?"
                    style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-amber"
                  onClick={handleDiscoveryCall}
                  style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: 15, marginTop: 8 }}
                >
                  Book a Discovery Call →
                </button>
              </div>
            )}

            {/* ── INDIVIDUAL FORM ── */}
            {tab === "ind" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div className="fra-form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <Label>Your Name</Label>
                    <input placeholder="Your name" style={inputStyle} />
                  </div>
                  <div>
                    <Label>Phone Number</Label>
                    <input placeholder="+27..." style={inputStyle} />
                  </div>
                </div>
                <div>
                  <Label>Email Address</Label>
                  <input placeholder="you@email.com" style={inputStyle} />
                </div>
                <div>
                  <Label>Payment Plan</Label>
                  <div style={{ position: "relative" }}>
                    <select
                      value={indPackage}
                      onChange={e => setIndPackage(e.target.value)}
                      style={{
                        ...selectStyle,
                        color: indPackage ? "#fff" : "rgba(255,255,255,0.35)",
                      }}
                    >
                      {indPackageOptions.map(opt => (
                        <option
                          key={opt.value}
                          value={opt.value}
                          style={{ background: tokens.green800, color: "#fff" }}
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <Label>How Did You Hear About Us?</Label>
                  <input placeholder="e.g. LinkedIn, friend, NGO referral" style={inputStyle} />
                </div>
                <div>
                  <Label>Your Situation (Optional)</Label>
                  <textarea
                    placeholder="Tell us where you are in your career journey..."
                    style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-amber"
                  style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: 15, marginTop: 8 }}
                >
                  Submit →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}