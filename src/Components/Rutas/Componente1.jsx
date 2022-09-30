import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Padre.css';

const Componente1 = () => {
  return (
    <>
      <h1>Componente 1</h1>
      <NavLink activeStyle={{ color: "red" }} exact to="/">
        A componente 1
      </NavLink>
      <br />
      <NavLink activeStyle={{ color: "red" }} to="/pagina2">
        A componente 2
      </NavLink>
      <br />
      <NavLink activeClassName="estiloLink" to="/pagina3">A componente 3</NavLink>
      <br />
    </>
  );
};

export default Componente1;
