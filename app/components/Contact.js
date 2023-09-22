import Menu from "../atoms/Menu";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-12 px-4 md:px-12  border bg-slate-900"
    >
      <div className="relative mb-8">
        <span className=" text-[12px] text-slate-200">CONTATTI</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="basis-1/2  flex flex-col">
          <Menu
            liClass="text-4xl text-slate-100 mb-4 font-mont hover:text-slate-400"
            ulClass="flex flex-col"
          />
        </div>
        <div className="md:basis-1/2 flex-col gap-8 md:flex-row flex justify-between text-slate-100 ">
          <div className="flex flex-col content-between gap-6">
            <h3 className="text-xs font-mont">Dove Siamo</h3>
            <div className="text-sm font-mont text-slate-400">
              <p>Via Francesco 152 </p>
              <p>92100 Agrigento</p>
            </div>
            <div className="text-sm font-mont text-slate-400">
              <p>Via Metello 10 </p>
              <p>92010 Alessandria della Rocca</p>
            </div>
          </div>
          <div className="flex flex-col content-between gap-6">
            <h3 className="text-xs font-mont">Contatti</h3>
            <div className="text-sm font-mont text-slate-400">
              <p>+39 389 7973018 </p>
              <p>sciortinoluca@hotmail.it</p>
            </div>
            <div>
              <div className="flex gap-4 text-xl">
                <FaFacebookSquare />
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
