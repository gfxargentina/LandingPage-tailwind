import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../images/Logo-Taller.png";

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-10 py-5 fixed w-full">
      <div className="w-56">
        <img src={logo} alt="logo servicio electronico yerba buena" />
      </div>
      <nav className="hidden md:block">
        <ul className="flex items-center ">
          <li className="mr-3">Inicio</li>
          <li className="mr-3">Blog</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <div className="md:hidden">
        <FaBars />
      </div>
    </header>
  );
};
