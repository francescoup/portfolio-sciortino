import React from "react";
import { Links } from "../components/data/Link";

export default function Menu({ menuClass, liClass, ulClass }) {
  return (
    <div className={menuClass}>
      <ul className={ulClass}>
        {Links.map((link) => {
          return (
            <li className={!link.show ? liClass : "hidden"} key={link.title}>
              <a href={link.link}> {link.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
