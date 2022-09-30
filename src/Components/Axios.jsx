import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const cargarUsuarios=async()=>{
            const res=await axios('https://jsonplaceholder.typicode.com/users')
            console.table(res.data)
            setUsers(res.data)
        }
        cargarUsuarios()
    },[])
  return (
      <>    
        <ul>
            {users.map(user=>(
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

export default Axios