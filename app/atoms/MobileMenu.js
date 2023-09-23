import { motion } from "framer-motion";
import { Links } from "../components/data/Link";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import Menu from "./Menu";
import React, { useState } from "react";
const MobileMenu = ({ open, setopen }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  console.log(mobileNavOpen);
  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-50%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      x: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      x: "100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      x: "0%",
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const fadeInStart = { opacity: 0 };
  const fadeInEnd = { opacity: 1 };
  const fadeInTransition = { duration: 1 };

  return (
    <motion.div
      variants={mobileMenuVariant}
      initial="closed"
      animate={open ? "opened" : "closed"}
      className="top-0 fixed min-h-screen w-screen bg-slate-900 z-50 lg:hidden"
    >
      <div className="flex justify-between py-4 px-8 border-slate-600 border-b">
        <div>
          <h1 className="text-white font-mont font-bold">
            luca<span className="font-thin">sciortino</span>
          </h1>
        </div>

        <div onClick={() => setopen(!open)} className="text-white font-thin">
          X
        </div>
      </div>
      <div className="flex flex-col mt-24 md:mt-12 md:gap-6  gap-24 items-center justify-center">
        <motion.ul
          variants={ulVariant}
          className="flex flex-col items-center gap-2"
        >
          {Links.map((link, i) => {
            return (
              <motion.li
                variants={liVariant}
                key={i}
                className="text-slate-100 font-mont text-3xl"
                onClick={() => setopen(false)}
              >
                <a href={link.link}>{link.title}</a>
              </motion.li>
            );
          })}
        </motion.ul>
        <div>
          <div className="flex gap-4 text-xl text-white">
            <FaFacebookSquare />
            <FaInstagram />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default MobileMenu;
