import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: any;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Determine layout based on title or index
  const isQRAttend = project.title.includes('QR Attend');
  const isChic = project.title.includes('ChicChariot');

  let layoutClass = "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center";
  let imageClass = "aspect-video";
  
  if (isQRAttend) {
    layoutClass = "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center";
    imageClass = "aspect-[3/4]";
  } else if (isChic) {
    layoutClass = "flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center";
    imageClass = "aspect-video";
  }

  // Text ordering
  const textOrder = index % 2 !== 0 && !isQRAttend ? "lg:order-2" : "";
  const imgOrder = index % 2 !== 0 && !isQRAttend ? "lg:order-1" : "";
  
  const textColSpan = isQRAttend ? "lg:col-span-7" : "";
  const imgColSpan = isQRAttend ? "lg:col-span-5" : "";

  return (
    <div className={`w-full ${layoutClass}`}>
      <div className={`flex flex-col justify-center ${textOrder} ${textColSpan}`}>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-bold tracking-widest uppercase text-secondary">
            {String(index + 1).padStart(2, '0')} / {project.category}
          </span>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        
        {project.subtitle && (
          <p className="text-lg text-secondary font-medium mb-4">{project.subtitle}</p>
        )}

        <p className="text-secondary leading-relaxed mb-8 max-w-xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(0, 4).map((tech: string, i: number) => (
            <span key={i} className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div>
          <a 
            href={project.liveUrl !== '#' ? project.liveUrl : project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-bold hover:text-accent transition-colors"
          >
            EXPLORE PROJECT
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`relative ${imgOrder} ${imgColSpan} w-full`}
      >
        <a 
          href={project.liveUrl !== '#' ? project.liveUrl : project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="project"
          className={`block group relative w-full bg-slate-100 rounded-xl overflow-hidden shadow-xl ${imageClass}`}
        >
          {/* Mockup Frame */}
          {isQRAttend ? (
            <div className="absolute inset-x-8 inset-y-12 bg-white rounded-3xl border-8 border-slate-800 shadow-2xl flex flex-col group-hover:scale-[1.04] group-hover:-translate-y-2 transition-all duration-500 ease-out">
              <div className="w-full h-6 flex justify-center pt-2">
                <div className="w-1/3 h-1.5 bg-slate-800 rounded-full"></div>
              </div>
              <div className="flex-1 bg-slate-50 flex items-center justify-center p-6">
                <div className="w-32 h-32 border-4 border-slate-200 border-dashed rounded-lg flex items-center justify-center text-slate-400 font-bold text-sm">QR Code</div>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 group-hover:scale-[1.04] transition-transform duration-700 ease-out">
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover object-left-top" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <span className="text-secondary font-medium tracking-widest opacity-50">PROJECT VISUAL</span>
                </div>
              )}
            </div>
          )}

          <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[1px]"></div>
        </a>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
