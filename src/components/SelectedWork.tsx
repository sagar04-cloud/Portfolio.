import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-semibold tracking-widest text-secondary">03 — SELECTED WORK</span>
          <div className="h-[1px] flex-1 max-w-[100px] bg-border"></div>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            <motion.div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                Things I've built.
              </motion.div>
            </motion.div>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-secondary max-w-2xl"
          >
            AI-powered products, full-stack applications and digital experiences built from idea to deployment.
          </motion.p>
        </div>

        <div className="flex flex-col gap-32">
          <div className="grid grid-cols-1 gap-32">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
