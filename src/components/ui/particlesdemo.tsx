"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "./particles";

export function ParticlesDemo() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hiddenbg-background ">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
