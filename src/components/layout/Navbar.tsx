// import { useEffect, useMemo, useRef, useState } from "react";
// import { tokens } from "../../styles/tokens";

// type NavItem = {
//   id: string;
//   label: string;
//   href: string;
// };

// const navItems: NavItem[] = [
//   { id: "how-it-works", label: "Journey", href: "#how-it-works" },
//   { id: "problem", label: "Why We Exist", href: "#problem" },
//   { id: "who-its-for", label: "Who It's For", href: "#who-its-for" },
//   { id: "impact", label: "Impact", href: "#impact" },
//   { id: "our-story", label: "Our Story", href: "#our-story" },
//   { id: "testimonials", label: "Testimonials", href: "#testimonials" },
//   { id: "pricing", label: "Pricing", href: "#pricing" },
//   { id: "faq", label: "FAQ", href: "#faq" },
// ];

// function scrollToId(id: string) {
//   const element = document.getElementById(id);
//   if (!element) return;
//   element.scrollIntoView({ behavior: "smooth", block: "start" });
// }

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState<string>("problem");
//   const navRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const sections = navItems
//       .map(({ id }) => document.getElementById(id))
//       .filter((element): element is HTMLElement => Boolean(element));

//     if (!sections.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visibleEntries = entries
//           .filter((entry) => entry.isIntersecting)
//           .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

//         if (visibleEntries.length > 0) {
//           setActiveSection(visibleEntries[0].target.id);
//         }
//       },
//       {
//         rootMargin: "-40% 0px -55% 0px",
//         threshold: 0,
//       }
//     );

//     sections.forEach((section) => observer.observe(section));
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!mobileOpen) return;

//     const onPointerDown = (event: MouseEvent | TouchEvent) => {
//       const target = event.target as Node | null;
//       if (target && navRef.current && !navRef.current.contains(target)) {
//         setMobileOpen(false);
//       }
//     };

//     const onEscape = (event: KeyboardEvent) => {
//       if (event.key === "Escape") setMobileOpen(false);
//     };

//     document.addEventListener("mousedown", onPointerDown);
//     document.addEventListener("touchstart", onPointerDown);
//     document.addEventListener("keydown", onEscape);

//     return () => {
//       document.removeEventListener("mousedown", onPointerDown);
//       document.removeEventListener("touchstart", onPointerDown);
//       document.removeEventListener("keydown", onEscape);
//     };
//   }, [mobileOpen]);

//   const navSurface = useMemo(
//     () => ({
//       background: scrolled ? "rgba(15,36,25,0.96)" : "rgba(15,36,25,0.72)",
//       backdropFilter: "blur(14px)",
//       borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
//       boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.14)" : "none",
//     }),
//     [scrolled]
//   );

//   return (
//     <nav
//       ref={navRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1300,
//         transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
//         ...navSurface,
//       }}
//       aria-label="Primary"
//     >
//       <div
//         style={{
//           maxWidth: 1320,
//           margin: "0 auto",
//           padding: "14px 24px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           gap: 20,
//         }}
//       >
//         <button
//           type="button"
//           onClick={() => scrollToId("hero")}
//           className="fra-focus-ring"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: 10,
//             textDecoration: "none",
//             background: "transparent",
//             border: "none",
//             padding: 0,
//             cursor: "pointer",
//             color: "white",
//             flexShrink: 0,
//           }}
//         >
//           <div
//             style={{
//               width: 38,
//               height: 38,
//               minWidth: 38,
//               borderRadius: 10,
//               background: `linear-gradient(135deg, ${tokens.amber}, #B87A28)`,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontFamily: "Georgia, serif",
//               fontWeight: 700,
//               fontSize: 17,
//               color: "#fff",
//             }}
//           >
//             F
//           </div>
//           <div style={{ textAlign: "left" }}>
//             <div style={{ color: "#fff", fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>
//               Future Ready Africa
//             </div>
//             <div
//               style={{
//                 color: "rgba(255,255,255,0.48)",
//                 fontSize: 9,
//                 letterSpacing: "0.16em",
//                 textTransform: "uppercase",
//                 fontFamily: "'DM Mono', monospace",
//               }}
//             >
//               Employability Infrastructure
//             </div>
//           </div>
//         </button>

