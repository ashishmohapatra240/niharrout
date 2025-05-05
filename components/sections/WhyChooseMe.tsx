"use client";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Quality is the Key",
    description:
      "Design, color, UI/UX, and branding are integral to any project. As a professional, I am highly particular about ensuring that design standards align with your company's brand identity.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
  },
  {
    title: "Knowledge About Different Industry Sectors",
    description:
      "I bring a wealth of experience across various industries, from finance to healthcare to retail, and apply this knowledge to help you achieve your business goals. I understand the unique challenges and opportunities within each industry and use this insight to guide your project.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
  },
  {
    title: "Working with the Latest Tech Stack",
    description:
      "I stay up-to-date with the latest technological advancements. Whether it's the latest programming languages or cutting-edge tools, I'm dedicated to delivering modern and functional projects using the best technology available.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7 8 4-4 4 4" />
        <path d="m7 16 4 4 4-4" />
        <path d="M11 4v16" />
      </svg>
    ),
  },
  {
    title: "Customized Solutions",
    description:
      "Every project is unique. I take the time to understand your specific needs and tailor solutions to meet those requirements, whether you need bespoke software, a unique website, or a custom-made solution.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Process-Driven Approach",
    description:
      "From concept to completion, I employ a process-driven approach. This includes detailed project plans, task management, progress tracking, and adjustments along the way to ensure the project stays on track and meets your goals.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function WhyChooseMe() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            Why Choose Me
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            When you choose to collaborate with me, you&apos;re not just
            partnering with a developer—you&apos;re working alongside a
            visionary who deeply understands what it takes to build and scale
            great products. I bring a powerful blend of technology, marketing,
            and sales expertise, combined with deep industry insight and an
            unwavering commitment to transforming ideas into impactful digital
            realities.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="text-neutral-800">{reason.icon}</div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">{reason.title}</h3>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
