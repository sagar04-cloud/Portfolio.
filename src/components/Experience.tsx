import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-white relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-4 mb-24">
          <span className="text-sm font-semibold tracking-widest text-secondary">04 — EXPERIENCE</span>
          <div className="h-[1px] flex-1 max-w-[100px] bg-border"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="border-t border-b border-border py-16 lg:py-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-7xl md:text-9xl font-bold tracking-tighter">05</span>
                <span className="text-xl md:text-3xl font-semibold tracking-widest text-secondary">MONTHS</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight">AWS DEVOPS INTERN</h3>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-xl md:text-2xl text-secondary leading-relaxed mb-8 max-w-2xl font-medium">
                "Five months of practical exposure to AWS DevOps, cloud deployment, Git-based workflows and modern deployment practices."
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["AWS", "DevOps", "Git", "GitHub", "Cloud", "Deployment", "CI/CD"].map((tag, idx) => (
                  <span key={idx} className="text-sm font-semibold tracking-wide border border-border px-4 py-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
