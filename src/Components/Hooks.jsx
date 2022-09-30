import React,{useState} from 'react'
import { useEffect } from 'react'

const Hooks = () => {
    const[color,setColor]=useState('yellow') // color == 'yellow'
    const[contador,setContador]=useState(0)

    useEffect(()=>{
        let intervalo=setInterval(()=>{setContador(contador + 1)},1000)
        return()=>{
            clearInterval(intervalo) // Limpiar intervalo
        }
    },[contador]) // Dependencia que va a cambiar

    const fondo = {
        width: '100%',
        height:'1000px',
        backgroundColor:color
    }

    const cambioColor=()=>{
        if(color==='yellow'){
            setColor('orangered')
        } else {
            setColor('yellow')
        }
        
    }

  return (
      <>
        <div style={fondo} className='container'>
        <button onClick={cambioColor}>Cambio color</button>
        <h1>Contador: {contador}</h1>
        </div>    
        
      </>
  )
}

export default Hooks