//         <div className="fra-nav-desktop" style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0, flex: 1, justifyContent: "flex-end" }}>
//           <div
//             className="fra-nav-links-scroll"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: 8,
//               background: "rgba(255,255,255,0.06)",
//               border: "1px solid rgba(255,255,255,0.1)",
//               borderRadius: 999,
//               padding: 4,
//               overflowX: "auto",
//               scrollbarWidth: "none",
//               minWidth: 0,
//             }}
//           >
//             {navItems.map((item) => {
//               const isActive = activeSection === item.id;
//               return (
//                 <button
//                   key={item.id}
//                   type="button"
//                   className="fra-focus-ring"
//                   aria-current={isActive ? "true" : undefined}
//                   onClick={() => scrollToId(item.id)}
//                   style={{
//                     minHeight: 42,
//                     padding: "10px 14px",
//                     borderRadius: 999,
//                     border: "none",
//                     background: isActive ? tokens.amber : "transparent",
//                     color: isActive ? tokens.green900 : "rgba(255,255,255,0.82)",
//                     fontSize: 13,
//                     fontWeight: isActive ? 700 : 500,
//                     cursor: "pointer",
//                     transition: "background 0.2s ease, color 0.2s ease, transform 0.2s ease",
//                     whiteSpace: "nowrap",
//                     flexShrink: 0,
//                   }}
//                 >
//                   {item.label}
//                 </button>
//               );
//             })}
//           </div>

//           <button
//             type="button"
//             onClick={() => scrollToId("contact")}
//             className="fra-focus-ring"
//             style={{
//               minHeight: 44,
//               padding: "0 18px",
//               borderRadius: 999,
//               border: `1px solid ${tokens.amber}`,
//               background: "transparent",
//               color: tokens.amber,
//               fontSize: 14,
//               fontWeight: 600,
//               cursor: "pointer",
//               flexShrink: 0,
//             }}
//           >
//             Contact
//           </button>
//         </div>

//         <button
//           type="button"
//           className="fra-nav-mobile-toggle fra-focus-ring"
//           aria-label={mobileOpen ? "Close menu" : "Open menu"}
//           aria-expanded={mobileOpen}
//           onClick={() => setMobileOpen((prev) => !prev)}
//           style={{
//             display: "none",
//             width: 48,
//             height: 48,
//             minHeight: 48,
//             borderRadius: 999,
//             border: "1px solid rgba(255,255,255,0.16)",
//             background: "rgba(255,255,255,0.06)",
//             color: "white",
//             cursor: "pointer",
//             alignItems: "center",
//             justifyContent: "center",
//             flexDirection: "column",
//             gap: 4,
//           }}
//         >
//           {[0, 1, 2].map((index) => (
//             <span
//               key={index}
//               style={{
//                 display: "block",
//                 width: index === 1 ? 14 : 18,
//                 height: 2,
//                 borderRadius: 99,
//                 background: "currentColor",
//                 transition: "transform 0.2s ease",
//               }}
//             />
//           ))}
//         </button>
//       </div>

