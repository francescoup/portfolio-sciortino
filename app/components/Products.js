import Card from "../atoms/Card";
import { Faq } from "../atoms/Faq";
export default function Products() {
  return (
    <section
      id="servizi"
      className="w-full min-h-screen p-4 md:p-12  border bg-white"
    >
      <div className="relative mb-8">
        <span className=" text-[12px]">SERVIZI</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="basis-1/2 md:place-self-start start  lg:sticky top-0">
          <h2 className="text-slate-800 font-mont lg:text-7xl text-4xl mb-12 self-center">
            Scopri tutti
            <br /> i nostri servizi.
          </h2>
        </div>
        <div className="basis-1/2 max-sm:basis-full">
          <Faq />
        </div>
      </div>
    </section>
  );
}
