import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: any) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "32px",
        height: "32px",
        borderRadius: "16px",
        backgroundColor: "white",
        pointerEvents: "none",
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        zIndex: 9999,
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CustomCursor;
