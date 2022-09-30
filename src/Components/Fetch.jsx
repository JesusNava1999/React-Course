import React, { useState, useEffect } from 'react'

const Fetch = () => {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        const cargarUsuarios=async()=>{
            const res=await fetch('https://jsonplaceholder.typicode.com/users')
            const data=await res.json();
            setUsers(data);     
            console.table(data)       
        }
        cargarUsuarios();
    },[])
  return (
      <>
        <ul>
           {users.map(user => (
                <li key={user.id}>
                    Nombre: {user.name}
                    <br/>
                    Nombre de Usuario: {user.username}
                    <br/>
                    Email: {user.email}
                    <br/>
                    Telefono: {user.phone}
                    <br/>
                </li>
           ))}
        </ul>
      </>
  )
}

export default Fetch