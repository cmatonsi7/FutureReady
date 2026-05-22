import { useEffect } from "react";
import type { ReactNode } from "react";

/* ─── data ─────────────────────────────────────────────────────────────── */

interface TocItem {
  id: string;
  num: string;
  label: string;
}

interface ClauseData {
  n: string;
  text?: ReactNode;
  listPreamble?: string;
  list?: string[];
}

interface SectionData {
  id: string;
  num: string;
  title: string;
  clauses?: ClauseData[];
  prose?: string;
  callout?: string | null;
  calloutPreamble?: string;
  calloutList?: string[];
}

const TOC: TocItem[] = [
  { id: "s1",  num: "01", label: "Definitions and Interpretation" },
  { id: "s2",  num: "02", label: "Binding Agreement" },
  { id: "s3",  num: "03", label: "Nature of Services" },
  { id: "s4",  num: "04", label: "Registration & POPIA" },
  { id: "s5",  num: "05", label: "Fees and Payments" },
  { id: "s6",  num: "06", label: "Cancellations & Refunds" },
  { id: "s7",  num: "07", label: "Conduct & Termination" },
  { id: "s8",  num: "08", label: "Assumption of Risk" },
  { id: "s9",  num: "09", label: "Indemnity" },
  { id: "s10", num: "10", label: "Force Majeure" },
  { id: "s11", num: "11", label: "Intellectual Property" },
  { id: "s12", num: "12", label: "Media Rights" },
  { id: "s13", num: "13", label: "Privacy" },
  { id: "s14", num: "14", label: "No Guarantee Clause" },
  { id: "s15", num: "15", label: "Governing Law" },
  { id: "s16", num: "16", label: "Dispute Resolution" },
  { id: "s17", num: "17", label: "Severability" },
  { id: "s18", num: "18", label: "Entire Agreement" },
];

