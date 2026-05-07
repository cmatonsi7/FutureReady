/* ─── GLOBAL STYLES ─────────────────────────────────────────── */
export default function GlobalStyles() {
  return (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --green900: #0F2419;
      --green800: #1B3D2F;
      --green700: #2D5A3D;
      --amber: #D4943A;
      --amberLight: #E8B86D;
      --cream: #F7F3ED;
      --cream2: #EDE8DF;
      --ink: #1A1A18;
      --inkMid: #4A4A45;
      --inkLight: #8A8A82;
      --border: #DDD8CF;
      --radius: 12px;
      --radius-lg: 20px;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--cream);
      color: var(--ink);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    .display { font-family: 'Playfair Display', serif; }
    .mono { font-family: 'DM Mono', monospace; }

    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 9999;
      opacity: 0.4;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes marquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes pulse-dot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.4); }
    }
    @keyframes countUp {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-up { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
    .animate-fade-in { animation: fadeIn 0.5s ease both; }

    .hover-lift {
      transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
    }
    .hover-lift:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(0,0,0,0.12);
    }

    .fra-focus-ring:focus-visible,
    a:focus-visible,
    button:focus-visible,
    [tabindex="0"]:focus-visible {
      outline: 2px solid var(--amber);
      outline-offset: 2px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 14px 28px;
      min-height: 44px;
      border-radius: 6px;
      font-family: 'DM Sans', sans-serif;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      text-decoration: none;
      transition: all 0.2s ease;
      letter-spacing: 0.01em;
      white-space: nowrap;
    }
    .btn-amber { background: var(--amber); color: #fff; }
    .btn-amber:hover {
      background: #C4851F;
      transform: translateY(-1px);
      box-shadow: 0 8px 24px rgba(212,148,58,0.35);
    }
    .btn-outline-white {
      background: transparent;
      color: #fff;
      border: 1.5px solid rgba(255,255,255,0.5);
    }
    .btn-outline-white:hover {
      background: rgba(255,255,255,0.1);
      border-color: rgba(255,255,255,0.8);
    }
    .btn-outline-green {
      background: transparent;
      color: var(--green800);
      border: 1.5px solid var(--green700);
    }
    .btn-outline-green:hover {
      background: var(--green800);
      color: #fff;
    }
    .btn-dark { background: var(--ink); color: #fff; }
    .btn-dark:hover {
      background: #333;
      transform: translateY(-1px);
    }

    .section-label {
      font-family: 'DM Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--amber);
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .section-label::before {
      content: '';
      display: inline-block;
      width: 24px;
      height: 1.5px;
      background: var(--amber);
    }
    .section-label-light { color: rgba(255,255,255,0.5); }
    .section-label-light::before { background: rgba(255,255,255,0.3); }

    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: var(--cream2); }
    ::-webkit-scrollbar-thumb { background: var(--green700); border-radius: 3px; }

    .card {
      background: #fff;
      border-radius: var(--radius-lg);
      padding: 32px;
      border: 1px solid var(--border);
    }

    .faq-item { border-bottom: 1px solid var(--border); }
    .faq-btn {
      width: 100%;
      min-height: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 0;
      background: none;
      border: none;
      cursor: pointer;
      text-align: left;
      gap: 16px;
    }
    .faq-content {
      overflow: hidden;
      transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .faq-content p {
      padding-bottom: 24px;
      color: var(--inkMid);
      font-size: 15px;
      line-height: 1.75;
    }

    .input {
      width: 100%;
      padding: 14px 16px;
      border: 1.5px solid var(--border);
      border-radius: 8px;
      font-family: 'DM Sans', sans-serif;
      font-size: 15px;
      color: var(--ink);
      background: #fff;
      transition: border-color 0.2s, box-shadow 0.2s;
      outline: none;
    }
    .input:focus {
      border-color: var(--green700);
      box-shadow: 0 0 0 3px rgba(45,90,61,0.12);
    }
    .input::placeholder { color: var(--inkLight); }
    textarea.input { resize: vertical; min-height: 120px; }

    .tab-group {
      display: inline-flex;
      background: var(--cream2);
      border-radius: 8px;
      padding: 4px;
      gap: 2px;
    }
    .tab-btn {
      min-height: 44px;
      padding: 10px 24px;
      border-radius: 6px;
      border: none;
      background: transparent;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: var(--inkMid);
      cursor: pointer;
      transition: all 0.2s;
    }
    .tab-btn.active {
      background: var(--green800);
      color: #fff;
      box-shadow: 0 2px 8px rgba(27,61,47,0.25);
    }



    .fra-hero {
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg, #173827 0%, #1b3d2f 100%);
    }
    .fra-hero-glow {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 18% 28%, rgba(212,148,58,0.14), transparent 30%),
        radial-gradient(circle at 82% 24%, rgba(255,255,255,0.08), transparent 24%),
        radial-gradient(circle at 70% 72%, rgba(212,148,58,0.1), transparent 28%);
      pointer-events: none;
    }
    .fra-hero-noise {
      position: absolute;
      inset: 0;
      opacity: 0.04;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 180px;
      pointer-events: none;
    }
    .fra-hero-inner {
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 110px 48px 72px;
      display: grid;
      grid-template-columns: minmax(0, 1.03fr) minmax(360px, 0.97fr);
      gap: 44px;
      align-items: center;
    }
    .fra-hero-pill {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      min-height: 40px;
      padding: 7px 14px 7px 12px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.14);
      background: rgba(255,255,255,0.04);
      color: rgba(255,255,255,0.7);
      font-family: 'DM Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 24px;
    }
    .fra-hero-pill-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--amber);
      box-shadow: 0 0 0 8px rgba(212,148,58,0.12);
      animation: pulse-dot 2.7s ease-in-out infinite;
      flex-shrink: 0;
    }
    .fra-hero-title {
      font-size: clamp(44px, 6vw, 78px);
      line-height: 0.98;
      letter-spacing: -0.035em;
      color: #fff;
      margin-bottom: 20px;
      max-width: 9.5ch;
    }
    .fra-hero-title em {
      color: var(--amber);
      font-style: italic;
      font-weight: 700;
    }
    .fra-hero-copy {
      max-width: 560px;
      font-size: 16px;
      line-height: 1.8;
      color: rgba(255,255,255,0.68);
      margin-bottom: 28px;
    }
    .fra-hero-cta-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    .fra-hero-divider {
      width: 100%;
      height: 1px;
      background: rgba(255,255,255,0.12);
      margin: 28px 0 22px;
    }
    .fra-hero-visual-wrap {
      position: relative;
      min-height: 560px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .fra-hero-image-card {
      position: relative;
      width: min(100%, 510px);
      aspect-ratio: 0.88 / 1;
      border-radius: 28px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.14);
      box-shadow: 0 30px 80px rgba(0,0,0,0.25);
      background: rgba(255,255,255,0.04);
    }
    .fra-hero-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transform: scale(1.02);
    }
    .fra-hero-image-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(10,22,16,0.72), rgba(10,22,16,0.08) 42%, rgba(10,22,16,0.12));
    }
    .fra-hero-image-caption {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 26px;
      z-index: 1;
    }
    .fra-hero-image-eyebrow {
      font-family: 'DM Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.58);
      margin-bottom: 8px;
    }
    .fra-hero-image-title {
      color: #fff;
      font-size: 22px;
      line-height: 1.25;
      max-width: 12ch;
    }
    .fra-hero-mini-panel {
      position: absolute;
      left: 6%;
      bottom: 3%;
      border-radius: 18px;
      padding: 16px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.14);
      backdrop-filter: blur(12px);
      box-shadow: 0 18px 40px rgba(0,0,0,0.16);
      width: min(86%, 280px);
    }
    .fra-hero-mini-label {
      font-family: 'DM Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.62);
      margin-bottom: 12px;
    }
    .fra-hero-mini-steps {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .fra-hero-mini-steps span {
      min-height: 32px;
      display: inline-flex;
      align-items: center;
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      color: #fff;
      font-size: 12px;
    }

    .fra-cta-gold,
    .fra-cta-outline {
      min-height: 46px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 13px 24px;
      border-radius: 14px;
      text-decoration: none;
      font-weight: 600;
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
      backdrop-filter: blur(8px);
    }
    .fra-cta-gold {
      background: linear-gradient(160deg, #e0a030 0%, #b5730a 60%, #9a6008 100%);
      color: #fff;
      box-shadow: 0 12px 28px rgba(181,115,10,0.32);
    }
    .fra-cta-gold:hover { transform: translateY(-1px); }
    .fra-cta-outline {
      background: rgba(255,255,255,0.08);
      color: #fff;
      border: 1px solid rgba(255,255,255,0.18);
    }
    .fra-cta-outline:hover { transform: translateY(-1px); background: rgba(255,255,255,0.12); }

    .step-line {
      position: absolute;
      top: 28px;
      left: calc(50% + 28px);
      width: calc(100% - 56px);
      height: 1px;
      background: linear-gradient(to right, var(--border), transparent);
    }

    .fra-section-header {
      padding: 0 48px;
      margin-bottom: 48px;
    }

    .fra-card-strip {
      position: relative;
      display: flex;
      gap: 24px;
      padding: 0 48px 4px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    .fra-card-strip::-webkit-scrollbar { display: none; }

    .fra-strip-wrap {
      position: relative;
    }
    .fra-strip-wrap::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 64px;
      height: 100%;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    .fra-strip-wrap.cream::after {
      background: linear-gradient(to right, rgba(247,243,237,0), rgba(247,243,237,0.96));
    }
    .fra-strip-wrap.green::after {
      background: linear-gradient(to right, rgba(27,61,47,0), rgba(27,61,47,0.98));
    }

    .fra-who-grid {
      padding: 0 48px;
    }



    .fra-nav-links-scroll::-webkit-scrollbar { display: none; }

    .fra-journey-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 20px;
      padding: 0 48px;
      align-items: stretch;
    }
    .fra-journey-card {
      position: relative;
      background: linear-gradient(180deg, #ffffff 0%, #fbf8f3 100%);
      border: 1px solid var(--border);
      border-radius: 24px;
      padding: 24px;
      min-height: 100%;
      box-shadow: 0 18px 40px rgba(15,36,25,0.06);
      display: flex;
      flex-direction: column;
    }
    .fra-journey-topline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 20px;
    }
    .fra-journey-number {
      font-family: 'DM Mono', monospace;
      font-size: 12px;
      letter-spacing: 0.16em;
      color: var(--amber);
    }
    .fra-journey-timeframe {
      min-height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 6px 10px;
      border-radius: 999px;
      background: var(--cream);
      color: var(--green800);
      font-size: 11px;
      font-weight: 600;
      text-align: center;
    }
    .fra-journey-highlight {
      margin-top: auto;
      min-height: 38px;
      display: inline-flex;
      align-items: center;
      width: fit-content;
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(212,148,58,0.12);
      color: var(--green900);
      font-size: 12px;
      font-weight: 600;
    }



    /* ─── RESPONSIVE HARDENING PASS ────────────────────────────── */
    html, body, #root {
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
    }

    img, svg, video, canvas {
      max-width: 100%;
    }

    a, button, input, select, textarea {
      -webkit-tap-highlight-color: transparent;
    }

    button, a, input, select, textarea {
      touch-action: manipulation;
    }

    input, select, textarea {
      min-height: 44px;
    }

    .fra-hero-section {
      min-height: 100svh !important;
    }

    @media (max-width: 1100px) {
      .fra-pricing-grid-org {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      }
      .fra-footer-grid {
        grid-template-columns: 1.4fr 1fr 1fr !important;
      }
      .fra-contact-grid,
      .fra-faq-grid {
        grid-template-columns: 1fr !important;
        gap: 48px !important;
      }
    }

    @media (max-width: 900px) {
      .fra-section-responsive {
        padding-top: 76px !important;
        padding-bottom: 76px !important;
        padding-left: 24px !important;
        padding-right: 24px !important;
      }

      #how-it-works,
      #problem,
      #who-its-for {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      #how-it-works > div,
      #problem > div,
      #who-its-for > div,
      #impact > div,
      #our-story > div,
      #pricing > div,
      #faq > div,
      #testimonials > div,
      #contact > div,
      footer > div {
        width: 100% !important;
        max-width: 100% !important;
      }

      #how-it-works > div,
      .fra-section-header,
      .fra-who-grid {
        padding-left: 24px !important;
        padding-right: 24px !important;
      }

      .fra-contact-grid,
      .fra-faq-grid,
      .fra-story-vmgrid,
      .fra-testimonial-grid,
      .fra-pricing-grid,
      .fra-footer-grid {
        grid-template-columns: 1fr !important;
        gap: 28px !important;
      }

      .fra-impact-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      }

      .fra-hero-content {
        padding: 108px 24px 32px !important;
      }

      .fra-hero-panel {
        max-width: 100% !important;
        padding: 24px !important;
        border-radius: 24px !important;
      }

      .fra-hero-tagline-inner {
        padding: 16px 24px !important;
        gap: 14px !important;
        align-items: flex-start !important;
      }

      .fra-hero-tagline-item,
      .fra-hero-tagline-inner > div {
        gap: 14px !important;
      }

      .fra-form-grid-2 {
        grid-template-columns: 1fr !important;
      }

      .fra-contact-card {
        padding: 28px !important;
      }

      .fra-footer-bottom {
        flex-direction: column !important;
        align-items: flex-start !important;
      }
    }

    @media (max-width: 640px) {
      .fra-section-responsive {
        padding-top: 64px !important;
        padding-bottom: 64px !important;
        padding-left: 20px !important;
        padding-right: 20px !important;
      }

      #how-it-works > div,
      .fra-section-header,
      .fra-who-grid,
      .fra-card-strip {
        padding-left: 20px !important;
        padding-right: 20px !important;
      }

      .fra-card-strip > * {
        flex-basis: min(86vw, 320px) !important;
      }

      .fra-hero-section {
        min-height: auto !important;
      }

      .fra-hero-content {
        padding: 96px 20px 28px !important;
      }

      .fra-hero-panel {
        padding: 20px !important;
        border-radius: 20px !important;
        backdrop-filter: blur(6px) !important;
      }

      .fra-hero-badge {
        max-width: 100% !important;
        white-space: normal !important;
        text-align: left !important;
        align-items: flex-start !important;
        line-height: 1.4 !important;
      }

      .fra-hero-panel h1 {
        font-size: clamp(38px, 13vw, 58px) !important;
        line-height: 0.98 !important;
        letter-spacing: -0.035em !important;
      }

      .fra-hero-panel p {
        font-size: 15px !important;
        line-height: 1.65 !important;
        text-align: left !important;
      }

      .fra-hero-cta-row {
        flex-direction: column !important;
        align-items: stretch !important;
        width: 100% !important;
      }

      .fra-cta-gold,
      .fra-cta-outline {
        width: 100% !important;
      }

      .fra-hero-tagline-inner {
        flex-direction: column !important;
        padding: 14px 20px !important;
        gap: 10px !important;
      }

      .fra-hero-tagline-inner > div {
        gap: 10px !important;
      }

      .fra-hero-tagline-inner span[aria-hidden="true"] {
        display: none !important;
      }

      .section-label {
        justify-content: flex-start;
        text-align: left;
      }

      h1,
      .fra-type-h1 {
        font-size: clamp(32px, 10vw, 42px) !important;
        line-height: 1.08 !important;
      }

      h2,
      .fra-h2-mobile,
      .display {
        overflow-wrap: anywhere;
      }

      p {
        text-align: left !important;
      }

      .fra-pricing-tabs,
      .fra-contact-tabs {
        display: flex !important;
        width: 100% !important;
      }

      .fra-pricing-tabs button,
      .fra-contact-tabs button {
        flex: 1 1 0 !important;
        padding-left: 10px !important;
        padding-right: 10px !important;
        min-height: 44px !important;
        white-space: normal !important;
      }

      .fra-impact-grid,
      .fra-pricing-grid-org,
      .fra-pricing-grid-ind {
        grid-template-columns: 1fr !important;
      }

      .fra-contact-grid,
      .fra-faq-grid,
      .fra-story-vmgrid,
      .fra-testimonial-grid,
      .fra-footer-grid {
        grid-template-columns: 1fr !important;
        gap: 24px !important;
      }

      .fra-contact-card {
        padding: 20px !important;
        border-radius: 20px !important;
      }

      .fra-footer-logo {
        height: 92px !important;
      }

      .footer-link.small {
        line-height: 1.6;
      }
    }

    @media (max-width: 768px) {
      .hide-mobile, .fra-nav-desktop { display: none !important; }
      .fra-nav-mobile-toggle { display: inline-flex !important; }
      .stack-mobile { flex-direction: column !important; }
      .full-mobile { width: 100% !important; }
      .fra-section-header { padding: 0 24px; }
      .fra-card-strip { padding: 0 24px 4px; }
      .fra-strip-wrap::after { opacity: 1; }
      .fra-mobile-stack { flex-direction: column !important; align-items: flex-start !important; }
      .fra-mobile-stack-center { flex-direction: column !important; align-items: stretch !important; }
      .fra-mobile-wrap { flex-wrap: wrap !important; }
      .fra-mobile-full { width: 100% !important; }
      .fra-mobile-center { text-align: left !important; }
      .fra-who-grid { padding: 0 24px !important; }
      .fra-journey-grid { grid-template-columns: 1fr; padding: 0 24px; gap: 16px; }
      .fra-h2-mobile {
        font-size: clamp(28px, 8vw, 40px) !important;
      }
      .fra-touch-target {
        min-height: 44px !important;
      }
      .fra-hero-inner {
        grid-template-columns: 1fr;
        padding: 92px 24px 56px;
        gap: 32px;
      }
      .fra-hero-title {
        font-size: clamp(38px, 12vw, 58px);
        max-width: none;
      }
      .fra-hero-copy {
        font-size: 15px;
        max-width: none;
      }
      .fra-hero-cta-row {
        flex-direction: column;
        align-items: stretch;
        width: 100%;
      }
      .fra-cta-gold,
      .fra-cta-outline {
        width: 100%;
      }
      .fra-stats-row {
        gap: 20px !important;
        flex-wrap: wrap;
      }
    }

    @media (min-width: 769px) {
      .fra-nav-mobile-toggle,
      .fra-nav-mobile-drawer {
        display: none !important;
      }
    }

    @media (max-width: 1100px) {
      .fra-journey-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 980px) {
      .fra-hero-inner {
        grid-template-columns: 1fr;
      }
      .fra-hero-visual-wrap {
        order: 2;
      }
    }

    @media (max-width: 640px) {
      .fra-hero-pill {
        font-size: 9px;
        letter-spacing: 0.08em;
      }
      .fra-hero-image-caption {
        padding: 20px;
      }
      .fra-hero-image-title {
        font-size: 18px;
      }
    }
  `}</style>
  );
}
