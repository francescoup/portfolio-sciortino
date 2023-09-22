import Image from "next/image";
import Button from "../atoms/Button";

export default function About() {
  return (
    <section className="w-full min-h-screen  p-4 md:p-12 border">
      <div className="relative mb-8">
        <span className=" text-[12px]">CHI SONO</span>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1  ">
        <div className="grid md:sticky md:top-0 place-self-start ">
          <h2 className="text-slate-800 font-mont text-2xl md:text-7xl mb-12">
            Luca Sciortino
            <br /> Fisioterapista e <br /> Osteopata.
          </h2>
          <h3 className="text-slate-600 mb-12 font-mont ">
            D.O. in osteopatia presso l’Eio di Catania, laurea in fisioterapia
            al S.U.N di Napoli, laurea in Scienze Motorie presso l’università di
            Palermo. Master universitario in Scienze Osteopatiche conseguito
            presso Università Bicocca di Milano. Master in Osteopatia Sportiva
            rilasciato dall' Aimo di Torino.
          </h3>
        </div>
        <div className="grid ">
          <div className="bg-white shadow grid w-full md:w-[500px] h-screen relative aspect-auto   place-self-end">
            <Image
              src="/images/sciortino-profile.jpg"
              fill
              sizes="(max-width:768px) 100vw, 200px"
              alt="Luca Sciortino"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
