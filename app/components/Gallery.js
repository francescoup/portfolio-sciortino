import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { PhotoLink } from "./data/PhotoLink";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section id="ambulatorio" className="bg-blue-500 p-4 md:p-12">
      <div className="relative mb-8">
        <span className=" text-[12px] text-slate-100">AMBIENTI</span>
      </div>
      <div
        ref={ref}
        className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {PhotoLink.map((photo, i) => {
          return (
            <motion.div
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "10%", opacity: 0 },
                bg: { background: "red" },
              }}
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.35, ease: "easeInOut", delay: 0.3 * i }}
              className="grid col-span-1 overflow-hidden"
              key={i}
            >
              <img
                className="transition ease-in-out shadow-2xl rounded object-cover hover:rotate-3 hover:scale-150"
                src={photo.url}
                alt={photo.title}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
