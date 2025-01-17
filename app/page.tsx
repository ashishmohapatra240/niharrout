import Hero from "@/components/sections/Hero";
import ProjectMarquee from "@/components/sections/ProjectMarquee";
import AboutMe from "@/components/sections/AboutMe";
import Works from "@/components/sections/Works";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import Articles from "@/components/sections/Articles";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectMarquee />
      <AboutMe />
      <Works />
      <Clients />
      <Testimonials />
      <Articles />
      <ContactCTA />
    </main>
  );
}