//       <div
//         style={{
//           maxWidth: 1200,
//           margin: "0 auto",
//           padding: mobileOpen ? "0 24px 20px" : "0 24px 0",
//           maxHeight: mobileOpen ? 640 : 0,
//           opacity: mobileOpen ? 1 : 0,
//           overflow: "hidden",
//           transition: "max-height 0.28s ease, opacity 0.22s ease, padding 0.22s ease",
//         }}
//         className="fra-nav-mobile-drawer"
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: 10,
//             background: "rgba(255,255,255,0.06)",
//             border: "1px solid rgba(255,255,255,0.1)",
//             borderRadius: 20,
//             padding: 12,
//           }}
//         >
//           {navItems.map((item) => {
//             const isActive = activeSection === item.id;
//             return (
//               <button
//                 key={item.id}
//                 type="button"
//                 className="fra-focus-ring"
//                 aria-current={isActive ? "true" : undefined}
//                 onClick={() => {
//                   scrollToId(item.id);
//                   setMobileOpen(false);
//                 }}
//                 style={{
//                   minHeight: 46,
//                   width: "100%",
//                   borderRadius: 14,
//                   border: "none",
//                   background: isActive ? tokens.amber : "rgba(255,255,255,0.02)",
//                   color: isActive ? tokens.green900 : "rgba(255,255,255,0.86)",
//                   textAlign: "left",
//                   padding: "12px 14px",
//                   fontSize: 15,
//                   fontWeight: isActive ? 700 : 500,
//                   cursor: "pointer",
//                 }}
//               >
//                 {item.label}
//               </button>
//             );
//           })}
//           <button
//             type="button"
//             className="fra-focus-ring"
//             onClick={() => {
//               scrollToId("contact");
//               setMobileOpen(false);
//             }}
//             style={{
//               minHeight: 46,
//               borderRadius: 14,
//               border: `1px solid ${tokens.amber}`,
//               background: "transparent",
//               color: tokens.amber,
//               padding: "12px 14px",
//               textAlign: "left",
//               fontSize: 15,
//               fontWeight: 600,
//               cursor: "pointer",
//             }}
//           >
//             Contact
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }


// import { useEffect, useMemo, useRef, useState } from "react";
// import { tokens } from "../../styles/tokens";

// type NavItem = {
//   id: string;
//   label: string;
//   href: string;
// };

// const navItems: NavItem[] = [
//   { id: "how-it-works", label: "Journey", href: "#how-it-works" },
//   { id: "problem", label: "Why We Exist", href: "#problem" },
//   { id: "who-its-for", label: "Who It's For", href: "#who-its-for" },
//   { id: "impact", label: "Impact", href: "#impact" },
//   { id: "our-story", label: "Our Story", href: "#our-story" },
//   { id: "testimonials", label: "Testimonials", href: "#testimonials" },
//   { id: "pricing", label: "Pricing", href: "#pricing" },
//   { id: "faq", label: "FAQ", href: "#faq" },
// ];

// function scrollToId(id: string) {
//   const element = document.getElementById(id);
//   if (!element) return;
//   element.scrollIntoView({ behavior: "smooth", block: "start" });
// }

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState<string>("problem");
//   const navRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const sections = navItems
//       .map(({ id }) => document.getElementById(id))
//       .filter((element): element is HTMLElement => Boolean(element));

//     if (!sections.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visibleEntries = entries
//           .filter((entry) => entry.isIntersecting)
//           .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

//         if (visibleEntries.length > 0) {
//           setActiveSection(visibleEntries[0].target.id);
//         }
//       },
//       {
//         rootMargin: "-40% 0px -55% 0px",
//         threshold: 0,
//       }
//     );

//     sections.forEach((section) => observer.observe(section));
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!mobileOpen) return;

//     const onPointerDown = (event: MouseEvent | TouchEvent) => {
//       const target = event.target as Node | null;
//       if (target && navRef.current && !navRef.current.contains(target)) {
//         setMobileOpen(false);
//       }
//     };

//     const onEscape = (event: KeyboardEvent) => {
//       if (event.key === "Escape") setMobileOpen(false);
//     };

//     document.addEventListener("mousedown", onPointerDown);
//     document.addEventListener("touchstart", onPointerDown);
//     document.addEventListener("keydown", onEscape);

//     return () => {
//       document.removeEventListener("mousedown", onPointerDown);
//       document.removeEventListener("touchstart", onPointerDown);
//       document.removeEventListener("keydown", onEscape);
//     };
//   }, [mobileOpen]);

//   const navSurface = useMemo(
//     () => ({
//       background: scrolled ? "rgba(15,36,25,0.96)" : "rgba(15,36,25,0.72)",
//       backdropFilter: "blur(14px)",
//       borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
//       boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.14)" : "none",
//     }),
//     [scrolled]
//   );

