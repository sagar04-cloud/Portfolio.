import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left Side Content */}
          <div className="w-full lg:w-[65%] flex flex-col items-start z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.7 }}
              className="mb-6 flex items-center gap-4"
            >
              <div className="h-[1px] w-8 bg-foreground"></div>
              <span className="text-sm font-semibold tracking-widest uppercase">
                AI-FOCUSED FULL STACK DEVELOPER
              </span>
            </motion.div>

            <h1 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] font-bold tracking-tighter mb-8">
              <motion.div className="overflow-hidden">
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  BUILDING
                </motion.div>
              </motion.div>
              <motion.div className="overflow-hidden">
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 2.9, ease: [0.22, 1, 0.36, 1] }}
                  className="text-accent"
                >
                  INTELLIGENT
                </motion.div>
              </motion.div>
              <motion.div className="overflow-hidden flex flex-wrap gap-x-4">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 3.0, ease: [0.22, 1, 0.36, 1] }}
                  className="text-accent"
                >
                  DIGITAL
                </motion.span>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 3.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  EXPERIENCES.
                </motion.span>
              </motion.div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.2 }}
              className="text-lg md:text-xl text-secondary max-w-2xl mb-12 leading-relaxed"
            >
              I'm Sagar, a BCA graduate and AI-focused full-stack developer from Bangalore. 
              I build AI-powered web applications, modern digital experiences and cloud-ready products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.3 }}
              className="flex flex-wrap items-center gap-6"
            >
              <a 
                href="#work"
                className="group flex items-center gap-2 bg-foreground text-white px-8 py-4 rounded-full font-medium transition-transform hover:scale-105"
              >
                VIEW MY WORK
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="group flex items-center gap-2 border border-border px-8 py-4 rounded-full font-medium hover:border-foreground transition-all hover:scale-105"
              >
                LET'S CONNECT
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 3.4 }}
              className="mt-16 flex items-center gap-2 text-sm font-medium text-muted"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              BASED IN BANGALORE, INDIA
            </motion.div>
          </div>

          {/* Right Side Image */}
          <motion.div 
            style={{ y, opacity }}
            className="w-full lg:w-[35%] relative mt-12 lg:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 3.2, ease: "easeOut" }}
              className="relative w-full max-w-lg lg:max-w-none aspect-[4/5] rounded-[2.5rem] rounded-tr-[8rem] rounded-bl-[8rem] overflow-hidden border-4 border-white shadow-2xl bg-white"
            >
              {/* Image */}
              <img 
                src="/hero-image.png"
                alt="Intelligent Digital Experiences"
                className="absolute inset-0 w-full h-full object-cover scale-[1.25]"
              />
            </motion.div>

            {/* Floating Elements - Moved outside overflow-hidden to remain fully visible */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3.5 }}
              className="absolute inset-0 pointer-events-none z-10"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-xs font-bold pointer-events-auto"
              >
                AI
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/4 -right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-xs font-bold pointer-events-auto"
              >
                REACT
              </motion.div>
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-1/3 -left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-xs font-bold pointer-events-auto"
              >
                GEMINI
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-16 -right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-xs font-bold pointer-events-auto"
              >
                AWS & DEVOPS
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold text-secondary">SCROLL TO EXPLORE</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-foreground to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