const SECTIONS: SectionData[] = [
  {
    id: "s1", num: "01", title: "Definitions and Interpretation",
    clauses: [
      { n: "1.1", text: <><strong>"Organisation"</strong> means Future Ready Africa.</> },
      { n: "1.2", text: <><strong>"Participant"</strong> means any individual registered for or attending any programme or service.</> },
      { n: "1.3", text: <><strong>"Services"</strong> means all online programmes, events, training, workshops, experiences, and related offerings provided by the Organisation.</> },
      { n: "1.4", text: "Headings are for convenience only and do not affect interpretation." },
    ],
  },
  {
    id: "s2", num: "02", title: "Binding Agreement",
    clauses: [
      { n: "2.1", text: "By registering, paying, attending, accessing, or participating in any Services, the Participant enters into a legally binding agreement with the Organisation." },
      { n: "2.2", text: "Participation constitutes irrevocable acceptance of these Terms and Conditions." },
    ],
  },
  {
    id: "s3", num: "03", title: "Nature of Services",
    clauses: [
      { n: "3.1", text: "The Organisation provides online, educational, and developmental experiences intended for exposure, learning, and skills development." },
      { n: "3.2", text: "The Organisation does not guarantee employment, internships, academic admission, business opportunities, or any specific outcome." },
      { n: "3.3", text: "All Services are provided on a best-effort basis and may vary depending on operational, partner, technical, or external conditions." },
      { n: "3.4", text: "The Organisation reserves full discretion to modify content, facilitators, schedules, platforms, venues, or delivery methods without liability." },
    ],
  },
  {
    id: "s4", num: "04", title: "Registration, Accuracy, and POPIA Compliance",
    clauses: [
      { n: "4.1", text: "The Participant warrants that all information provided is true, accurate, and complete." },
      { n: "4.2", text: "The Organisation shall not be liable for any consequences arising from false, misleading, or incomplete information supplied by the Participant." },
      { n: "4.3", text: "The Organisation reserves the right to refuse, suspend, or revoke participation at its sole discretion, with or without cause." },
      { n: "4.4", text: 'Personal information collected by the Organisation shall be processed in accordance with the Protection of Personal Information Act, 4 of 2013 ("POPIA") and applicable South African data protection legislation.' },
      { n: "4.5", text: "By registering for Services, the Participant consents to the collection, storage, processing, and use of personal information for operational, administrative, communication, compliance, and service-delivery purposes." },
      { n: "4.6", text: "The Organisation shall implement reasonable safeguards to protect personal information but does not guarantee absolute security of electronic systems or communications." },
    ],
  },
  {
    id: "s5", num: "05", title: "Fees and Payments",
    clauses: [
      { n: "5.1", text: "Participants shall pay for Services according to their selected enrolment, package, or programme prior to participation unless otherwise agreed in writing." },
      { n: "5.2", text: "The Organisation shall make payments to contractors, facilitators, partners, or service providers according to separate written agreements." },
      { n: "5.3", text: "A booking or enrolment is only confirmed upon receipt of cleared funds." },
      { n: "5.4", text: "The Organisation reserves the right to suspend, restrict, or deny access to Services where payment remains outstanding." },
      { n: "5.5", text: "Prices and fees are subject to change without notice for future enrolments or Services." },
      { n: "5.6", text: "Late payments may incur reasonable administrative charges and collection costs where applicable." },
    ],
  },
  {
    id: "s6", num: "06", title: "Cancellation, Refunds, and Transfers",
    clauses: [
      { n: "6.1", text: "All cancellations must be submitted in writing." },
      { n: "6.2", text: "No refund shall be issued after two (2) weeks from the Participant's enrolment date." },
      { n: "6.3", text: "Refund requests made within two (2) weeks of enrolment may be considered subject to administrative costs, processing fees, and any non-recoverable expenses already incurred by the Organisation." },
      { n: "6.4", text: "No refund shall be issued after commencement of a programme, course, workshop, or Service." },
      { n: "6.5", text: "Transfers may be permitted at the Organisation's sole discretion and may attract an administrative transfer fee." },
      { n: "6.6", text: "No refund will be issued for non-attendance, missed sessions, voluntary withdrawal, connectivity issues on the Participant's side, or failure to participate." },
    ],
  },
  {
    id: "s7", num: "07", title: "Participant Conduct and Termination",
    clauses: [
      { n: "7.1", text: "Participants must act in a respectful, lawful, professional, and non-disruptive manner at all times." },
      {
        n: "7.2",
        list: ["Misconduct", "Harassment or discrimination", "Safety or reputational risk", "Violation of instructions, policies, or rules", "Abuse of facilitators, staff, or other Participants", "Unauthorised distribution of Organisation material"],
        listPreamble: "The Organisation may immediately remove or suspend any Participant for:",
      },
      { n: "7.3", text: "Removal or suspension under this clause results in automatic forfeiture of fees, with no refund or credit." },
      { n: "7.4", text: "The Organisation is not required to provide prior warning before termination where safety, operational integrity, or reputation is at risk." },
    ],
  },
  {
    id: "s8", num: "08", title: "Assumption of Risk and Liability Waiver",
    clauses: [
      { n: "8.1", text: "Participation in Services may involve physical activities, online engagement, travel, third-party interactions, or external platforms." },
      { n: "8.2", text: "The Participant voluntarily assumes all risks associated with participation, whether foreseeable or unforeseeable." },
      {
        n: "8.3",
        listPreamble: "To the maximum extent permitted by law, the Organisation, its directors, employees, contractors, facilitators, affiliates, and partners shall not be liable for:",
        list: ["Injury, illness, or death", "Emotional distress", "Loss or damage to property", "Data loss or cyber incidents", "Financial loss", "Indirect or consequential damages"],
      },
      { n: "8.4", text: "The Organisation's total liability, if any, shall not exceed the total amount paid by the Participant for the specific Service giving rise to the claim." },
    ],
  },
  {
    id: "s9", num: "09", title: "Indemnity",
    callout: "The Participant indemnifies and holds harmless the Organisation against all claims, losses, liabilities, damages, costs, or expenses arising directly or indirectly from participation in any Service, including third-party claims.",
  },
  {
    id: "s10", num: "10", title: "Force Majeure",
    clauses: [
      {
        n: "10.1",
        listPreamble: "The Organisation shall not be liable for failure or delay caused by events beyond reasonable control, including but not limited to:",
        list: ["Natural disasters", "Government restrictions or action", "Pandemics or public health emergencies", "Internet or platform failures", "Transport disruptions", "Utility failures", "Civil unrest", "Industrial action"],
      },
      { n: "10.2", text: "The Organisation may cancel, postpone, reschedule, or modify Services without liability where such circumstances arise." },
    ],
  },
  {
    id: "s11", num: "11", title: "Intellectual Property",
    clauses: [
      { n: "11.1", text: "All content, materials, branding, methodologies, recordings, systems, frameworks, and training assets remain the exclusive intellectual property of the Organisation." },
      { n: "11.2", text: "No Participant may reproduce, distribute, record, publish, share, sell, or commercially exploit any material without prior written consent from the Organisation." },
      { n: "11.3", text: "Any ideas, feedback, suggestions, or submissions made by Participants may be used by the Organisation without compensation or restriction." },
    ],
  },
  {
    id: "s12", num: "12", title: "Media Rights",
    clauses: [
      { n: "12.1", text: "The Organisation may capture photographs, video recordings, screen recordings, and audio during Services." },
      { n: "12.2", text: "The Participant grants the Organisation an irrevocable, worldwide, royalty-free right to use such content for marketing, educational, operational, and promotional purposes." },
      { n: "12.3", text: "Opt-out requests must be submitted in writing prior to participation and may limit access to certain activities or group sessions." },
    ],
  },
  {
    id: "s13", num: "13", title: "Privacy",
    clauses: [
      { n: "13.1", text: "Personal information shall only be processed for legitimate operational and service-related purposes." },
      { n: "13.2", text: "The Organisation may communicate with Participants regarding programmes, updates, opportunities, events, and related Services." },
      { n: "13.3", text: "The Organisation shall take reasonable steps to maintain confidentiality but shall not be liable for breaches beyond its reasonable control." },
    ],
  },
  {
    id: "s14", num: "14", title: "No Guarantee Clause",
    callout: null,
    calloutPreamble: "The Participant acknowledges and agrees that:",
    calloutList: [
      "No outcomes are guaranteed, including employment, income, partnerships, opportunities, admissions, or placements",
      "Participation does not create entitlement to future opportunities or benefits",
      "Any references to opportunities, exposure, or future prospects are indicative only and not contractual guarantees",
    ],
  },
  {
    id: "s15", num: "15", title: "Governing Law",
    prose: "This Agreement shall be governed and interpreted in accordance with the laws of the Republic of South Africa.",
  },
  {
    id: "s16", num: "16", title: "Dispute Resolution",
    clauses: [
      { n: "16.1", text: "Parties shall first attempt to resolve disputes informally and in good faith." },
      { n: "16.2", text: "If unresolved, disputes may proceed to mediation before litigation." },
      { n: "16.3", text: "Any legal proceedings shall fall under the jurisdiction of the courts of South Africa." },
    ],
  },
  {
    id: "s17", num: "17", title: "Severability",
    prose: "If any provision of this Agreement is found invalid, unlawful, or unenforceable, the remaining provisions shall remain fully valid and enforceable.",
  },
  {
    id: "s18", num: "18", title: "Entire Agreement",
    prose: "This document constitutes the entire agreement between the Parties and supersedes all prior discussions, representations, understandings, or agreements relating to the Services.",
  },
];