//   return (
//     <nav
//       ref={navRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1300,
//         transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
//         ...navSurface,
//       }}
//       aria-label="Primary"
//     >
//       <div
//         style={{
//           maxWidth: 1320,
//           margin: "0 auto",
//           padding: "14px 24px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           gap: 20,
//         }}
//       >
//         <button
//           type="button"
//           onClick={() => scrollToId("hero")}
//           className="fra-focus-ring"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: 10,
//             textDecoration: "none",
//             background: "transparent",
//             border: "none",
//             padding: 0,
//             cursor: "pointer",
//             color: "white",
//             flexShrink: 0,
//           }}
//         >
//           <img
//             src="/src/assets/icon.png"
//             alt="Future Ready Africa"
//             style={{
//               width: 38,
//               height: 38,
//               minWidth: 38,
//               borderRadius: 10,
//               objectFit: "contain",
//             }}
//           />
//           <div style={{ textAlign: "left" }}>
//             <div style={{ color: "#fff", fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>
//               Future Ready Africa
//             </div>
//             <div
//               style={{
//                 color: "rgba(255,255,255,0.48)",
//                 fontSize: 9,
//                 letterSpacing: "0.16em",
//                 textTransform: "uppercase",
//                 fontFamily: "'DM Mono', monospace",
//               }}
//             >
//               Employability Infrastructure
//             </div>
//           </div>
//         </button>

//         <div className="fra-nav-desktop" style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0, flex: 1, justifyContent: "flex-end" }}>
//           <div
//             className="fra-nav-links-scroll"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: 8,
//               background: "rgba(255,255,255,0.06)",
//               border: "1px solid rgba(255,255,255,0.1)",
//               borderRadius: 999,
//               padding: 4,
//               overflowX: "auto",
//               scrollbarWidth: "none",
//               minWidth: 0,
//             }}
//           >
//             {navItems.map((item) => {
//               const isActive = activeSection === item.id;
//               return (
//                 <button
//                   key={item.id}
//                   type="button"
//                   className="fra-focus-ring"
//                   aria-current={isActive ? "true" : undefined}
//                   onClick={() => scrollToId(item.id)}
//                   style={{
//                     minHeight: 42,
//                     padding: "10px 14px",
//                     borderRadius: 999,
//                     border: "none",
//                     background: isActive ? tokens.amber : "transparent",
//                     color: isActive ? tokens.green900 : "rgba(255,255,255,0.82)",
//                     fontSize: 13,
//                     fontWeight: isActive ? 700 : 500,
//                     cursor: "pointer",
//                     transition: "background 0.2s ease, color 0.2s ease, transform 0.2s ease",
//                     whiteSpace: "nowrap",
//                     flexShrink: 0,
//                   }}
//                 >
//                   {item.label}
//                 </button>
//               );
//             })}
//           </div>

//           <button
//             type="button"
//             onClick={() => scrollToId("contact")}
//             className="fra-focus-ring"
//             style={{
//               minHeight: 44,
//               padding: "0 18px",
//               borderRadius: 999,
//               border: `1px solid ${tokens.amber}`,
//               background: "transparent",
//               color: tokens.amber,
//               fontSize: 14,
//               fontWeight: 600,
//               cursor: "pointer",
//               flexShrink: 0,
//             }}
//           >
//             Contact
//           </button>
//         </div>

//         <button
//           type="button"
//           className="fra-nav-mobile-toggle fra-focus-ring"
//           aria-label={mobileOpen ? "Close menu" : "Open menu"}
//           aria-expanded={mobileOpen}
//           onClick={() => setMobileOpen((prev) => !prev)}
//           style={{
//             display: "none",
//             width: 48,
//             height: 48,
//             minHeight: 48,
//             borderRadius: 999,
//             border: "1px solid rgba(255,255,255,0.16)",
//             background: "rgba(255,255,255,0.06)",
//             color: "white",
//             cursor: "pointer",
//             alignItems: "center",
//             justifyContent: "center",
//             flexDirection: "column",
//             gap: 4,
//           }}
//         >
//           {[0, 1, 2].map((index) => (
//             <span
//               key={index}
//               style={{
//                 display: "block",
//                 width: index === 1 ? 14 : 18,
//                 height: 2,
//                 borderRadius: 99,
//                 background: "currentColor",
//                 transition: "transform 0.2s ease",
//               }}
//             />
//           ))}
//         </button>
//       </div>

