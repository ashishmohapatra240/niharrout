"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Software Development",
    items: [
      "Custom ERP Development",
      "Web App Development",
      "Software Consulting Services",
      "Enterprise Application Development",
      "CRM Development",
      "E-commerce Development",
      "Legacy App Modernisation",
      "MVP Development",
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      "Android App Development",
      "iOS App Development",
      "Flutter App Development",
      "React Native App Development",
      "Mobile UI/UX Design",
      "Mobile App QA and Testing",
      "Mobile App Modernization",
    ],
  },
  {
    title: "UI/UX Design",
    items: [
      "Prototyping",
      "Wireframe",
      "Design - Figma / XD",
      "Product Design",
      "Design System",
      "Responsive Design",
    ],
  },
  {
    title: "Web App Development",
    items: [
      "Customized web development",
      "Enterprise web development",
      "Cross Platform Development",
      "PWA App Development",
      "CMS Development",
      "On-site SEO",
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      "AWS / GCP / Azure Consulting",
      "CI/CD Implementation",
      "Kubernetes",
      "Serverless",
      "Cloud Consulting & Cost Optimisation",
      "Infrastructure Management and Monitoring",
    ],
  },
  {
    title: "QA & Automation",
    items: [
      "Mobile App Testing",
      "API Automation",
      "E2E Automation Testing",
      "Load Testing",
      "Performance Testing",
      "Security Testing",
      "VAPT Testing",
    ],
  },
  {
    title: "API Development & Integration",
    items: [
      "Microservice",
      "AI & ML",
      "Data Warehousing",
      "Serverless API",
      "Payment Gateway Integration",
      "Web Socket",
      "RPC",
    ],
  },
  {
    title: "Data Engineering & BI",
    items: [
      "Data Analytics and Visualization",
      "Data lakes and Data warehouses",
      "Power BI",
      "Data Pipeline",
      "Cost Optimization",
      "Data Modeling",
    ],
  },
];

const Services = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-4">Our Services</h2>
          <p className="text-neutral-600 max-w-2xl ml-0">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: serviceIndex * 0.1 }}
              className="bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-neutral-600 text-sm"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 