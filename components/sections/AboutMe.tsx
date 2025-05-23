"use client";
import Button from "@/components/ui/Button";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import { motion } from "framer-motion";

const statsData = [
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 250, suffix: "+", label: "Projects Completed" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Customer Satisfaction" },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            About Me
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Every great project begins with a spark—an idea, a vision, a dream.
            However, transforming that dream into reality demands the perfect
            fusion of strategy, execution, and unwavering passion. This is where
            I step in.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <h3 className="text-4xl lg:text-5xl font-medium mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-neutral-600 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-medium">Vision & Approach</h3>
              <p className="text-lg text-neutral-600">
                Every idea begins as a whisper—fragile, uncertain, and full of
                hope. I’ve always believed that the true magic lies not just in
                building software, but in giving those whispers a voice, a
                shape, and a soul.
              </p>
              <p className="text-lg text-neutral-600">
                Over the years, I’ve met dreamers with brilliant ideas, each
                waiting for someone to believe in them as much as they believed
                in themselves. I saw myself in their passion—in their sleepless
                nights, in their scribbled notebooks, and in their eyes that
                quietly said, “This could change everything.”
              </p>
              <p className="text-lg text-neutral-600">
                My vision is to walk beside those dreamers. To take an idea, no
                matter how raw or rough, and gently guide it into becoming
                something real. Something beautiful. Something that speaks.
              </p>
              <p className="text-lg text-neutral-600">
                At Creuto, and in every journey I take, I don’t just build
                products. I build possibilities. I pour my heart into every line
                of code, every design, and every interaction—because to me,
                every project is a life waiting to begin.
              </p>
              <p className="text-lg text-neutral-600">
                If you have a dream you&apos;re ready to bring to life, I&apos;m
                already listening.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                href="https://calendly.com/niharrout/call"
                className="w-full md:w-auto"
              >
                Get in touch
              </Button>
              <Button
                href="https://www.linkedin.com/in/niharrout"
                variant="secondary"
                className="w-full md:w-auto"
              >
                Know More
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 lg:pl-12 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-medium">My Story</h3>
              <p className="text-lg text-neutral-600">
                I am Nihar Ranjan Rout, the Co-Founder & CEO of Creuto, where we
                breathe life into dreams through innovative product development,
                MVP creation, and mobile app solutions. With unwavering
                dedication, I embark on each project, infusing it with a piece
                of my soul to craft something truly remarkable.
              </p>
              <p className="text-lg text-neutral-600">
                Embarking on each project with me is like starting a new chapter
                in a deeply personal story. I am a dreamer and a doer, pouring
                my heart and soul into every creation that comes to life through
                our work.
              </p>
              <p className="text-lg text-neutral-600">
                Join me on this adventure, where dreams find a home, and visions
                are transformed into unforgettable realities. Welcome to Creuto,
                where the heartbeat of each creation echoes the passion and
                dedication with which it was born.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
