"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";

export default function NameCard() {
  return (
    <div className="flex flex-col items-center justify-center w-175 mx-auto px-4">
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          scale: { type: "spring", visualDuration: 0.7, bounce: 0.2 },
        }}
        className="rounded-3xl sm:rounded-4xl w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
        src={"https://avatars.githubusercontent.com/u/74447121?v=4"}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
        className="pt-3 sm:pt-5 text-center"
      >
        <span className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] z-10 mr-2 sm:mr-4">
          Sup, I’m{" "}
        </span>
        <span className="font-medium text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-purple-400 tracking-wide drop-shadow-[0_0_8px_rgba(147,51,234,0.9)]">
          <Typewriter
            words={["ThePangel", "Ángel"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </motion.div>
    </div>
  );
}
