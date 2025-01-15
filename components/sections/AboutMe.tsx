"use client";
import Button from "@/components/ui/Button";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import { motion } from "framer-motion";

const statsData = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

const AboutMe = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl">
              I&apos;m Nihar, a passionate technologist driven by innovation and
              a commitment to helping businesses thrive. As a skilled web
              designer, developer, and software architect, I specialize in
              crafting exceptional digital products that not only look great but
              also grow seamlessly alongside your ambitions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact">Get in touch</Button>
              <Button href="/projects" variant="secondary">
                View Projects
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-2"
              >
                <h3 className="text-4xl md:text-5xl font-medium">
                  <AnimatedNumber 
                    value={stat.value} 
                    suffix={stat.suffix}
                  />
                </h3>
                <p className="text-neutral-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
