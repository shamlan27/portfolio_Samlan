import { About, Education, Experience } from "@/components/AboutExperience";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects, Skills } from "@/components/SkillsProjects";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
