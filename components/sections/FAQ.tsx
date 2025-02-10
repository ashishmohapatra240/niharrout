"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "Do you work as an individual freelancer or do you have a team?",
    answer:
      "I started as an individual back in 2015, but I now collaborate with experienced developers and designers worldwide to provide a 360-degree approach to projects.",
  },
  {
    question: "How long does it take to develop a project?",
    answer:
      "Development timelines vary based on complexity, but my years of experience ensure faster completion than others. Timelines depend on project scope and existing commitments.",
  },
  {
    question: "What technology stack do you use for web and mobile apps?",
    answer:
      "I prefer Flutter or React Native for mobile app development due to their speed and performance. My team also develops native Android (Kotlin) and iOS (Swift) apps.",
  },
  {
    question: "What other services can you offer?",
    answer:
      "Beyond web and mobile development, I assist with SEO, digital marketing, branding, and social media management. Post-deployment, I also offer services like corporate blogging, live chat support, and more to enhance brand satisfaction.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-4">FAQ</h2>
          <p className="text-neutral-600 max-w-2xl">
            Find answers to commonly asked questions about my services, process,
            and expertise.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full text-left"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <div className="flex items-center justify-between border-b border-neutral-200 py-6">
                  <h3 className="text-xl font-medium pr-8">{faq.question}</h3>
                  <div
                    className={`transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-neutral-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-neutral-600 py-6">{faq.answer}</p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
