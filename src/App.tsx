// import GlobalStyles from "./styles/GlobalStyles";
// import Footer from "./components/layout/Footer";
// import Navbar from "./components/layout/Navbar";
// import Contact from "./components/sections/Contact";
// import FAQ from "./components/sections/FAQ";
// import Hero from "./components/sections/Hero";
// import HowItWorks from "./components/sections/HowItWorks";
// import ImpactMetrics from "./components/sections/ImpactMetrics";
// import ProblemSection from "./components/sections/ProblemSection";
// import Testimonials from "./components/sections/Testimonials";
// import WhoItsFor from "./components/sections/WhoItsFor";
// import MarqueeBanner from "./components/sections/MarqueeBanner";
// import OurStory from "./components/sections/OurStory";
// import Pricing from "./components/sections/Pricing";
// import ScrollProgress from "./components/ui/ScrollProgress";
// import BackToTop from "./components/ui/BackToTop";

// export default function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <ScrollProgress />
//       <Navbar />
//       <main>
//         <Hero />
//         <HowItWorks />
//         <MarqueeBanner />
//         <ProblemSection />
//         <WhoItsFor />
//         <ImpactMetrics />
//         <OurStory />
//         <Testimonials />
//         <Pricing />
//         {/* <CohortCTA /> */}
//         <FAQ />
//         <Contact />
//       </main>
//       <Footer />
//       <BackToTop />
//     </>
//   );
// }

import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Contact from "./components/sections/Contact";
import FAQ from "./components/sections/FAQ";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import ImpactMetrics from "./components/sections/ImpactMetrics";
import ProblemSection from "./components/sections/ProblemSection";
import Testimonials from "./components/sections/Testimonials";
import WhoItsFor from "./components/sections/WhoItsFor";
import MarqueeBanner from "./components/sections/MarqueeBanner";
import OurStory from "./components/sections/OurStory";
import Pricing from "./components/sections/Pricing";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";
import TermsAndConditions from "./components/sections/TermsAndConditions";

export default function App() {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <GlobalStyles />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <MarqueeBanner />
        <ProblemSection />
        <WhoItsFor />
        <ImpactMetrics />
        <OurStory />
        <Testimonials />
        <Pricing />
        {/* <CohortCTA /> */}
        <FAQ />
        <Contact />
      </main>
      <Footer onOpenTerms={() => setShowTerms(true)} />
      <BackToTop />

      {showTerms && (
        <TermsAndConditions onClose={() => setShowTerms(false)} />
      )}
    </>
  );
}