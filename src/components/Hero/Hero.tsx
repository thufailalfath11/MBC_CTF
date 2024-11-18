"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";
import { BlurInDemo } from "./text";
import { Subtext } from "./subtext";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground
      className="max-w-screen mx-auto pb-40" // Ensure full width and hide horizontal overflow
      containerClassName="your-container-class" // Replace with your desired class
      colors={[
        "#d93433",
        "#1e3f74",
        "#ffffff",
        "#d93433",
        "#1e3f74",
        "#3484bf",
      ]}
      waveWidth={50} // Adjust as needed
      backgroundFill="#0a0a0a" // Replace with your desired background color
    >
      <div className="relative z-10 cursor-default">
        <BlurInDemo />
        <Subtext />
      </div>
    </WavyBackground>
  );
}
