"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { ExternalLink, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
  features: string[];
  status: string;
  link?: string;
  github?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
    >
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium
                ${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {project.status}
              </span>
              <span className="text-neutral-500 text-sm font-medium">
                {project.date}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 
                          text-sm font-medium text-gray-600 hover:bg-gray-100 
                          transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div
              onClick={() => setIsExpanded(!isExpanded)}
              className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-zoom-in group"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/20 
                            transition-colors duration-300 flex items-center justify-center"
              >
                <span
                  className="text-white opacity-0 group-hover:opacity-100 
                               transition-opacity duration-300"
                >
                  Click to expand
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="prose prose-sm">
              <p className="text-gray-600 leading-relaxed tracking-normal">
                {project.description}
              </p>
            </div>

            {/* Features Section */}
            <div className="space-y-4">
              <h6 className="font-semibold text-gray-900">Key Features</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 group">
                    <span className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform duration-200" />
                    <span className="text-sm text-gray-600 tracking-normal group-hover:text-gray-900 transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button href={`/projects/${project.id}`} variant="secondary">
                View Details
              </Button>
              {/* {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )} */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Image Modal */}
      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setIsExpanded(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 md:inset-10 z-50 flex items-center justify-center"
            >
              <div className="relative w-full max-w-5xl rounded-lg overflow-hidden">
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 
                            rounded-full backdrop-blur-sm transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1440}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
