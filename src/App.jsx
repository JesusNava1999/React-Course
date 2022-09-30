import React, { useState } from "react";
import logo from "./logo.svg";
// import './App.css';
// import PrimerComponente from './Components/PrimerComponente.jsx';
// import PrimerProps from './Components/PrimerProps.jsx';
// import PrimerEstado from './Components/PrimerEstado.jsx';
// import EstilosTradicionales from './Components/EstilosTradicionales.jsx';
// import EstilosEnLinea from './Components/EstilosEnLinea.jsx';
// import EstilosEnModulo from './Components/EstilosEnModulo';
// import EstilosConStyled from './Components/EstilosConStyled.jsx';
// import Refs from './Components/Refs.jsx';
// import CicloVidaComponentes from './Components/CicloVidaComponentes.jsx';
// import Hooks from './Components/Hooks.jsx';
// import Formularios from './Components/Formularios.jsx';
// import Eventos from './Components/Eventos.jsx';
// import RenderizadoCondicional from './Components/RenderizadoCondicional.jsx';
// import SpreadOperator from './Components/SpreadOperator.jsx';
// import IterandoArraysYArraysObjetos from './Components/IterandoArraysYArraysObjetos.jsx';
// import IterarKeys from './Components/IterarKeys.jsx';
// import Padre from './Components/IterandoComponentes/Padre.jsx'
// import ComunicacionEntreComponentes1 from './Components/ComunicacionEntreComponentes1.jsx';
// import ComunicacionEntreComponentes2 from './Components/ComunicacionEntreComponentes2.jsx';
// import Fetch from './Components/Fetch.jsx';
// import Axios from './Components/Axios.jsx';
// import Padre from "./Components/Rutas/Padre.jsx";
// import {UseCount} from "./Components/hooks/UseCount.jsx";
// import UserProvider from "./Components/Context/UserContext.jsx";
// import ListaUsuarios from "./Components/ListaUsuarios.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import Contador from "./Components/Contador.jsx";

function App() {
  // const[contador] = UseCount(0);
  // const lista = ['Camote ','Chile ','Pepino']
  // const [estado,setEstado]=useState(false)
  // const estadoComponente=()=>{
  //   setEstado(true)
  // }
  // const hijoLlamaPadre=()=>{
  //   console.log('Llamando a padre desde componente hijo')
  // }

  // const llamandoHermano=()=>{
  //   console.log('Llamando Hermano')
  //   setEstado(true)
  // }

  return (
    <>
      {/* <h1>Hola Mundo</h1> */}
      {/* <h2>Hola Mundo 2</h2> */}
      {/* <PrimerComponente/> */}
      {/* <PrimerProps verduras={lista}/> */}
      {/* <PrimerEstado/> */}
      {/* <EstilosTradicionales/> */}
      {/* <EstilosEnLinea/> */}
      {/* <EstilosEnModulo/> */}
      {/* <EstilosConStyled/> */}
      {/* <Refs/> */}
      {/* <CicloVidaComponentes/> */}
      {/* <Hooks/> */}
      {/* <Formularios/> */}
      {/* <Eventos/> */}
      {/* <RenderizadoCondicional/> */}
      {/* <SpreadOperator/> */}
      {/* <IterandoArraysYArraysObjetos/> */}
      {/* <IterarKeys/> */}
      {/* <Padre/> */}
      {/* <ComunicacionEntreComponentes1 llamaHermano2={llamandoHermano} llamaPadre={hijoLlamaPadre} cambioEstado={estado}/>
      <button onClick={estadoComponente}>Pica</button>
      <ComunicacionEntreComponentes2 nuevoEstado={estado}/>       */}
      {/* <Fetch/> */}
      {/* <Axios/> */}
      {/* <Padre /> */}
      {/* <h1>{contador}</h1> */}
      {/* <UserProvider>
        <ListaUsuarios></ListaUsuarios>
      </UserProvider> */}
      <Provider store={store}>
        <Contador />
      </Provider>
    </>
  );
}

export default App;
