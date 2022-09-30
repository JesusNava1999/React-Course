import React from 'react'

const ComunicacionEntreComponentes1 = (props) => { // Herencia Padre a Hijo
    if(props.cambioEstado===true){
        console.log('El estado es verdadero')
    }
    const llama=()=>{
        props.llamaPadre()
    }
    const llamaHermano=()=>{
        props.llamaHermano2()
    }
  return (
      <>
        <button onClick={llama}>Llama Padre</button>
        <button onClick={llamaHermano}>Llama Hermano</button>
      </>
  )
}

export default ComunicacionEntreComponentes1