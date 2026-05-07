import { useEffect, useState } from "react";
import { tokens } from "../../styles/tokens";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 1200,
        width: 48,
        height: 48,
        borderRadius: 999,
        border: `1px solid ${tokens.border}`,
        background: "rgba(247,243,237,0.96)",
        color: tokens.green800,
        fontSize: 20,
        fontWeight: 700,
        cursor: "pointer",
        boxShadow: "0 12px 32px rgba(0,0,0,0.14)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.25s ease, transform 0.25s ease, background 0.2s ease",
      }}
      className="fra-focus-ring"
    >
      ↑
    </button>
  );
}
