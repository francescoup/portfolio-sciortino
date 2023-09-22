"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Features from "./components/Features";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import Products from "./components/Products";
import Contact from "./components/Contact";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar inView={isInView} />
      <Banner />
      <About />
      <section ref={ref}>
        <Features />
        <Products />
        <Contact />
      </section>
    </main>
  );
}
