import React from 'react'

const SpreadOperator = () => {
  const animalesSalvajes=['ciervo ','lobo ','jabali ','vibora ']
  const animalesDomesticos=['perro ','gato ','hamster ','canario ']

  const animales=[...animalesSalvajes, ...animalesDomesticos]
  
  const modelosEuropeas={
      Alemania:'Dina',
      Francia:'Cristine',
      España:'Carmen',
      Venezuela:'Arisita'
  }
  const modelosAmericanas={
      Venezuela:{Venezuela: 'Sonia'},
      Mexico:'Doña Pelos',
      EstadosUnidos:'Gringaman'
  }

  const modelos = {...modelosEuropeas, ...modelosAmericanas}

  console.log(animales)
  console.log(modelos)
    return (
      <>
        
      </>
  )
}

export default SpreadOperator