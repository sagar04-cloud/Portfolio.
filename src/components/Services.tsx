import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Cloud, ArrowRight } from 'lucide-react';

const services = [
  {
    id: "01 / WEB & APPLICATIONS",
    title: "Full-Stack Engineering",
    desc: "Developing high-performance reactive web applications, interactive experiences, and fluid design systems built on strict component hierarchies.",
    icon: <Code2 className="w-6 h-6 text-accent" />,
    tech: ["React 19", "TypeScript", "TailwindCSS", "Next.js"],
    color: "from-accent/10 to-transparent",
    border: "group-hover:border-accent/40"
  },
  {
    id: "02 / NEURAL PIPELINES",
    title: "AI & GenAI Solutions",
    desc: "Engineering production-grade LLM applications, enterprise RAG architectures, and autonomous agent workflows designed for true reliability.",
    icon: <Cpu className="w-6 h-6 text-purple-600" />,
    tech: ["LangChain", "OpenAI", "Vector DBs", "Python"],
    color: "from-purple-500/10 to-transparent",
    border: "group-hover:border-purple-500/40"
  },
  {
    id: "03 / INFRASTRUCTURE",
    title: "DevOps & Cloud",
    desc: "Zero-downtime CI/CD deployment pipelines, serverless orchestrations, and secure multi-region cloud topology optimized for scale.",
    icon: <Cloud className="w-6 h-6 text-blue-600" />,
    tech: ["Docker", "AWS", "Kubernetes", "CI/CD"],
    color: "from-blue-500/10 to-transparent",
    border: "group-hover:border-blue-500/40"
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden" id="services">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs tracking-[0.2em] text-secondary uppercase font-semibold">
              // 02. CORE SPECIALIZATIONS
            </span>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-[10px] uppercase tracking-wider text-emerald-700 font-semibold">Accepting Clients</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 max-w-3xl leading-[1.1] text-foreground">
            Architecting Next-Generation <br className="hidden md:block" />
            <span className="text-accent">Digital Intelligence.</span>
          </h2>
          <p className="text-secondary max-w-2xl text-lg md:text-xl leading-relaxed">
            Fusing cutting-edge engineering precision with high-concept design. Delivering scalable, resilient, and visually captivating systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative p-8 md:p-10 rounded-2xl bg-white border border-border shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl ${service.border}`}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="text-[10px] tracking-widest text-secondary uppercase mb-8 font-semibold">
                  {service.id}
                </div>
                
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-secondary text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-background border border-border text-xs font-medium text-secondary">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-foreground">
                  Inspect Stack <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
