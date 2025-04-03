"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    title: "A Quick Initial Understanding Call",
    description:
      "We will hop on a quick call for an initial understanding of your requirement. In that call, I usually discuss an overview of your project, your budget, and your industry type.",
    number: "01",
  },
  {
    title: "In-Depth Discussion and Ballpark Estimation",
    description:
      "After understanding the basics of your project, we will connect for a detailed meeting to discuss your requirements, competitors, and expectations. I will analyze the details to prepare further documentation.",
    number: "02",
  },
  {
    title: "Final Commercial Proposal and Documentation",
    description:
      "In this phase, I will provide comprehensive documents, including the project scope, cost breakdown, user stories, and milestones.",
    number: "03",
  },
  {
    title: "Design: User Interface (UI) & User Experience (UX)",
    description:
      "Focusing on the project scope, user group, and future needs, I will begin designing user-friendly, responsive screens for your project. Each page will be verified by you before moving forward.",
    number: "04",
  },
  {
    title: "Development Kick-off",
    description:
      "Once the prototype is approved, the development process begins. We maintain quality standards, and weekly updates are shared through email and stand-up calls. At the end of each sprint, you will review the work and provide feedback.",
    number: "05",
  },
  {
    title: "Testing and Quality Assurance",
    description:
      "Before launching, the application is rigorously tested to ensure it is bug-free and meets the highest quality standards.",
    number: "06",
  },
  {
    title: "Deployment & Final Launch",
    description:
      "After completing the development sprints and quality testing, we deploy the product to the live server and app stores.",
    number: "07",
  },
  {
    title: "Support & Maintenance",
    description:
      "I believe in partnerships, not just client relationships. I offer ongoing support, maintenance, upgrades, and further developments as needed.",
    number: "08",
  },
  {
    title: "Growth Hacking",
    description:
      "Your success leads to my success. I’ll help with growth strategies, creative marketing, SEO, and connect you with potential partners to expand your product's reach.",
    number: "09",
  },
];

const WorkingProcedure = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4">
            Working Procedure
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl tracking-normal leading-relaxed">
            I approach each challenge with a combination of technical
            proficiency and creative problem-solving, ensuring projects are
            delivered on time and to the highest standards.
          </p>
        </motion.div>

        <div className="relative w-full max-w-[600px] mx-auto flex justify-center">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-neutral-200" />

          <div className="space-y-12 w-full">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="flex gap-4 sm:gap-8 md:gap-12">
                  {/* Number and dot */}
                  <div className="relative flex-shrink-0 w-14">
                    <div
                      className={`absolute left-0 top-0 w-[7px] h-[7px] rounded-full transition-colors duration-300 translate-x-[23.5px] translate-y-[23.5px] ${
                        activeStep === index
                          ? "bg-neutral-900"
                          : "bg-neutral-300"
                      }`}
                    />
                    <div
                      className={`font-mono text-sm transition-colors duration-300 ${
                        activeStep === index
                          ? "text-neutral-900"
                          : "text-neutral-400"
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-grow pt-0.5 transition-all duration-300 ${
                      activeStep === index ? "-translate-y-0.5" : ""
                    }`}
                  >
                    <h3 className="text-lg sm:text-2xl font-medium mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 text-md sm:text-lg leading-relaxed tracking-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcedure;
