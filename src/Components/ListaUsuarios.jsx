import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext.jsx";

const ListaUsuarios = () => {
  const { users } = useContext(UserContext);
  console.log(users.data);
  const usuarios = users.data;
  return (
    <>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.id} <br />
            {usuario.name} <br />
            {usuario.phone} <br />
            {usuario.username} <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListaUsuarios;
