import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth < 768) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const projectHover = target.closest('[data-cursor="project"]');
      const buttonHover = target.closest('button') || target.closest('a');

      if (projectHover) {
        setIsHovering(true);
        setHoverText("VIEW PROJECT ↗");
      } else if (buttonHover) {
        setIsHovering(true);
        setHoverText("");
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none flex items-center justify-center mix-blend-difference"
      animate={{
        x: mousePosition.x - (isHovering && hoverText ? 48 : 8),
        y: mousePosition.y - (isHovering && hoverText ? 48 : 8),
        width: isHovering && hoverText ? 96 : isHovering ? 48 : 16,
        height: isHovering && hoverText ? 96 : isHovering ? 48 : 16,
        backgroundColor: "white",
        borderRadius: "50%",
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {hoverText && (
        <span className="text-black text-[10px] font-bold tracking-wider text-center px-2">
          {hoverText}
        </span>
      )}
    </motion.div>
  );
};

export default CustomCursor;
