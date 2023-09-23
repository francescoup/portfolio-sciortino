import React from "react";
import { Links } from "../components/data/Link";

export default function Menu({ liClass, ulClass }) {
  return (
    <div className="max-sm:hidden md:hidden lg:block  ">
      <ul className={ulClass}>
        {Links.map((link) => {
          return (
            <li className={liClass} key={link.title}>
              <a href={link.link}> {link.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
