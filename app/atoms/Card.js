import React from "react";
import { Benefit } from "../components/data/Benefit";

const Card = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-sm:grid-cols-1">
      {Benefit.map((card, i) => {
        return (
          <div
            className="bg-white first:text-left first:px-0 first:bg-transparent shadow first:shadow-none p-12"
            key={i}
          >
            <h3 className="text-2xl font-mont  mb-16">{card.title}</h3>
            <h2 className="text-xs font-mont text-red-800 mb-4">
              {card.subTitle}
            </h2>
            <p className="font-mont">{card.text} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
