import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageIntro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Reveal the website after 2.8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-black pointer-events-none"
        >
          {/* Image Reveal */}
          <div className="overflow-hidden relative w-72 h-72 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]">
            <motion.img
              src="/intro-image.png"
              alt="Developer Intro"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>

          {/* Name Reveal */}
          <div className="overflow-hidden -mt-8 md:-mt-16 lg:-mt-20 z-10 relative">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-110%" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[0.3em] md:tracking-[0.4em] text-gray-900 uppercase"
            >
              SAGAR
            </motion.h1>
          </div>

          {/* Minimalist Loading Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 md:mt-12 w-48 md:w-64 h-[3px] bg-black/10 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full bg-[#cc6b2c] origin-left rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageIntro;
