import React from 'react'
import {Link, NavLink} from "react-router-dom";
import './Padre.css';

const Componente2 = () => {
  return (
      <>
      <h1>Componente 2</h1>
      <NavLink activeStyle={{ color: "red" }} to="/">
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
  )
}

export default Componente2