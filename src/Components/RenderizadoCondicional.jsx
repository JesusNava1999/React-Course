import React from 'react'
import { useState } from 'react'

const RenderizadoCondicional = () => {
    const[nombre,setNombre]=useState(null)
    const[apellido,setApellido]=useState(null)
    const[correo,setCorreo]=useState(null)
    const[password,setPassword]=useState(null)

    const nombreRegex=/^[a-zA-Z]{3,16}$/
    const apellidoRegex=/^[a-zA-Z]{3,16}$/
    const emailRegex=/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,30}[.][a-zA-Z]{2,4}$/    
    const passwordRegex=/^[a-z0-9_-]{6,18}$/   

    const valorNombre=(nombreValidar)=>{
        if(nombreValidar.trim()){ // trim = no espacios vacios
            if(nombreRegex.test(nombreValidar)){
                setNombre(true)
            } else {
                setNombre(false)
            }
        }
    }
    const valorApellido=(apellidoValidar)=>{
        if(apellidoValidar.trim()){ // trim = no espacios vacios
            if(apellidoRegex.test(apellidoValidar)){
                setApellido(true)
            } else {
                setApellido(false)
            }
        }
    }
    const valorEmail=(emailValidar)=>{
        if(emailValidar.trim()){ // trim = no espacios vacios
            if(emailRegex.test(emailValidar)){
                setCorreo(true)
            } else {
                setCorreo(false)
            }

        }
    }
    const valorPassword=(passwordValidar)=>{
        if(passwordValidar.trim()){ // trim = no espacios vacios
            if(passwordRegex.test(passwordValidar)){
                setPassword(true)
            } else {
                setPassword(false)
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
            {nombre===false ? <h4>Escribe correctamente el campo</h4> : null}
            <input type='text' onChange={e=>valorNombre(e.target.value)}/>
            <h3>Escribe Apellido</h3>
            {apellido===false ? <h4>Escribe correctamente el campo</h4> : null}
            <input type='text' onChange={e=>valorApellido(e.target.value)}/>
            <h3>Escribe Email</h3>
            {correo===false ? <h4>Escribe correctamente el campo</h4> : null}
            <input type='email' onChange={e=>valorEmail(e.target.value)}/>
            <h3>Escribe Password</h3>
            {password===false ? <h4>Escribe correctamente el campo</h4> : null}
            <input type='password' onChange={e=>valorPassword(e.target.value)}/>
            <br/>
            <input type='submit'/>
        </form>
      </>
  )
}

export default RenderizadoCondicional