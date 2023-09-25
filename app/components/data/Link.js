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
        <FaFacebookSquare />
        <FaInstagram />
      </div>
    ),
    show: true,
  },
];
