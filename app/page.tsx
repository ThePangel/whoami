"use client";

import NameCard from "@/components/nameCard";
import InfoCard from "@/components/infoCard";
import Cube from "@/components/rubiksCube";
import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { WheelEvent } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.2], ["-25vw", "0vw"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [cubeRot, setCubeRot] = useState<number>(0);
  const handleCubeRot = (e: WheelEvent<HTMLDivElement>) => {
    console.log(e.deltaY);
    console.log(scrollYProgress.get());
    console.log(cubeRot);
    if (scrollYProgress.get() == 1 && e.deltaY > 0 && cubeRot < 90) {
      setCubeRot(22.5 + cubeRot);
      console.log(e.deltaY);
    } else if (
      scrollYProgress.get() == 1 &&
      scrollYProgress.get() >= 0.5 &&
      e.deltaY < 0 &&
      cubeRot > 0
    ) {
      setCubeRot(cubeRot - 22.5);
    }
    if (cubeRot == 90) {
      document.body.style.overflow = "hidden";
    } else if (cubeRot == 0) {
      document.body.style.overflow = "";
    }
  };

  return (
    <div
      onWheel={(e) => handleCubeRot(e)}
      className="relative min-h-screen flex flex-col items-center justify-center font-sans overflow-hidden"
    >
      <main className="w-full">
        <div className="relative w-full min-h-screen flex items-center justify-center lg:py-0 px-4">
          <div className="flex flex-col items-center justify-center gap-3 lg:hidden">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ y: -30 }}
              transition={{
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
                duration: 1,
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              style={{ x }}
            >
              <NameCard />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                opacity: { delay: 0.2, duration: 1 },
                duration: 1,
              }}
              style={{ opacity }}
              className="absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-1/2"
            >
              <InfoCard />
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 bg-black/50 z-0 blur-2xl" />
      </main>
      <main className="w-screen h-screen content-center justify-items-center object-center">
        <div className="">
          <Cube cubeRot={cubeRot} />
        </div>
      </main>
      <video
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
