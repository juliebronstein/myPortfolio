import React, { useContext, useEffect } from "react";

import ColorModal from "../../layout/Modal";
import { colorTemContext } from "../../context/TemColorContext";
import Ndata from "./Ndata";

export const Navbar = () => {
  const { colors} = useContext(colorTemContext);

  return (
    <nav
      className={`${colors.primaryColor}  d-flex flex-row justify-content-around`}
    >
      <div className={`name`} >
        Marya <span className={`${colors.primaryColor+"c"}`} >Chibour</span>
      </div>
      <ul className="nav__menu d-none d-none d-lg-flex">
        {Ndata.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
      <ColorModal />
    </nav>


  );
};
