import { useEffect, useState } from "react";
import { tokens } from "../../styles/tokens";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = docHeight <= 0 ? 0 : Math.min(scrollTop / docHeight, 1);
      setProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: 3,
        zIndex: 1400,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <div
        style={{
          width: `${progress * 100}%`,
          height: "100%",
          background: tokens.amber,
          boxShadow: `0 0 10px ${tokens.amber}55`,
          transformOrigin: "left center",
          transition: "width 0.08s linear",
        }}
      />
    </div>
  );
}
