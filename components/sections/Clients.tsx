"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const clients = [
  {
    name: "Škoda",
    date: "Nov, 2024",
    logo: "/images/clients/skoda.svg",
    link: "https://www.skoda-auto.com",
  },
  {
    name: "Django",
    date: "May, 2023",
    logo: "/images/clients/django.svg",
    link: "https://www.djangoproject.com",
  },
  {
    name: "Pipefy.io",
    date: "May, 2023",
    logo: "/images/clients/pipefy.svg",
    link: "https://www.pipefy.com",
  },
  {
    name: "Rackspace",
    date: "May, 2023",
    logo: "/images/clients/rackspace.svg",
    link: "https://www.rackspace.com",
  },
];

const Clients = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-medium mb-16"
        >
          Clients
        </motion.h2>

        <div className="space-y-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="group border-t border-neutral-200 py-8">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-medium group-hover:text-neutral-600 transition-colors">
                        {client.name}
                      </h3>
                      <p className="text-neutral-500">{client.date}</p>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="relative h-8 w-32">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          fill
                          className="object-contain object-left opacity-60 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
