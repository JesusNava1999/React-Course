import React from "react";
import Componente1 from "./Componente1.jsx";
import Componente2 from "./Componente2.jsx";
import Componente3 from "./Componente3.jsx";
import { BrowserRouter, Route, Link, Switch, NavLink, Redirect } from "react-router-dom";
import RutasDinamicas from "./RutasDinamicas.jsx";
import "./Padre.css";

const Padre = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Route path="/" exact component={Componente1}></Route>
            <Route path="/pagina2" sensitive component={Componente2}></Route>
            <Route path="/pagina3" component={Componente3}></Route>
            <Route path="/pagina4" component={()=><h2>Estamos en Componente 4</h2>}></Route> */}
        <Route exact path="/">
          <Componente1 />
        </Route>
        <Route path="/pagina2">
          <Componente2 />
        </Route>
        <Route path="/pagina3">
          <Componente3 />
        </Route>

        <Route path="/*">
            <Redirect to="/"/>
        </Route>

        <Route path="/users/:id" component={RutasDinamicas} />
      </BrowserRouter>
    </>
  );
};

export default Padre;
