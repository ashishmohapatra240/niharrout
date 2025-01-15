"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
const projects = [
  {
    id: 1,
    title: "Corporate Dining Management App",
    date: "May 5, 2023",
    description:
      "The Corporate Dining Management App is a comprehensive solution designed to optimize the employee food ordering process within corporate settings. By streamlining the entire process, the app enhances efficiency, convenience, and overall user experience. Key features include a user-friendly interface, real-time menu updates, personalized ordering options, and seamless payment integration. This app is ideal for companies seeking to improve their corporate dining experience, increase employee satisfaction, and reduce administrative burdens.",
    tags: ["App Design", "UI/UX"],
    image: "/images/projects/dining.svg",
  },
  {
    id: 2,
    title: "E-Learning Management System",
    date: "May 5, 2023",
    description:
      "The E-Learning Management System is a cutting-edge platform designed to revolutionize the online education landscape. This platform offers a dynamic learning environment, complete with live and recorded content, engaging visuals, and in-depth analytics to track student progress. The system is tailored to meet the needs of educators, students, and administrators alike, providing a seamless and interactive learning experience. Its features include course management tools, virtual classrooms, discussion forums, and personalized learning paths.",
    tags: ["App Design", "UI/UX"],
    image: "/images/projects/learning.svg",
  },
  {
    id: 3,
    title: "Job Matching and Recruitment Platform",
    date: "May 5, 2023",
    description:
      "The Job Matching and Recruitment Platform is an innovative solution aimed at bridging the gap between qualified job seekers and companies in India. This platform leverages advanced algorithms to match candidates with job openings based on their skills, experience, and preferences. The platform offers a range of features, including resume parsing, job posting management, candidate profiling, and interview scheduling tools. By simplifying the recruitment process, the platform addresses India's workforce gap, making it easier for companies to find the right talent and for job seekers to find employment opportunities.",
    tags: ["App Design", "UI/UX"],
    image: "/images/projects/Picture3.webp",
  },
];

export default function Works() {
  return (
    <section id="works" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium"
          >
            My works
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button href="/works" variant="secondary">
              View All Works
            </Button>
          </motion.div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
