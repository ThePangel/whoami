"use client";

import { GoPersonFill } from "react-icons/go";
import { RiGitRepositoryFill } from "react-icons/ri";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { motion } from "motion/react";

export default function TopBar() {
  return (
    <div className="fixed top-5 left-0 w-full flex items-center justify-between px-6  z-40">
      <span className="px-4 py-2 bg-yellow-400/10 text-yellow-200 rounded-xl shadow-lg shadow-yellow-500/20 border border-yellow-500/30 backdrop-blur fixed sm:static bottom-4 sm:bottom-auto left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0 z-50">
        ⚠️ WIP — Site under construction ⚒️
      </span>
      <div className="fixed left-1/2 top-5 -translate-x-1/2">
        <div className="flex flex-row p-2.5 h-15 backdrop-blur-lg shadow-lg bg-purple-400/5 rounded-4xl gap-2 mx-auto z-50">
          <motion.div
            variants={{
              initial: { width: "2.5rem" },
              whileHover: { width: "7rem" },
            }}
            initial="initial"
            whileHover="whileHover"
            className="relative w-10 h-10 backdrop-blur-lg shadow-lg bg-purple-400/30 rounded-full mr-2 ml-2 content-center-safe"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                variants={{
                  initial: { x: "0vw" },
                  whileHover: { x: "-1.75vw" },
                }}
                className="text-2xl"
              >
                <BiSolidHomeAlt2 />
              </motion.div>
            </div>
            <motion.span
              variants={{
                initial: { opacity: 0, x: "0vw" },
                whileHover: { opacity: 1, x: "0.75vw" },
              }}
              className="absolute  font-bold text-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
            >
              Start
            </motion.span>
          </motion.div>
          <motion.div
            variants={{
              initial: { width: "2.5rem" },
              whileHover: {
                width: "9rem",
                transition: { duration: 0.28, ease: "easeOut" },
              },
            }}
            initial="initial"
            whileHover="whileHover"
            className="relative w-10 h-10 backdrop-blur-lg shadow-lg bg-purple-400/30 rounded-full mr-2 ml-2 content-center-safe overflow-visible"
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                variants={{
                  initial: { x: "0vw" },
                  whileHover: {
                    x: "-2.5vw",
                    transition: { type: "spring", stiffness: 400, damping: 28 },
                  },
                }}
                className="text-2xl"
              >
                <RiGitRepositoryFill />
              </motion.div>
            </div>
            <motion.span
              variants={{
                initial: { opacity: 0, x: "0vw" },
                whileHover: {
                  opacity: 1,
                  x: "0.75vw",
                  transition: { duration: 0.28, ease: "easeOut" },
                },
              }}
              className="absolute font-bold text-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
            >
              Projects
            </motion.span>
          </motion.div>

          <motion.div
            variants={{
              initial: { width: "2.5rem" },
              whileHover: {
                width: "7.5rem",
                transition: { duration: 0.28, ease: "easeOut" },
              },
            }}
            initial="initial"
            whileHover="whileHover"
            className="relative w-10 h-10 backdrop-blur-lg shadow-lg bg-purple-400/30 rounded-full mr-2 ml-2 content-center-safe overflow-visible"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                variants={{
                  initial: { x: "0vw" },
                  whileHover: {
                    x: "-2vw",
                    transition: { type: "spring", stiffness: 400, damping: 28 },
                  },
                }}
                className="text-2xl"
              >
                <GoPersonFill />
              </motion.div>
            </div>
            <motion.span
              variants={{
                initial: { opacity: 0, x: "0vw" },
                whileHover: {
                  opacity: 1,
                  x: "0.75vw",
                  transition: { duration: 0.28, ease: "easeOut" },
                },
              }}
              className="absolute font-bold text-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
            >
              About
            </motion.span>
          </motion.div>

          <motion.div
            variants={{
              initial: { width: "2.5rem" },
              whileHover: {
                width: "9rem",
                transition: { duration: 0.28, ease: "easeOut" },
              },
            }}
            initial="initial"
            whileHover="whileHover"
            className="relative w-10 h-10 backdrop-blur-lg shadow-lg bg-purple-400/30 rounded-full mr-2 ml-2 content-center-safe overflow-visible"
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                variants={{
                  initial: { x: "0vw" },
                  whileHover: {
                    x: "-2.5vw",
                    transition: { type: "spring", stiffness: 400, damping: 28 },
                  },
                }}
                className="text-2xl"
              >
                <MdEmail />
              </motion.div>
            </div>
            <motion.span
              variants={{
                initial: { opacity: 0, x: "0vw" },
                whileHover: {
                  opacity: 1,
                  x: "0.75vw",
                  transition: { duration: 0.28, ease: "easeOut" },
                },
              }}
              className="absolute font-bold text-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
            >
              Contact
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
