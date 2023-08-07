import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollComp({ children, variants }) {
  const [ref, inView] = useInView({
    triggerOnce: false // Trigger the animation always that the element comes into view
  });

  return (
    <motion.div
      ref={ref}
      animate={inView ? "visible" : "hidden"} // Use inView directly to determine the animation state
      initial="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}