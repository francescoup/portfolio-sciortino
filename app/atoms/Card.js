import React, { useRef } from "react";
import { Benefit } from "../components/data/Benefit";
import { useInView, motion } from "framer-motion";

const Card = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  console.log(isInView);
  return (
    <div
      ref={ref}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-sm:grid-cols-1"
    >
      {Benefit.map((card, i) => {
        return (
          <motion.div
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: "10%", opacity: 0 },
              bg: { background: "red" },
            }}
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.35, ease: "easeInOut", delay: 0.3 * i }}
            className="bg-white first:text-left first:px-0 first:bg-transparent shadow first:shadow-none p-12"
            key={i}
          >
            <h3 className="text-2xl font-mont  mb-16">{card.title}</h3>
            <h2 className="text-xs font-mont text-red-800 mb-4">
              {card.subTitle}
            </h2>
            <p className="font-mont">{card.text} </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Card;
