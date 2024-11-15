import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Dott. Luca Sciortino, Osteopata, Fisioterapista e Chinesiologo - Agrigento e Alessandria della Rocca",
  description:
    "Il dott. Luca Sciortino, Osteopata, Fisioterapista e Chinesiologo, riceve ad Agrigento e Alessandria della Rocca - Cerco sempre di offrire a ciascun paziente un programma riabilitativo personalizzato, costruito direttamente sulle problematiche del singolo individuo",
  keywords: [
    "fisioterapista Agrigento",
    "osteopata Agrigento",
    "Luca Sciortino Fisioterapista",
    "Luca Sciortino Osteopata",
    "Chinesiologo Agrigento",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
