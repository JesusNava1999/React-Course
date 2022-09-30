import React from 'react'
import { useState } from 'react'

const Formularios = () => {
    const[nombre,setNombre]=useState(false)
    const[apellido,setApellido]=useState(false)
    const[correo,setCorreo]=useState(false)
    const[password,setPassword]=useState(false)

    const nombreRegex=/^[a-zA-Z]{3,16}$/
    const apellidoRegex=/^[a-zA-Z]{3,16}$/
    const emailRegex=/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,30}[.][a-zA-Z]{2,4}$/    
    const passwordRegex=/^[a-z0-9_-]{6,18}$/   

    const valorNombre=(nombreValidar)=>{
        if(nombreValidar.trim()){ // trim = no espacios vacios
            if(nombreRegex.test(nombreValidar)){
                setNombre(true)
            }
        }
    }
    const valorApellido=(apellidoValidar)=>{
        if(apellidoValidar.trim()){ // trim = no espacios vacios
            if(apellidoRegex.test(apellidoValidar)){
                setApellido(true)
            }
        }
    }
    const valorEmail=(emailValidar)=>{
        if(emailValidar.trim()){ // trim = no espacios vacios
            if(emailRegex.test(emailValidar)){
                setCorreo(true)
            }
        }
    }
    const valorPassword=(passwordValidar)=>{
        if(passwordValidar.trim()){ // trim = no espacios vacios
            if(passwordRegex.test(passwordValidar)){
                setPassword(true)
            }
        }
    }
    
    const enviar = (e) => {
        e.preventDefault()
        if(nombre===true && apellido===true && correo===true && password===true){
            console.log('Datos Validaddos Correctamente')
        } else {
            console.log('Enviar los datos correctamente')
        }
        setTimeout(()=>{window.location.reload()},5000)
    }


  return (
      <>
        <form onSubmit={e=>{enviar(e)}}>
            <h3>Escribe Nombre</h3>
            <input type='text' onChange={e=>valorNombre(e.target.value)}/>
            <h3>Escribe Apellido</h3>
            <input type='text' onChange={e=>valorApellido(e.target.value)}/>
            <h3>Escribe Email</h3>
            <input type='email' onChange={e=>valorEmail(e.target.value)}/>
            <h3>Escribe Password</h3>
            <input type='password' onChange={e=>valorPassword(e.target.value)}/>
            <br/>
            <input type='submit'/>
        </form>
      </>
  )
}

export default Formularios