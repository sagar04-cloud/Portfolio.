import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-dark-bg text-dark-text relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-semibold tracking-widest text-slate-400">03 — SKILLS</span>
          <div className="h-[1px] flex-1 max-w-[100px] bg-slate-800"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1] sticky top-32">
              <motion.div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  TOOLS
                </motion.div>
              </motion.div>
              <motion.div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="text-slate-500"
                >
                  I USE
                </motion.div>
              </motion.div>
              <motion.div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                >
                  TO BUILD.
                </motion.div>
              </motion.div>
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-16">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="border-t border-slate-800 pt-8"
              >
                <h3 className="text-sm font-bold tracking-widest text-slate-400 mb-8 uppercase">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {skillGroup.items.map((item, itemIdx) => (
                    <motion.span 
                      key={itemIdx}
                      whileHover={{ x: 5, color: "#2D1FBE" }}
                      className="text-2xl md:text-4xl font-semibold tracking-tight transition-colors cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
