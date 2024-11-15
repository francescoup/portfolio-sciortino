import { useRef } from "react";
import Image from "next/image";
import Button from "../atoms/Button";
import { useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      id="chi-sono"
      className="w-full min-h-screen overflow-hidden  p-4 md:p-12 border"
    >
      <div className="relative mb-8">
        <span className=" text-[12px]">CHI SONO</span>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 ">
        <div
          ref={ref}
          className="col-span-1 md:place-self-start start  lg:sticky top-0"
        >
          <h2
            style={{
              transform: isInView ? "none" : "translateX(20px)",
              opacity: isInView ? "1" : "0",
              transition: "0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="text-slate-800 font-mont text-2xl lg:text-7xl mb-12"
          >
            Luca Sciortino
            <br />
          </h2>
          <h3 className="text-slate-800 font-mont text-2xl md:text-4xl mb-8">
            Osteopata, Fisioterapista e Chinesiologo.
          </h3>
          <h4 className="text-slate-600 mb-12 font-mont">
            D.O. in Osteopatia presso l'EIO di Catania, laurea in Fisioterapia
            alla S.U.N di Napoli, laurea in Scienze Motorie presso l'Università
            di Palermo. Master universitario in Scienze Osteopatiche conseguito
            presso Università Bicocca di Milano. Master in Osteopatia Sportiva
            rilasciato dall' AIMO di Torino.
          </h4>
          <h5 className="text-slate-600 mb-12 font-mont">
            "Cerco sempre di offrire a ciascun paziente un programma
            riabilitativo personalizzato, costruito direttamente sulle
            problematiche del singolo individuo. In tale ottica, vengono
            utilizzati strumenti, attrezzature e/o tecniche di medicina manuale
            e osteopatiche per garantire i migliori risultati possibili. Il
            percorso riabilitativo sarà modellato sulle risposta del paziente,
            assicurando così un percorso di recupero su misura, volto al
            ripristino del proprio stato di salute e alla risoluzione del
            dolore"
          </h5>
        </div>

        <div className="  aspect-[9/10]  w-full relative col-span-1  place-self-end">
          <Image
            src="/images/luca-sciortino-photo.jpg"
            fill
            alt="Luca Sciortino"
            className=" object-fit "
          />
        </div>
      </div>
    </section>
  );
}
