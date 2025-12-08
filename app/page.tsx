"use client";

import { useEffect, useRef } from "react";
import NameCard from "@/components/nameCard";
import InfoCard from "@/components/infoCard";
import { motion } from "motion/react";
import { useRouter } from 'next/router';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
   const router = useRouter();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);
  return (
    <div className="relative min-h-screen flex items-center justify-center font-sans">
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: -500 }}
          transition={{
            delay: 2,
            duration: 1,
          }}
          className="absolute z-20"
        >
          <NameCard />
        </motion.div>

        <motion.div
          initial={{ opacity:0, x: 0 }}
          animate={{ opacity:1, x: 500 }}
          transition={{
            delay: 2,
            duration: 1,
          }}
          className="absolute z-10"
        >
          <InfoCard />
        </motion.div>
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
        <source src={`${router.basePath}/assets/Moon.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
