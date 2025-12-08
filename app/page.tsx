"use client";

import { useEffect, useRef } from "react";
import NameCard from "@/components/nameCard";
import InfoCard from "@/components/infoCard";
import { motion } from "motion/react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center font-sans overflow-hidden">
      <div className="relative w-full min-h-screen flex items-center justify-center py-8 lg:py-0 px-4">
        <div className="flex flex-col items-center justify-center gap-8 lg:hidden">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ y: -30 }}
            transition={{
              delay: 2,
              duration: 1,
            }}
            className="z-20"
          >
            <NameCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 30 }}
            transition={{
              delay: 2,
              duration: 1,
            }}
            className="z-10"
          >
            <InfoCard />
          </motion.div>
        </div>

        <div className="hidden lg:block">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-25vw" }}
            transition={{
              delay: 2,
              duration: 1,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <NameCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: "25vw" }}
            transition={{
              opacity: { delay: 2.2, duration: 1},
              delay: 2,
              duration: 1,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <InfoCard />
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/50 z-0 blur-2xl" />
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={`/assets/Moon.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