//       <div
//         style={{
//           maxWidth: 1200,
//           margin: "0 auto",
//           padding: mobileOpen ? "0 24px 20px" : "0 24px 0",
//           maxHeight: mobileOpen ? 640 : 0,
//           opacity: mobileOpen ? 1 : 0,
//           overflow: "hidden",
//           transition: "max-height 0.28s ease, opacity 0.22s ease, padding 0.22s ease",
//         }}
//         className="fra-nav-mobile-drawer"
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: 10,
//             background: "rgba(255,255,255,0.06)",
//             border: "1px solid rgba(255,255,255,0.1)",
//             borderRadius: 20,
//             padding: 12,
//           }}
//         >
//           {navItems.map((item) => {
//             const isActive = activeSection === item.id;
//             return (
//               <button
//                 key={item.id}
//                 type="button"
//                 className="fra-focus-ring"
//                 aria-current={isActive ? "true" : undefined}
//                 onClick={() => {
//                   scrollToId(item.id);
//                   setMobileOpen(false);
//                 }}
//                 style={{
//                   minHeight: 46,
//                   width: "100%",
//                   borderRadius: 14,
//                   border: "none",
//                   background: isActive ? tokens.amber : "rgba(255,255,255,0.02)",
//                   color: isActive ? tokens.green900 : "rgba(255,255,255,0.86)",
//                   textAlign: "left",
//                   padding: "12px 14px",
//                   fontSize: 15,
//                   fontWeight: isActive ? 700 : 500,
//                   cursor: "pointer",
//                 }}
//               >
//                 {item.label}
//               </button>
//             );
//           })}
//           <button
//             type="button"
//             className="fra-focus-ring"
//             onClick={() => {
//               scrollToId("contact");
//               setMobileOpen(false);
//             }}
//             style={{
//               minHeight: 46,
//               borderRadius: 14,
//               border: `1px solid ${tokens.amber}`,
//               background: "transparent",
//               color: tokens.amber,
//               padding: "12px 14px",
//               textAlign: "left",
//               fontSize: 15,
//               fontWeight: 600,
//               cursor: "pointer",
//             }}
//           >
//             Contact
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// import { useEffect, useMemo, useRef, useState } from "react";
// import { tokens } from "../../styles/tokens";

// type NavItem = {
//   id: string;
//   label: string;
//   href: string;
// };

// const navItems: NavItem[] = [
//   { id: "how-it-works", label: "Journey", href: "#how-it-works" },
//   { id: "problem", label: "Why We Exist", href: "#problem" },
//   { id: "who-its-for", label: "Who It's For", href: "#who-its-for" },
//   { id: "impact", label: "Impact", href: "#impact" },
//   { id: "our-story", label: "Our Story", href: "#our-story" },
//   { id: "testimonials", label: "Testimonials", href: "#testimonials" },
//   { id: "pricing", label: "Pricing", href: "#pricing" },
//   { id: "faq", label: "FAQ", href: "#faq" },
// ];

// function scrollToId(id: string) {
//   const element = document.getElementById(id);
//   if (!element) return;
//   element.scrollIntoView({ behavior: "smooth", block: "start" });
// }

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState<string>("problem");
//   const navRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const onScrollActive = () => {
//       const scrollY = window.scrollY;
//       const viewportHeight = window.innerHeight;
//       // Use 35% down the viewport as the "active" trigger line
//       const triggerY = scrollY + viewportHeight * 0.35;

//       let currentId = navItems[0].id;

//       for (const { id } of navItems) {
//         const el = document.getElementById(id);
//         if (!el) continue;
//         if (el.offsetTop <= triggerY) {
//           currentId = id;
//         }
//       }

//       setActiveSection(currentId);
//     };

//     onScrollActive();
//     window.addEventListener("scroll", onScrollActive, { passive: true });
//     return () => window.removeEventListener("scroll", onScrollActive);
//   }, []);

