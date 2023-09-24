"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Menu from "../atoms/Menu";
import Logo from "../atoms/Logo";
import MobileMenu from "../atoms/MobileMenu";

export default function Navbar({ inView }) {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
      setBgColor(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
          bg: { background: "red" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        id="home"
        className={` ${
          inView ? "bg-[#e8eaeb] text-gray-900" : ""
        } fixed left-0 top-0 flex justify-between items-center w-full transition ease-in-out delay-75 duration-300 px-4  md:px-12 py-4  dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit z-10 `}
      >
        <Logo inview={inView} />

        <Menu
          menuClass="max-sm:hidden md:hidden lg:block"
          liClass={`${
            inView ? "text-gray-900" : "text-white"
          } text-xs  font-bold hover:text-slate-900 font-mont  transition ease-in-out delay-150 duration-300 relative after:bg-red-500 after:absolute after:h-[1px] after:border-slate-50 after:w-0 after:-bottom-2 after:left-0 hover:after:w-1/2 after:transition-all after:duration-300 cursor-pointer`}
          ulClass="flex gap-4 items-center"
        />
        <button
          className={`${
            inView ? "text-gray-900" : "text-white"
          } text-sm  lg:hidden`}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          menu
        </button>
      </motion.nav>
      <MobileMenu open={mobileNavOpen} setopen={setMobileNavOpen} />
    </>
  );
}
