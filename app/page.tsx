import { GridBackground } from "@/components/portfolio/grid-background";
import { Navbar } from "@/components/portfolio/navbar";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { PublicationsSection } from "@/components/portfolio/publications-section";

export default function Page() {
  return (
    <>
      <GridBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <PublicationsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
