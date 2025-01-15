"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
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
    >
      <div className="border-t border-neutral-200 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Project Info */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-medium">{project.title}</h3>
              <span className="text-neutral-500 text-sm">{project.date}</span>
            </div>
            <div className="flex gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1 rounded-full border border-neutral-200 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-neutral-600">{project.description}</p>

            <div className="w-40 whitespace-nowrap">
              <Button href={`/projects/${project.id}`} variant="secondary">
                View Details
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="lg:col-span-6">
            <div
              onClick={() => setIsExpanded(!isExpanded)}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
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
                className="fixed inset-0 bg-black/60 z-50"
                onClick={() => setIsExpanded(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-4 md:inset-10 z-50 flex items-center justify-center"
                onClick={() => setIsExpanded(false)}
              >
                <div className="relative w-full max-w-5xl aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
