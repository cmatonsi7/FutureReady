
import { tokens } from "../../styles/tokens";
import { siteMedia } from "../../content/siteMedia";

type FooterProps = {
  onOpenTerms: () => void;
};

export default function Footer({ onOpenTerms }: FooterProps) {
  const sections = [
    {
      heading: "Programme",
      links: [
        { label: "Journey", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    {
      heading: "Organisation",
      links: [
        { label: "Our Story", href: "#our-story" },
        { label: "Who it's for", href: "#who-its-for" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "LinkedIn", href: "#contact" },
        { label: "WhatsApp", href: "#contact" },
        { label: "Facebook", href: "#contact" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ];

  return (
    <footer
      style={{
        background: tokens.green900,
        padding: "64px 32px 32px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* TOP GRID — brand takes 2 cols, 3 nav sections share the rest */}
        <div
          className="fra-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 60,
          }}
        >
          {/* BRAND */}
          <div>
            <a
              href="#hero"
              style={{
                display: "inline-block",
                marginBottom: 20,
                textDecoration: "none",
              }}
            >
              <img
                className="fra-footer-logo"
                src={siteMedia.logo.src}
                alt={siteMedia.logo.alt}
                style={{ height: 120, width: "auto", display: "block" }}
              />
            </a>

            <p
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: 11,
                marginTop: 16,
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.05em",
              }}
            >
              Headquartered in Cape Town, South Africa.
            </p>

            {/* Contact details */}
            <div
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <a
                href="tel:+27643298928"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: 12,
                  textDecoration: "none",
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    "rgba(255,255,255,0.45)";
                }}
              >
                064 329 8928
              </a>

              <a
                href="mailto:Admin@futurereadyafrica.co.za"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: 12,
                  textDecoration: "none",
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    "rgba(255,255,255,0.45)";
                }}
              >
                Admin@futurereadyafrica.co.za
              </a>
            </div>
          </div>

          {/* LINK SECTIONS */}
          {sections.map(({ heading, links }) => (
            <div key={heading}>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 20,
                }}
              >
                {heading}
              </div>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  padding: 0,
                  margin: 0,
                }}
              >
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="footer-link">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div
          className="fra-footer-bottom"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: 12,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            © 2026 Future Ready Africa (Pty) Ltd · Cape Town, South Africa
          </p>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <button
              onClick={onOpenTerms}
              className="footer-link small"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>
        {`
          .footer-link {
            color: rgba(255,255,255,0.55);
            font-size: 14px;
            text-decoration: none;
            transition: color 0.2s ease;
          }

          .footer-link:hover {
            color: #ffffff;
          }

          .footer-link.small {
            font-size: 12px;
            font-family: 'DM Mono', monospace;
            letter-spacing: 0.05em;
            color: rgba(255,255,255,0.25);
          }

          .footer-link.small:hover {
            color: #ffffff;
          }

          @media (max-width: 900px) {
            .fra-footer-grid {
              grid-template-columns: 1fr 1fr !important;
              gap: 40px !important;
            }
          }

          @media (max-width: 640px) {
            .fra-footer-grid {
              grid-template-columns: 1fr !important;
            }

            .fra-footer-bottom {
              flex-direction: column !important;
              align-items: flex-start !important;
            }

            .fra-footer-logo {
              height: 90px !important;
            }
          }
        `}
      </style>
    </footer>
  );
}