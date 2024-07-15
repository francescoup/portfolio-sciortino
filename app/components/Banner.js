import Image from "next/image";
import Button from "../atoms/Button";
import { animate, motion } from "framer-motion";

export default function Banner() {
  return (
    <header className="flex  items-end justify-between max-sm:justify-center max-sm:flex-col max-sm:items-start w-full bg-blue-500/60 h-screen p-4 md:px-12 relative gap-6 md:py-24 ">
      <div className="flex flex-col md:items-start w-[50%] md:h-[50%]  z-10 max-sm:w-full">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="text-slate-50 lg:text-7xl text-4xl font-mont "
        >
          Luca Sciortino
        </motion.h2>
        <motion.h3
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.25 }}
          className="text-slate-50 lg:text-5xl text-4xl font-mont"
        >
          Osteopata{" "}
        </motion.h3>
        <motion.h3
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.25 * 2 }}
          className="text-slate-50 lg:text-5xl text-4xl font-mont"
        >
          Fisioterapista Chinesiologo
        </motion.h3>
      </div>
      <div className="flex items-start justify-between  flex-col w-[50%] md:h-[50%] max-sm:w-full md:pr-24 gap-6 ">
        <motion.h3
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.25 * 3 }}
          className="text-slate-50 font-mont"
        >
          Prova anche tu i benefici della fisioterapia e dell'Osteopatia <br />{" "}
          La salute non è tutto, ma senza salute tutto è niente <br /> "Arthur
          Shopenhauer"
        </motion.h3>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.25 * 4 }}
        >
          <Button classname="bg-white/30 font-mont hover:bg-white transition ease-in-out delay-75 duration-300 px-8 py-4 rounded-full text-sm font-bold text-slate-50 hover:text-blue-500 ">
            <a href="#contatti">Contattaci</a>
          </Button>
        </motion.div>
      </div>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(images/copertina.jpeg)`,
          backgroundPosition: "top",
          WebkitBackgroundSize: "cover",
        }}
      ></div>
    </header>
  );
}
