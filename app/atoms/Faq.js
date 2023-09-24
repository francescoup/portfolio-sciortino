import React, { useState } from "react";
import { Services } from "../components/data/Services";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ i, item, open, setOpen }) => {
  const isOpen = i === open;
  

  return (
    <>
      <div className="w-full border-t last:border-b py-12">
        <div className="flex justify-between items-center">
          <span className="cursor-pointer text-xl font-mont text-slate-800"  onClick={() => setOpen(isOpen ? false : i)}>{item.title}</span>
          <span className="cursor-pointer text-3xl font-mont font-thin" onClick={() => setOpen(isOpen ? false : i)}>{isOpen ? '-': '+'}</span>
        </div>
        <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="i"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div>
              <p className="text-slate-600 font-mont text-sm mt-8">{item.text}</p>
              
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      </div>
    </>
  );
};

export const Faq = () => {
  const [open, setOpen] = useState(null);
  return (
    <>
      {Services.map((item, i) => {
        return <Accordion key={i} i={i} item={...item} open={open} setOpen={setOpen} />;
      })}
    </>
    
    
  );
};
