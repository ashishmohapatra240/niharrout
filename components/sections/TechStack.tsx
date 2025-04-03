"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const techCategories = [
  {
    title: "Front-End",
    tools: [
      { logo: "/images/tech/react.png", name: "React" },
      { logo: "/images/tech/nextjs-icon.svg", name: "Next.js" },
      { logo: "/images/tech/HTML5.png", name: "HTML5" },
      { logo: "/images/tech/CSS.svg", name: "CSS" },
      { logo: "/images/tech/tailwind.png", name: "Tailwind CSS" },
      { logo: "/images/tech/mui.png", name: "Material UI" },
      { logo: "/images/tech/angular.png", name: "Angular" },
    ],
  },
  {
    title: "Back-End",
    tools: [
      { logo: "/images/tech/nodejs.png", name: "Node.js" },
      { logo: "/images/tech/nestjs.png", name: "NestJS" },
      { logo: "/images/tech/express.png", name: "Express" },
      { logo: "/images/tech/feathersjs.svg", name: "FeathersJS" },
    ],
  },
  {
    title: "Mobile",
    tools: [
      { logo: "/images/tech/react-native-1.svg", name: "React Native" },
      { logo: "/images/tech/flutter.png", name: "Flutter" },
      { logo: "/images/tech/kotlin.png", name: "Kotlin" },
      { logo: "/images/tech/swift.png", name: "Swift" },
    ],
  },
  {
    title: "Database",
    tools: [
      { logo: "/images/tech/mongodb.svg", name: "MongoDB" },
      { logo: "/images/tech/Postgres.png", name: "PostgreSQL" },
      { logo: "/images/tech/firebase.png", name: "Firebase" },
    ],
  },
  {
    title: "DevOps",
    tools: [
      { logo: "/images/tech/Jenkins.png", name: "Jenkins" },
      { logo: "/images/tech/Kubernetes.png", name: "Kubernetes" },
      { logo: "/images/tech/docker.png", name: "Docker" },
    ],
  },
  {
    title: "UI/UX",
    tools: [
      { logo: "/images/tech/Figma.png", name: "Figma" },
      { logo: "/images/tech/adobexd.png", name: "Adobe XD" },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-medium mb-16 max-w-2xl"
        >
          The Transformative Tech Stack your Business Needs
        </motion.h2>

        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="space-y-1"
              >
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 + 0.1 }}
                className="flex flex-wrap gap-4"
              >
                {category.tools.map((tool) => (
                  <div
                    key={tool.logo}
                    className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-neutral-200"
                  >
                    <div className="relative h-8 w-8">
                      <Image
                        src={tool.logo}
                        alt={tool.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-lg">{tool.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
