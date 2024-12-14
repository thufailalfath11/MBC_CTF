"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "../ui/Image-slider";
import { FlipWords } from "../ui/flip-words";

export function ImagesSliderDemo() {
  const words = ["We're More Than Laboratory", "We're Partners In Your Growth"];
  const images = [
    "/Rectangle 30.png",
    "/Rectangle 31.png",
    "/Rectangle 32.png",
    "/Rectangle 33.png",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50"
      >
        <div className=" flex justify-center items-center px-4 -translate-y-12 cursor-default">
          <div className="text-5xl mx-auto font-medium text-neutral-200">
            <FlipWords words={words} />

            <div className="text-sm font-light text-neutral-300  text-right pt-2 pr-6">
              #GoGoMBC #WeAttack #WeProtect
            </div>
          </div>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
