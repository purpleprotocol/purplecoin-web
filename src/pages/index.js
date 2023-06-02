import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Purplecoin/XPU" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <AboutSection sectionId="about" heading="What is Purplecoin/XPU?" />
        <InterestsSection sectionId="details" heading="Features" />
        <ProjectsSection sectionId="features" heading="More about XPU" />
        <ContactSection sectionId="github" heading="Join us" />
      </Page>
    </>
  );
}
