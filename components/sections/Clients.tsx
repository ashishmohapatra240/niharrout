"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const clients = [
  {
    name: "KIA",
    logo: "/images/clients/django.svg",
  },
  {
    name: "Forbes",
    logo: "/images/clients/pipefy.svg",
  },
  {
    name: "Kroger",
    logo: "/images/clients/rackspace.svg",
  },
  {
    name: "SHEIN",
    logo: "/images/clients/skoda.svg",
  },
];

const Clients = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium"
          >
            We are a <span className="text-neutral-100 font-bold">trusted</span>{" "}
            technology
            <br />
            <span className="text-neutral-100 font-bold">partner</span> for
            recognized brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600 max-w-2xl"
          >
            We have worked with the top brands in the US, from Alaska Airlines
            to the one most widely known magazine- Forbes, in our 10 years in
            business. You are in good hands!
          </motion.p>
        </div>

        <div className="mb-8">
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={false}
            className="py-4"
          >
            {clients.slice(0, 6).map((client) => (
              <div
                key={client.name}
                className="mx-8 relative h-12 w-32 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>

        <div>
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={false}
            direction="right"
            className="py-4"
          >
            {clients.slice(6).map((client) => (
              <div
                key={client.name}
                className="mx-8 relative h-12 w-32 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Clients;
