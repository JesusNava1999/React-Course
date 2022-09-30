import React from 'react'

const IterandoArraysYArraysObjetos = () => {

    const animales = ['pato','loro','gato','perro']
    const personas = [
        {
            id:0,
            nombre:'Karla',
            puesto:'Dueña'
        },
        {
            id:1,
            nombre:'Pedro',
            puesto:'Vigilante'
        },
        {
            id:2,
            nombre:'Oscar',
            puesto:'Gay'
        }
    ]
    
  return (
      <>
        <ul>
            {animales.map(animal=>(
                <li>{animal}</li>
            ))}
        </ul>
        <ul>
            {personas.map(persona=>( // No se le pone llaves {} por que con parentesis () se omite el return
                 <li key={persona.id}>
                Id: {persona.id} <br/>
                Nombre: {persona.nombre} <br/>
                Puesto: {persona.puesto}
                </li>
            ))}
        </ul>
      </>
  )
}

export default IterandoArraysYArraysObjetos