//   useEffect(() => {
//     if (!mobileOpen) return;

//     const onPointerDown = (event: MouseEvent | TouchEvent) => {
//       const target = event.target as Node | null;
//       if (target && navRef.current && !navRef.current.contains(target)) {
//         setMobileOpen(false);
//       }
//     };

//     const onEscape = (event: KeyboardEvent) => {
//       if (event.key === "Escape") setMobileOpen(false);
//     };

//     document.addEventListener("mousedown", onPointerDown);
//     document.addEventListener("touchstart", onPointerDown);
//     document.addEventListener("keydown", onEscape);

//     return () => {
//       document.removeEventListener("mousedown", onPointerDown);
//       document.removeEventListener("touchstart", onPointerDown);
//       document.removeEventListener("keydown", onEscape);
//     };
//   }, [mobileOpen]);

//   const navSurface = useMemo(
//     () => ({
//       background: scrolled ? "rgba(15,36,25,0.96)" : "rgba(15,36,25,0.72)",
//       backdropFilter: "blur(14px)",
//       borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
//       boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.14)" : "none",
//     }),
//     [scrolled]
//   );

//   return (
//     <nav
//       ref={navRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1300,
//         transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
//         ...navSurface,
//       }}
//       aria-label="Primary"
//     >
//       <div
//         style={{
//           maxWidth: 1320,
//           margin: "0 auto",
//           padding: "14px 24px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           gap: 20,
//         }}
//       >
//         <button
//           type="button"
//           onClick={() => scrollToId("hero")}
//           className="fra-focus-ring"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: 10,
//             textDecoration: "none",
//             background: "transparent",
//             border: "none",
//             padding: 0,
//             cursor: "pointer",
//             color: "white",
//             flexShrink: 0,
//           }}
//         >
//           <img
//             src="/src/assets/icon.png"
//             alt="Future Ready Africa"
//             style={{
//               width: 38,
//               height: 38,
//               minWidth: 38,
//               borderRadius: 10,
//               objectFit: "contain",
//             }}
//           />
//           <div style={{ textAlign: "left" }}>
//             <div style={{ color: "#fff", fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>
//               Future Ready Africa
//             </div>
//             <div
//               style={{
//                 color: "rgba(255,255,255,0.48)",
//                 fontSize: 9,
//                 letterSpacing: "0.16em",
//                 textTransform: "uppercase",
//                 fontFamily: "'DM Mono', monospace",
//               }}
//             >
//               Employability Infrastructure
//             </div>
//           </div>
//         </button>

//         <div className="fra-nav-desktop" style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0, flex: 1, justifyContent: "flex-end" }}>
//           <div
//             className="fra-nav-links-scroll"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: 8,
//               background: "rgba(255,255,255,0.06)",
//               border: "1px solid rgba(255,255,255,0.1)",
//               borderRadius: 999,
//               padding: 4,
//               overflowX: "auto",
//               scrollbarWidth: "none",
//               minWidth: 0,
//             }}
//           >
//             {navItems.map((item) => {
//               const isActive = activeSection === item.id;
//               return (
//                 <button
//                   key={item.id}
//                   type="button"
//                   className="fra-focus-ring"
//                   aria-current={isActive ? "true" : undefined}
//                   onClick={() => scrollToId(item.id)}
//                   style={{
//                     minHeight: 42,
//                     padding: "10px 14px",
//                     borderRadius: 999,
//                     border: "none",
//                     background: isActive ? tokens.amber : "transparent",
//                     color: isActive ? tokens.green900 : "rgba(255,255,255,0.82)",
//                     fontSize: 13,
//                     fontWeight: isActive ? 700 : 500,
//                     cursor: "pointer",
//                     transition: "background 0.2s ease, color 0.2s ease, transform 0.2s ease",
//                     whiteSpace: "nowrap",
//                     flexShrink: 0,
//                   }}
//                 >
//                   {item.label}
//                 </button>
//               );
//             })}
//           </div>

