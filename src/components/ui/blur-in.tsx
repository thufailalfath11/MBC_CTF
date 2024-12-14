"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}

const BlurIn = ({ word, className, variant, duration = 5 }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  // Define stroke color based on the theme
  // const strokeColor = theme === "dark" ? "white" : "black"; // Change these colors as needed

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        "font-display text-center text-9xl font-bold tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]",
        "text-transparent stroke-transparent", // Make text fill transparent
        "stroke-[1px] md:stroke-[1px]", // Adjust stroke width as needed
        "",
        className
      )}
      style={{
        WebkitTextFillColor: "transparent", // Ensures text fill is transparent
        WebkitTextStrokeColor: "var(--text-stroke-color)", // Sets the stroke color based on the theme
        WebkitTextStrokeWidth: "1px", // Adjust stroke width
      }}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
