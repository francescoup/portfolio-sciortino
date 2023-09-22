import Image from "next/image";
import Button from "../atoms/Button";

export default function Banner() {
  return (
    <section className="flex items-end justify-between max-sm:justify-center max-sm:flex-col max-sm:items-start w-full bg-blue-500/50 h-screen p-4 md:px-12 relative gap-6 md:py-24 ">
      <div className="flex md:items-start w-[50%] md:h-[50%]  z-10 max-sm:w-full">
        <h2 className="text-slate-50 md:text-7xl text-4xl font-mont ">
          Luca Sciortino
          <br /> Fisioterapista e <br /> Osteopata.
        </h2>
      </div>
      <div className="flex items-start justify-between  flex-col w-[50%] md:h-[50%] max-sm:w-full md:pr-24 gap-6 ">
        <h3 className="text-slate-50 font-mont">
          Prova anche tu i benefici della fisioterapia e dell'Osteopatia <br />{" "}
          il tuo corpo è l'unico posto in cui devi vivere
        </h3>
        <Button classname="bg-white/30 font-mont hover:bg-white transition ease-in-out delay-75 duration-300 px-8 py-4 rounded-full text-sm font-bold text-slate-50 hover:text-blue-500 ">
          Conosciamoci
        </Button>
      </div>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(images/bg-fisioterapia.jpg)`,
          backgroundPosition: "top",
          WebkitBackgroundSize: "cover",
        }}
      ></div>
    </section>
  );
}