//           <button
//             type="button"
//             onClick={() => scrollToId("contact")}
//             className="fra-focus-ring"
//             style={{
//               minHeight: 44,
//               padding: "0 18px",
//               borderRadius: 999,
//               border: `1px solid ${tokens.amber}`,
//               background: "transparent",
//               color: tokens.amber,
//               fontSize: 14,
//               fontWeight: 600,
//               cursor: "pointer",
//               flexShrink: 0,
//             }}
//           >
//             Contact
//           </button>
//         </div>

//         <button
//           type="button"
//           className="fra-nav-mobile-toggle fra-focus-ring"
//           aria-label={mobileOpen ? "Close menu" : "Open menu"}
//           aria-expanded={mobileOpen}
//           onClick={() => setMobileOpen((prev) => !prev)}
//           style={{
//             display: "none",
//             width: 48,
//             height: 48,
//             minHeight: 48,
//             borderRadius: 999,
//             border: "1px solid rgba(255,255,255,0.16)",
//             background: "rgba(255,255,255,0.06)",
//             color: "white",
//             cursor: "pointer",
//             alignItems: "center",
//             justifyContent: "center",
//             flexDirection: "column",
//             gap: 4,
//           }}
//         >
//           {[0, 1, 2].map((index) => (
//             <span
//               key={index}
//               style={{
//                 display: "block",
//                 width: index === 1 ? 14 : 18,
//                 height: 2,
//                 borderRadius: 99,
//                 background: "currentColor",
//                 transition: "transform 0.2s ease",
//               }}
//             />
//           ))}
//         </button>
//       </div>

//       <div
//         style={{
//           maxWidth: 1200,
//           margin: "0 auto",
//           padding: mobileOpen ? "0 24px 20px" : "0 24px 0",
//           maxHeight: mobileOpen ? 640 : 0,
//           opacity: mobileOpen ? 1 : 0,
//           overflow: "hidden",
//           transition: "max-height 0.28s ease, opacity 0.22s ease, padding 0.22s ease",
//         }}
//         className="fra-nav-mobile-drawer"
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: 10,
//             background: "rgba(255,255,255,0.06)",
//             border: "1px solid rgba(255,255,255,0.1)",
//             borderRadius: 20,
//             padding: 12,
//           }}
//         >
//           {navItems.map((item) => {
//             const isActive = activeSection === item.id;
//             return (
//               <button
//                 key={item.id}
//                 type="button"
//                 className="fra-focus-ring"
//                 aria-current={isActive ? "true" : undefined}
//                 onClick={() => {
//                   scrollToId(item.id);
//                   setMobileOpen(false);
//                 }}
//                 style={{
//                   minHeight: 46,
//                   width: "100%",
//                   borderRadius: 14,
//                   border: "none",
//                   background: isActive ? tokens.amber : "rgba(255,255,255,0.02)",
//                   color: isActive ? tokens.green900 : "rgba(255,255,255,0.86)",
//                   textAlign: "left",
//                   padding: "12px 14px",
//                   fontSize: 15,
//                   fontWeight: isActive ? 700 : 500,
//                   cursor: "pointer",
//                 }}
//               >
//                 {item.label}
//               </button>
//             );
//           })}
//           <button
//             type="button"
//             className="fra-focus-ring"
//             onClick={() => {
//               scrollToId("contact");
//               setMobileOpen(false);
//             }}
//             style={{
//               minHeight: 46,
//               borderRadius: 14,
//               border: `1px solid ${tokens.amber}`,
//               background: "transparent",
//               color: tokens.amber,
//               padding: "12px 14px",
//               textAlign: "left",
//               fontSize: 15,
//               fontWeight: 600,
//               cursor: "pointer",
//             }}
//           >
//             Contact
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// } 

import { useEffect, useMemo, useRef, useState } from "react";
import { tokens } from "../../styles/tokens";
import iconImg from "../../assets/icon.png";

