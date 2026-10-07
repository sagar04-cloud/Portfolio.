import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", 
  "Vite", "Node.js", "Express", "Firebase", "Supabase", "Gemini AI", 
  "Google Cloud", "AWS", "Git", "GitHub", "Vercel", "Figma", "UI/UX", "DevOps"
];

const TechMarquee: React.FC = () => {
  return (
    <div className="py-12 bg-white border-y border-border overflow-hidden flex whitespace-nowrap group">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-8 group-hover:[animation-play-state:paused]"
      >
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <React.Fragment key={index}>
            <span className="text-xl md:text-3xl font-bold tracking-tighter text-foreground/20 hover:text-accent transition-colors duration-300">
              {tech}
            </span>
            <span className="text-accent/30 text-xl">✦</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
