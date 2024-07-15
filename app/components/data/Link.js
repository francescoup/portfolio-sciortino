import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

export const Links = [
  {
    title: "Chi Sono",
    link: "#chi-sono",
  },
  {
    title: "Certificazioni",
    link: "#certificazioni",
  },
  {
    title: "Servizi",
    link: "#servizi",
  },

  {
    title: "Ambiente",
    link: "#ambulatorio",
  },
  {
    title: "Contatti",
    link: "#contatti",
  },
  {
    title: (
      <div className="flex gap-4 mt-8 text-xl text-white">
        <a
          href="https://www.facebook.com/Fisioart.dott.lucasciortino"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com/dott.luca_sciortino" target="_blank">
          {" "}
          <FaInstagram />
        </a>
      </div>
    ),
    show: true,
  },
];
