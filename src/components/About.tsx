import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-white relative z-10 rounded-t-[3rem]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-semibold tracking-widest text-secondary">01 — ABOUT</span>
          <div className="h-[1px] flex-1 max-w-[100px] bg-border"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] mb-12">
              <motion.div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  I build digital products
                </motion.div>
              </motion.div>
              <motion.div className="overflow-hidden text-secondary">
                <motion.div
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                >
                  where AI, design and
                </motion.div>
              </motion.div>
              <motion.div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                >
                  engineering meet.
                </motion.div>
              </motion.div>
            </h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-lg md:text-xl text-secondary max-w-3xl leading-relaxed font-medium"
            >
              <p>
                I'm a BCA graduate focused on building practical AI-powered products and modern web experiences. My work combines full-stack development, Generative AI, UI/UX, automation, cloud deployment and DevOps.
              </p>
              <p>
                I enjoy taking ideas from concept to working product—from designing the interface and developing the application to integrating AI and deploying it to the cloud.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 pt-4">
              <div className="border-l border-border pl-6">
                <span className="block text-[10px] font-bold tracking-widest text-muted mb-1">LOCATION</span>
                <span className="block font-medium">Bangalore, India</span>
              </div>
              <div className="border-l border-border pl-6">
                <span className="block text-[10px] font-bold tracking-widest text-muted mb-1">EDUCATION</span>
                <span className="block font-medium">BCA Graduate</span>
                <span className="block text-sm text-secondary mt-1">KLE Society's Degree College, Nagarbhavi</span>
              </div>
              <div className="border-l border-border pl-6">
                <span className="block text-[10px] font-bold tracking-widest text-muted mb-1">FOCUS</span>
                <span className="block font-medium">AI + Full Stack Development</span>
              </div>
              <div className="border-l border-border pl-6">
                <span className="block text-[10px] font-bold tracking-widest text-muted mb-1">EXPERIENCE</span>
                <span className="block font-medium">5 Months AWS DevOps Internship</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
