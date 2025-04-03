"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Workforce Solutions Platform",
    date: "March 2024",
    description: "A comprehensive platform addressing India's employment landscape by connecting qualified candidates with companies. Features include Super Filter for precise job matching, Smart Matching algorithm, E-Interview capabilities, and multilingual support in English, Hindi, and Odia. The platform streamlines the hiring process with innovative features like job alerts and efficient application management.",
    tags: ["Web", "Android", "iOS", "HR Tech"],
    image: "/images/projects/Picture3.webp",
    features: [
      "Super Filter for precise job matching",
      "Smart Matching algorithm",
      "E-Interview system",
      "Multilingual support"
    ],
    status: "Completed",
    link: "https://workforce-solutions.com",
  },
  {
    id: 2,
    title: "Local Marketplace App",
    date: "February 2024",
    description: "A user-friendly marketplace application designed for local buying and selling. The platform addresses common pain points in existing solutions by providing comprehensive order tracking, enhanced user communication, and a robust trust-building system. Built with scalability in mind to handle growing user bases and listings.",
    tags: ["iOS", "Android", "E-Commerce"],
    image: "/images/projects/Picture5.webp",
    features: [
      "User-friendly interface",
      "Category and location filters",
      "User verification system",
      "Advanced admin tools"
    ],
    status: "Completed",
    link: "https://local-marketplace.com",
  },
  {
    id: 3,
    title: "FinTech Education Payment Platform",
    date: "January 2024",
    description: "A specialized FinTech solution for educational institutions to manage student fee payments. The platform features real-time payment tracking, automated fine systems, and timely notifications. It provides a seamless mobile-friendly experience for parents and students to manage payments from anywhere.",
    tags: ["Web", "Android", "iOS", "FinTech"],
    image: "/images/projects/Picture4.webp",
    features: [
      "Real-time payment tracking",
      "Automated fine system",
      "Payment notifications",
      "Mobile-friendly interface"
    ],
    status: "Completed",
    link: "https://fintech-education.com",
  }
];

export default function Works() {
  return (
    <section id="works" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of my recent work that showcases my expertise in building scalable, 
            user-friendly applications across various domains.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
