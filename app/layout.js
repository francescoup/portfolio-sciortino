import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luca Sciortino, Fisioterapista e Osteopata ad Agrigento",
  description:
    "Fisioterapista e Osteopata, riceve ad Agrigento e Alessandria della Rocca",
  keywords: [
    "fisioterapista Agrigento",
    "osteopata Agrigento",
    "Luca Sciortino Fisioterapista",
    "Luca Sciortino Osteopata",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
