import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Creamos context
export const UserContext = createContext();
// Creamos provider
const UserProvider = (props) => {
  // Creados State del Context
  const [users, setUsers] = useState([]);
  // Ejecutar el pedido a la API
  useEffect(() => {
    const obtenerUsuarios = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      const usuarios = await axios(url); // axios.get(url)
      setUsers(usuarios);
    };
    obtenerUsuarios();
  }, []);
  return (
    <UserContext.Provider value={{ users }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