type NavItem = {
  id: string;
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { id: "how-it-works", label: "Journey", href: "#how-it-works" },
  { id: "problem", label: "Why We Exist", href: "#problem" },
  { id: "who-its-for", label: "Who It's For", href: "#who-its-for" },
  { id: "impact", label: "Impact", href: "#impact" },
  { id: "our-story", label: "Our Story", href: "#our-story" },
  { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  { id: "pricing", label: "Pricing", href: "#pricing" },
  { id: "faq", label: "FAQ", href: "#faq" },
  { id: "contact", label: "Contact", href: "#contact" },
];

function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("problem");
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onScrollActive = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const triggerY = scrollY + viewportHeight * 0.35;

      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
      if (atBottom) {
        setActiveSection(navItems[navItems.length - 1].id);
        return;
      }

      let currentId = navItems[0].id;

      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= triggerY) {
          currentId = id;
        }
      }

      setActiveSection(currentId);
    };

    onScrollActive();
    window.addEventListener("scroll", onScrollActive, { passive: true });
    return () => window.removeEventListener("scroll", onScrollActive);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (target && navRef.current && !navRef.current.contains(target)) {
        setMobileOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [mobileOpen]);

  const navSurface = useMemo(
    () => ({
      background: scrolled ? "rgba(15,36,25,0.96)" : "rgba(15,36,25,0.72)",
      backdropFilter: "blur(14px)",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.14)" : "none",
    }),
    [scrolled]
  );

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
        transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        ...navSurface,
      }}
      aria-label="Primary"
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <button
          type="button"
          onClick={() => scrollToId("hero")}
          className="fra-focus-ring"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
            color: "white",
            flexShrink: 0,
          }}
        >
          <img
            src={iconImg}  
            alt="Future Ready Africa"
            style={{
              width: 38,
              height: 38,
              minWidth: 38,
              borderRadius: 10,
              objectFit: "contain",
            }}
          />
          <div style={{ textAlign: "left" }}>
            <div style={{ color: "#fff", fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>
              Future Ready Africa
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.48)",
                fontSize: 9,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Employability Infrastructure
            </div>
          </div>
        </button>

        <div className="fra-nav-desktop" style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0, flex: 1, justifyContent: "flex-end" }}>
          <div
            className="fra-nav-links-scroll"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 999,
              padding: 4,
              overflowX: "auto",
              scrollbarWidth: "none",
              minWidth: 0,
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className="fra-focus-ring"
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => scrollToId(item.id)}
                  style={{
                    minHeight: 42,
                    padding: "10px 14px",
                    borderRadius: 999,
                    border: "none",
                    background: isActive ? tokens.amber : "transparent",
                    color: isActive ? tokens.green900 : "rgba(255,255,255,0.82)",
                    fontSize: 13,
                    fontWeight: isActive ? 700 : 500,
                    cursor: "pointer",
                    transition: "background 0.2s ease, color 0.2s ease, transform 0.2s ease",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="fra-nav-mobile-toggle fra-focus-ring"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          style={{
            display: "none",
            width: 48,
            height: 48,
            minHeight: 48,
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.16)",
            background: "rgba(255,255,255,0.06)",
            color: "white",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              style={{
                display: "block",
                width: index === 1 ? 14 : 18,
                height: 2,
                borderRadius: 99,
                background: "currentColor",
                transition: "transform 0.2s ease",
              }}
            />
          ))}
        </button>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: mobileOpen ? "0 24px 20px" : "0 24px 0",
          maxHeight: mobileOpen ? 640 : 0,
          opacity: mobileOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.28s ease, opacity 0.22s ease, padding 0.22s ease",
        }}
        className="fra-nav-mobile-drawer"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 20,
            padding: 12,
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className="fra-focus-ring"
                aria-current={isActive ? "true" : undefined}
                onClick={() => {
                  scrollToId(item.id);
                  setMobileOpen(false);
                }}
                style={{
                  minHeight: 46,
                  width: "100%",
                  borderRadius: 14,
                  border: "none",
                  background: isActive ? tokens.amber : "rgba(255,255,255,0.02)",
                  color: isActive ? tokens.green900 : "rgba(255,255,255,0.86)",
                  textAlign: "left",
                  padding: "12px 14px",
                  fontSize: 15,
                  fontWeight: isActive ? 700 : 500,
                  cursor: "pointer",
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}