import React from 'react';
import { motion } from 'framer-motion';

const Approach: React.FC = () => {
  const principles = [
    {
      num: "01",
      title: "USER FIRST",
      desc: "Interfaces should be easy to understand, navigate and use."
    },
    {
      num: "02",
      title: "AI WITH PURPOSE",
      desc: "AI should solve meaningful problems rather than exist only as a feature."
    },
    {
      num: "03",
      title: "DESIGN + ENGINEERING",
      desc: "Great products need both thoughtful design and solid engineering."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-4 mb-24">
          <span className="text-sm font-semibold tracking-widest text-secondary">05 — APPROACH</span>
          <div className="h-[1px] flex-1 max-w-[100px] bg-border"></div>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-none">
            <motion.div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                Good software
              </motion.div>
            </motion.div>
            <motion.div className="overflow-hidden text-secondary">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                should feel simple.
              </motion.div>
            </motion.div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {principles.map((principle, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col items-start border-t border-border pt-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold tracking-widest text-accent bg-accent/10 px-2 py-1 rounded">
                  {principle.num}
                </span>
                <h4 className="text-lg font-bold tracking-tight uppercase">{principle.title}</h4>
              </div>
              <p className="text-lg text-secondary leading-relaxed font-medium">
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
