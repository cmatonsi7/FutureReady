import heroImage from "../assets/hero1.jpeg";
import Individual from "../assets/individual.jpeg";
import Organisation from "../assets/organisational.png";
import logo from "../assets/logo.png";

export const siteMedia = {
  hero: {
    src: heroImage,
    alt: "Future Ready Africa learners in a professional environment",
    eyebrow: "Hero landing image",
  },
  organisations: {
    src: Organisation,
    alt: "Programme partners reviewing impact and employability outcomes",
    eyebrow: "For Organisations",
  },
  individuals: {
    src: Individual,
    alt: "Young professional preparing for work-readiness training",
    eyebrow: "For Individuals",
  },
  logo: {
    src: logo,
    alt: "Future Ready Africa",
  },
};

export type SiteMediaKey = keyof typeof siteMedia;