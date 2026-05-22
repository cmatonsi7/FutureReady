
import { useState } from "react";
import { useInView } from "../../hooks/useAnimations";
import { tokens } from "../../styles/tokens";
import { motion } from "framer-motion";

const WEB3FORMS_KEY = "91b41c61-11e1-43c5-9039-f0c5fc9e74c2";


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

/* ─── FORM STATE TYPES ──────────────────────────────────────── */
type SubmitStatus = "idle" | "loading" | "success" | "error";

/* ─── LABEL helper ──────────────────────────────────────────── */
const Label = ({ children, required }: { children: string; required?: boolean }) => (
  <label style={{
    fontFamily: "'DM Mono', monospace",
    fontSize: 10, letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.4)",
    display: "block", marginBottom: 8,
  }}>
    {children}
    {required && <span style={{ color: tokens.amber, marginLeft: 3 }}>*</span>}
  </label>
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

const inputErrorStyle: React.CSSProperties = {
  ...inputStyle,
  border: "1px solid rgba(255, 100, 100, 0.6)",
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

const ErrorMsg = ({ msg }: { msg?: string }) =>
  msg ? (
    <div style={{
      color: "rgba(255,120,120,0.9)",
      fontSize: 11,
      fontFamily: "'DM Mono', monospace",
      marginTop: 5,
      letterSpacing: "0.05em",
    }}>
      {msg}
    </div>
  ) : null;

/* ─── CONTACT SECTION ───────────────────────────────────────── */
export default function Contact() {
  const [tab, setTab] = useState("org");
  const [ref, inView] = useInView();

  /* ── Org form state ── */
  const [orgPackage, setOrgPackage] = useState("");
  const [orgFields, setOrgFields] = useState({
    orgName: "", name: "", role: "", participants: "", email: "", message: "",
  });
  const [orgErrors, setOrgErrors] = useState<Partial<typeof orgFields & { package: string }>>({});
  const [orgStatus, setOrgStatus] = useState<SubmitStatus>("idle");

  /* ── Ind form state ── */
  const [indPackage, setIndPackage] = useState("");
  const [indFields, setIndFields] = useState({
    name: "", phone: "", email: "", source: "", message: "",
  });
  const [indErrors, setIndErrors] = useState<Partial<typeof indFields & { package: string }>>({});
  const [indStatus, setIndStatus] = useState<SubmitStatus>("idle");

  /* ─── Validation ─────────────────────────────────────────── */
  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const validateOrg = () => {
    const e: typeof orgErrors = {};
    if (!orgFields.orgName.trim()) e.orgName = "Organisation name is required";
    if (!orgFields.name.trim())    e.name    = "Your name is required";
    if (!orgFields.email.trim())   e.email   = "Email is required";
    else if (!isEmail(orgFields.email)) e.email = "Enter a valid email address";
    if (!orgPackage)               e.package = "Please select a package";
    return e;
  };

  const validateInd = () => {
    const e: typeof indErrors = {};
    if (!indFields.name.trim())  e.name  = "Your name is required";
    if (!indFields.email.trim()) e.email = "Email is required";
    else if (!isEmail(indFields.email)) e.email = "Enter a valid email address";
    if (!indPackage)             e.package = "Please select a payment plan";
    return e;
  };

  /* ─── Web3Forms submit helper ────────────────────────────── */
  const submitToWeb3Forms = async (payload: Record<string, string>) => {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...payload }),
    });
    return res.json();
  };

 

  /* ─── Discovery call: submit form THEN dial ──────────────── */
