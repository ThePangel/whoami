import "../styles/cube.css";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

type CubeProps = {
  cubeRot?: number;
};

export default function Cube({ cubeRot }: CubeProps) {
  const rotMv = useMotionValue(0);
  const cubeRotSmooth = useSpring(rotMv, { stiffness: 60, damping: 18 });

  useEffect(() => {
    rotMv.set(Number(cubeRot));
  }, [cubeRot, rotMv]);

  return (
    <div className="cube-container">
      <motion.div
        initial={{ rotateX: 0 }}
        style={{ rotateX: cubeRotSmooth }}
        className="cube"
      >
        <div className="face front">
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
        </div>
        <div className="face back">
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
        </div>
        <div className="face left">
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
        </div>
        <div className="face right">
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
        </div>
        <div className="face top">
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
        </div>

        <div className="face bottom">
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
          <div className="mini"></div>
        </div>
      </motion.div>
    </div>
  );
}
