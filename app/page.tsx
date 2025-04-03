import Hero from "@/components/sections/Hero";
// import ProjectMarquee from "@/components/sections/ProjectMarquee";
import AboutMe from "@/components/sections/AboutMe";
import Works from "@/components/sections/Works";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import WorkingProcedure from "@/components/sections/WorkingProcedure";
// import Clients from "@/components/sections/Clients";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import Articles from "@/components/sections/Articles";
import ContactCTA from "@/components/sections/ContactCTA";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import WhyChooseMe from "@/components/sections/WhyChooseMe";

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeStrip />
      {/* <ProjectMarquee /> */}
      <section id="about">
        <AboutMe />
        <WhyChooseMe />
      </section>
      <section id="works">
        <Works />
      </section>
      <section id="services">
        <Services />
        <TechStack />
        <WorkingProcedure />
      </section>
      {/* <Clients /> */}
      <FAQ />
      <Testimonials />
      <Articles />
      <section id="contact">
        <ContactCTA />
      </section>
    </main>
  );
}