const handleDiscoveryCall = async () => {
  const errs = validateOrg();

  if (Object.keys(errs).length) {
    setOrgErrors(errs);
    return;
  }

  setOrgErrors({});
  setOrgStatus("loading");

  try {
    const data = await submitToWeb3Forms({
      subject: "Individual Enrolment Enquiry",
      name: orgFields.name,
      email: orgFields.email,
      message: `
[DISCOVERY CALL REQUESTED]

Organisation: ${orgFields.orgName}
Role: ${orgFields.role}
Est. Participants: ${orgFields.participants}
Package: ${orgPackage}

${orgFields.message}
      `.trim(),
    });

    if (data.success) {
      setOrgStatus("success");

      // CLEAR FORM
      setOrgFields({
        orgName: "",
        name: "",
        role: "",
        participants: "",
        email: "",
        message: "",
      });

      setOrgPackage("");
      setOrgErrors({});
    } else {
      setOrgStatus("error");
    }
  } catch (error) {
    console.error(error);
    setOrgStatus("error");
  }
};

  /* ─── Ind submit ─────────────────────────────────────────── */
  const handleIndSubmit = async () => {
  const errs = validateInd();

  if (Object.keys(errs).length) {
    setIndErrors(errs);
    return;
  }

  setIndErrors({});
  setIndStatus("loading");

  try {
    const data = await submitToWeb3Forms({
      subject: "Individual Enrolment Enquiry",
      name: indFields.name,
      email: indFields.email,
      message: `
Phone: ${indFields.phone}
Payment Plan: ${indPackage}
Heard via: ${indFields.source}

${indFields.message}
      `.trim(),
    });

    if (data.success) {
      setIndStatus("success");

      // CLEAR FORM
      setIndFields({
        name: "",
        phone: "",
        email: "",
        source: "",
        message: "",
      });

      // CLEAR PACKAGE
      setIndPackage("");

      // CLEAR ERRORS
      setIndErrors({});
    } else {
      setIndStatus("error");
    }
  } catch (error) {
    console.error(error);
    setIndStatus("error");
  }
};

  /* ─── Feedback banner ───────────────────────────────────── */
  const StatusBanner = ({ status, onReset }: { status: SubmitStatus; onReset: () => void }) => {
    if (status === "idle" || status === "loading") return null;
    const ok = status === "success";
    return (
      <div style={{
        padding: "14px 18px",
        borderRadius: 10,
        background: ok ? "rgba(80,200,120,0.12)" : "rgba(255,100,100,0.12)",
        border: `1px solid ${ok ? "rgba(80,200,120,0.3)" : "rgba(255,100,100,0.3)"}`,
        color: ok ? "rgba(160,255,180,0.9)" : "rgba(255,160,160,0.9)",
        fontSize: 13,
        fontFamily: "'DM Sans', sans-serif",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
      }}>
        <span>
          {ok
            ? "✓ Submitted! We'll be in touch soon."
            : "✗ Something went wrong. Please try again or email us directly."}
        </span>
        <button
          type="button"
          onClick={onReset}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "inherit", fontSize: 16, padding: "0 4px", flexShrink: 0,
          }}
        >×</button>
      </div>
    );
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
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span style={{
                display: "inline-block", width: 24, height: 1.5,
                background: "rgba(255,255,255,0.3)", flexShrink: 0,
              }} />
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
              }}>Get in Touch</span>
            </div>

            <h2 className="display" style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800, color: "#fff",
              lineHeight: 1.1, marginBottom: 20, textAlign: "left",
            }}>
              Ready to close<br />
              <em style={{ color: tokens.amber, fontStyle: "italic" }}>the gap?</em>
            </h2>

            <p style={{
              color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.8,
              marginBottom: 48, textAlign: "left",
            }}>
              Whether you're an organisation looking to partner or an individual ready to enrol, we'd love to hear from you. We respond within 2 business days.
            </p>

            {contactDetails.map(({ Icon, label, val }) => (
              <div key={label} style={{ display: "flex", gap: 16, marginBottom: 28, alignItems: "center" }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon />
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace", fontSize: 10,
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)", marginBottom: 3,
                  }}>{label}</div>
                  <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 1.4 }}>{val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ── RIGHT: Glossy form card ── */}
          <div className="fra-contact-card" style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 24, padding: 40,
            backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.12)",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease 0.2s",
          }}>

            {/* ── Tab switcher ── */}
            <div className="fra-contact-tabs" style={{
              display: "flex", background: "rgba(0,0,0,0.2)",
              borderRadius: 10, padding: 4, marginBottom: 32,
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              {[
                { key: "org", label: "For Organisations" },
                { key: "ind", label: "For Individuals" },
              ].map((t) => (
                <button key={t.key} type="button" aria-pressed={tab === t.key}
                  onClick={() => setTab(t.key)}
                  style={{
                    flex: 1, padding: "10px 0", borderRadius: 8, border: "none",
                    cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13, fontWeight: 600, transition: "all 0.2s ease",
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
                    <Label required>Organisation Name</Label>
                    <input
                      placeholder="Your organisation"
                      style={orgErrors.orgName ? inputErrorStyle : inputStyle}
                      value={orgFields.orgName}
                      onChange={e => setOrgFields(p => ({ ...p, orgName: e.target.value }))}
                    />
                    <ErrorMsg msg={orgErrors.orgName} />
                  </div>
                  <div>
                    <Label required>Your Name</Label>
                    <input
                      placeholder="Full name"
                      style={orgErrors.name ? inputErrorStyle : inputStyle}
                      value={orgFields.name}
                      onChange={e => setOrgFields(p => ({ ...p, name: e.target.value }))}
                    />
                    <ErrorMsg msg={orgErrors.name} />
                  </div>
                </div>

                <div className="fra-form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <Label>Your Role</Label>
                    <input
                      placeholder="e.g. Programme Manager"
                      style={inputStyle}
                      value={orgFields.role}
                      onChange={e => setOrgFields(p => ({ ...p, role: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label>Est. Participants</Label>
                    <input
                      placeholder="e.g. 30–50"
                      style={inputStyle}
                      value={orgFields.participants}
                      onChange={e => setOrgFields(p => ({ ...p, participants: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <Label required>Email Address</Label>
                  <input
                    placeholder="you@organisation.co.za"
                    style={orgErrors.email ? inputErrorStyle : inputStyle}
                    value={orgFields.email}
                    onChange={e => setOrgFields(p => ({ ...p, email: e.target.value }))}
                  />
                  <ErrorMsg msg={orgErrors.email} />
                </div>

                <div>
                  <Label required>Package</Label>
                  <select
                    value={orgPackage}
                    onChange={e => setOrgPackage(e.target.value)}
                    style={{
                      ...(orgErrors.package ? { ...selectStyle, border: "1px solid rgba(255,100,100,0.6)" } : selectStyle),
                      color: orgPackage ? "#fff" : "rgba(255,255,255,0.35)",
                    }}
                  >
                    {orgPackageOptions.map(opt => (
                      <option key={opt.value} value={opt.value}
                        style={{ background: tokens.green800, color: "#fff" }}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ErrorMsg msg={orgErrors.package} />
                </div>

                <div>
                  <Label>Tell Us About Your Programme</Label>
                  <textarea
                    placeholder="What are you trying to achieve? What does your funder require?"
                    style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
                    value={orgFields.message}
                    onChange={e => setOrgFields(p => ({ ...p, message: e.target.value }))}
                  />
                </div>

                <StatusBanner
                  status={orgStatus}
                  onReset={() => setOrgStatus("idle")}
                />

                {/* ── Submit button ── */}
                {/* {orgStatus !== "success" && (
                  <button
                    type="button"
                    className="btn btn-amber"
                    onClick={handleOrgSubmit}
                    disabled={orgStatus === "loading"}
                    style={{
                      width: "100%", justifyContent: "center",
                      padding: "16px", fontSize: 15, marginTop: 4,
                      opacity: orgStatus === "loading" ? 0.7 : 1,
                      cursor: orgStatus === "loading" ? "wait" : "pointer",
                    }}
                  >
                    {orgStatus === "loading" ? "Sending…" : "Submit →"}
                  </button>
                )} */}

                {/* ── Discovery call button ── */}
                {orgStatus !== "success" && (
                  // <button
                  //   type="button"
                  //   className="btn btn-amber"
                  //   onClick={handleDiscoveryCall}
                  //   disabled={orgStatus === "loading"}
                  //   style={{
                  //     width: "100%", justifyContent: "center",
                  //     padding: "16px", fontSize: 15, marginTop: 4,
                  //     opacity: orgStatus === "loading" ? 0.7 : 1,
                  //     cursor: orgStatus === "loading" ? "wait" : "pointer",
  
                  //     border: "1px solid rgba(255,255,255,0.2)",
                     
                  //   }}
                  // >
                  //   {orgStatus === "loading" ? "Sending…" : "Book a Disco Call →"}
                  // </button>
                  <button
                    type="button"
                    className="btn btn-amber"
                    onClick={handleDiscoveryCall}
                    disabled={indStatus === "loading"}
                    style={{
                      width: "100%", justifyContent: "center",
                      padding: "16px", fontSize: 15, marginTop: 8,
                      opacity: indStatus === "loading" ? 0.7 : 1,
                      cursor: indStatus === "loading" ? "wait" : "pointer",
                    }}
                  >
                    {indStatus === "loading" ? "Sending…" : "Submit→"}
                  </button>
                )}
              </div>
            )}

            {/* ── INDIVIDUAL FORM ── */}
            {tab === "ind" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div className="fra-form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <Label required>Your Name</Label>
                    <input
                      placeholder="Your name"
                      style={indErrors.name ? inputErrorStyle : inputStyle}
                      value={indFields.name}
                      onChange={e => setIndFields(p => ({ ...p, name: e.target.value }))}
                    />
                    <ErrorMsg msg={indErrors.name} />
                  </div>
                  <div>
                    <Label>Phone Number</Label>
                    <input
                      placeholder="+27..."
                      style={inputStyle}
                      value={indFields.phone}
                      onChange={e => setIndFields(p => ({ ...p, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <Label required>Email Address</Label>
                  <input
                    placeholder="you@email.com"
                    style={indErrors.email ? inputErrorStyle : inputStyle}
                    value={indFields.email}
                    onChange={e => setIndFields(p => ({ ...p, email: e.target.value }))}
                  />
                  <ErrorMsg msg={indErrors.email} />
                </div>

                <div>
                  <Label required>Payment Plan</Label>
                  <select
                    value={indPackage}
                    onChange={e => setIndPackage(e.target.value)}
                    style={{
                      ...(indErrors.package ? { ...selectStyle, border: "1px solid rgba(255,100,100,0.6)" } : selectStyle),
                      color: indPackage ? "#fff" : "rgba(255,255,255,0.35)",
                    }}
                  >
                    {indPackageOptions.map(opt => (
                      <option key={opt.value} value={opt.value}
                        style={{ background: tokens.green800, color: "#fff" }}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ErrorMsg msg={indErrors.package} />
                </div>

                <div>
                  <Label>How Did You Hear About Us?</Label>
                  <input
                    placeholder="e.g. LinkedIn, friend, NGO referral"
                    style={inputStyle}
                    value={indFields.source}
                    onChange={e => setIndFields(p => ({ ...p, source: e.target.value }))}
                  />
                </div>

                <div>
                  <Label>Your Situation (Optional)</Label>
                  <textarea
                    placeholder="Tell us where you are in your career journey..."
                    style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
                    value={indFields.message}
                    onChange={e => setIndFields(p => ({ ...p, message: e.target.value }))}
                  />
                </div>

                <StatusBanner
                  status={indStatus}
                  onReset={() => setIndStatus("idle")}
                />

                {indStatus !== "success" && (
                  <button
                    type="button"
                    className="btn btn-amber"
                    onClick={handleIndSubmit}
                    disabled={indStatus === "loading"}
                    style={{
                      width: "100%", justifyContent: "center",
                      padding: "16px", fontSize: 15, marginTop: 8,
                      opacity: indStatus === "loading" ? 0.7 : 1,
                      cursor: indStatus === "loading" ? "wait" : "pointer",
                    }}
                  >
                    {indStatus === "loading" ? "Sending…" : "Submit→"}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}