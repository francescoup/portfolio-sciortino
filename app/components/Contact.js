import Menu from "../atoms/Menu";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import CookieConsent from "react-cookie-consent";

export default function Contact() {
  return (
    <footer id="contatti" className="w-full py-12 px-4 md:px-12  bg-slate-900">
      <div className="relative mb-8">
        <span className=" text-[12px] text-slate-200">CONTATTI</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        <div className="basis-1/2  flex flex-col">
          <Menu
            liClass="md:text-3xl text-2xl text-slate-100 mb-4 font-mont hover:text-slate-400"
            ulClass="flex flex-col"
          />
        </div>
        <div className="md:basis-1/2 flex-col gap-8 md:flex-row flex justify-between text-slate-100 ">
          <div className="flex flex-col content-between gap-6">
            <h3 className="text-xs font-mont">Dove Siamo</h3>
            <div className="text-sm font-mont text-slate-400">
              <p>Via Francesco Crispi 152 </p>
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
      <CookieConsent
        containerClasses="grid grid-col-1"
        buttonClasses="max-sm:w-full"
        buttonText="Ho capito"
        expires={31}
        style={{
          background: "#fff",
          color: "#000",
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
        }}
        buttonStyle={{
          background: "#0f172a",
          color: "#fff",
          borderRadius: "30px",
          fontSize: "12px",
          padding: "8px 16px",
        }}
      >
        Questo sito utilizza i Cookie per migliorare la tua navigazione.
      </CookieConsent>
    </footer>
  );
}