/* ─── constants ─────────────────────────────────────────────────────────── */

const GOLD = "#c4a84a";
const GREEN_900 = "#1a2e1a";
const GREEN_MID = "#8aac8a";
const CREAM = "#f5f2eb";
const INK = "#2a2a2a";
const BORDER = "#d4cfc4";

/* ─── sub-components ────────────────────────────────────────────────────── */

interface SectionNumProps {
  children: ReactNode;
}
function SectionNum({ children }: SectionNumProps) {
  return (
    <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 13, color: GOLD, minWidth: 28, fontStyle: "italic" }}>
      {children}
    </span>
  );
}

interface SectionHeaderProps {
  num: string;
  title: string;
  id: string;
}
function SectionHeader({ num, title, id }: SectionHeaderProps) {
  return (
    <div
      id={id}
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 14,
        marginBottom: 20,
        paddingBottom: 14,
        borderBottom: `1.5px solid ${GREEN_900}`,
        scrollMarginTop: 24,
      }}
    >
      <SectionNum>{num}</SectionNum>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 26, fontWeight: 400, color: GREEN_900, margin: 0, lineHeight: 1.2 }}>
        {title}
      </h2>
    </div>
  );
}

interface ClauseProps {
  n: string;
  text?: ReactNode;
  listPreamble?: string;
  list?: string[];
}
function Clause({ n, text, listPreamble, list }: ClauseProps) {
  return (
    <div style={{ display: "flex", gap: 16, marginBottom: 12, alignItems: "flex-start" }}>
      <span style={{ fontSize: 13, color: "#b0a890", minWidth: 30, paddingTop: 3, fontVariantNumeric: "tabular-nums", flexShrink: 0 }}>
        {n}
      </span>
      <div style={{ fontSize: 16.5, color: INK, lineHeight: 1.8, textAlign: "justify" }}>
        {listPreamble && <p style={{ margin: "0 0 8px", textAlign: "justify" }}>{listPreamble}</p>}
        {text && <p style={{ margin: 0, textAlign: "justify" }}>{text}</p>}
        {list && (
          <ul style={{ margin: "0", paddingLeft: 20 }}>
            {list.map((item, i) => (
              <li key={i} style={{ marginBottom: 4, lineHeight: 1.7, textAlign: "justify" }}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

interface CalloutProps {
  text?: string;
  preamble?: string;
  list?: string[];
}
function Callout({ text, preamble, list }: CalloutProps) {
  return (
    <div style={{ background: GREEN_900, borderRadius: 10, padding: "24px 28px", marginBottom: 12 }}>
      {preamble && <p style={{ color: "#c8d8c8", fontSize: 16, lineHeight: 1.8, margin: "0 0 8px", textAlign: "justify" }}>{preamble}</p>}
      {text && <p style={{ color: "#c8d8c8", fontSize: 16, lineHeight: 1.8, margin: 0, textAlign: "justify" }}>{text}</p>}
      {list && (
        <ul style={{ margin: "0", paddingLeft: 18 }}>
          {list.map((item, i) => (
            <li key={i} style={{ color: "#c8d8c8", fontSize: 16, lineHeight: 1.8, marginBottom: 5, textAlign: "justify" }}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

interface SectionProps {
  section: SectionData;
}
function Section({ section }: SectionProps) {
  const { id, num, title, clauses, prose, callout, calloutPreamble, calloutList } = section;
  return (
    <div style={{ marginBottom: 48 }}>
      <SectionHeader id={id} num={num} title={title} />
      {clauses && clauses.map((c) => <Clause key={c.n} {...c} />)}
      {prose && <p style={{ fontSize: 16.5, color: INK, lineHeight: 1.8, marginBottom: 12, textAlign: "justify" }}>{prose}</p>}
      {callout && <Callout text={callout} />}
      {calloutPreamble && <Callout preamble={calloutPreamble} list={calloutList} />}
    </div>
  );
}

/* ─── main component ────────────────────────────────────────────────────── */

interface TermsAndConditionsProps {
  onClose?: () => void;
}

export default function TermsAndConditions({ onClose }: TermsAndConditionsProps) {
  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose?.(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&family=DM+Mono:wght@400;500&display=swap');

        html, body {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          display: none;
        }
        .fra-tc-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          background: ${CREAM};
          font-family: 'DM Sans', sans-serif;
          color: ${INK};
          overflow-y: scroll;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .fra-tc-overlay::-webkit-scrollbar {
          display: none;
        }
        .fra-tc-toc-item {
          font-size: 15px;
          color: #3a5a3a;
          padding: 5px 0;
          border-bottom: 0.5px solid #ede9e0;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: color 0.2s ease;
          cursor: pointer;
        }
        .fra-tc-toc-item:hover { color: ${GOLD}; }
        .fra-tc-footer-link { color: #8aac8a; font-size: 13px; text-decoration: none; transition: color 0.2s ease; }
        .fra-tc-footer-link:hover { color: ${GOLD}; }
        .fra-tc-list li::marker { color: ${GOLD}; }
        .fra-tc-callout-list li::marker { color: ${GOLD}; }

        @media (max-width: 640px) {
          .fra-tc-hero { padding: 48px 24px 40px !important; }
          .fra-tc-body { padding: 40px 24px 64px !important; }
          .fra-tc-toc-grid { grid-template-columns: 1fr !important; }
          .fra-tc-footer { padding: 40px 24px !important; flex-direction: column !important; }
          .fra-tc-footer-bottom { padding: 14px 24px !important; flex-direction: column !important; gap: 6px !important; }
          .fra-tc-nav { padding: 16px 24px !important; }
        }
      `}</style>

      <div className="fra-tc-overlay">

        {/* ── NAV ── */}
        <nav
          className="fra-tc-nav"
          style={{ background: GREEN_900, padding: "18px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}
        >
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#c8d8c8",
              fontSize: 13,
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.04em",
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: 0,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#c8d8c8")}
          >
            ← Back to site
          </button>
        </nav>

        {/* ── HERO ── */}
        <div
          className="fra-tc-hero"
          style={{ background: GREEN_900, padding: "72px 48px 64px", borderBottom: `1px solid #2e4a2e` }}
        >
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(36px,6vw,52px)", color: "#fff", fontWeight: 400, margin: "0 0 16px", lineHeight: 1.1 }}>
            Terms &amp; <em style={{ color: GOLD, fontStyle: "italic" }}>Conditions</em>
          </h1>
          <p style={{ color: GREEN_MID, fontSize: 14, marginTop: 20 }}>
            Effective Date: 11 May 2026 &nbsp;·&nbsp; Future Ready Africa (Pty) Ltd &nbsp;·&nbsp; Cape Town, South Africa
          </p>
        </div>

        {/* ── BODY ── */}
        <div className="fra-tc-body" style={{ maxWidth: 860, margin: "0 auto", padding: "64px 48px 96px", width: "100%", boxSizing: "border-box" }}>

          {/* Table of Contents */}
          <div style={{ background: "#fff", border: `0.5px solid ${BORDER}`, borderRadius: 12, padding: "32px 36px", marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, marginBottom: 20 }}>
              <span style={{ display: "inline-block", width: 20, height: 1.5, background: GOLD }} />
              Contents
            </div>
            <div
              className="fra-tc-toc-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 32px" }}
            >
              {TOC.map(({ id, num, label }) => (
                <a
                  key={id}
                  className="fra-tc-toc-item"
                  href={`#${id}`}
                >
                  <span style={{ fontSize: 11, color: "#b0a890", minWidth: 22, fontVariantNumeric: "tabular-nums" }}>{num}</span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          {SECTIONS.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </div>

        {/* ── BOTTOM NAV ── */}
        <nav
          className="fra-tc-nav"
          style={{ background: GREEN_900, padding: "18px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}
        >
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#c8d8c8",
              fontSize: 13,
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.04em",
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: 0,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#c8d8c8")}
          >
            ← Back to site
          </button>
        </nav>

      </div>
    </>
  );
}