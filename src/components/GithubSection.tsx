import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch } from 'lucide-react';

const GithubSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white relative z-10 border-y border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 flex flex-col items-start max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">Always building.</h2>
            <p className="text-lg md:text-xl text-secondary font-medium leading-relaxed mb-8">
              I like experimenting with AI, modern web technologies and cloud platforms to turn ideas into working products.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/sagar04-cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-foreground text-white px-6 py-3 rounded-full font-bold transition-transform hover:scale-105"
              >
                <GitBranch size={18} />
                EXPLORE MY GITHUB
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <span className="text-sm font-semibold tracking-wide text-secondary">
                @sagar04-cloud
              </span>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-slate-50 border border-border rounded-2xl p-8 shadow-inner flex flex-col items-center justify-center gap-6"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow border border-slate-100">
                <GitBranch size={48} className="text-slate-800" />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold tracking-tight mb-2">GitHub Activity</h4>
                <div className="flex items-center gap-1.5 opacity-60">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-sm bg-accent" style={{ opacity: Math.random() * 0.8 + 0.2 }}></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GithubSection;
