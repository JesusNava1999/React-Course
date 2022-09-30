import React from 'react'

const Hijo = (props) => { // Props: recibo los parametros del padre
  return (
      <>
        <ul>
            <li>{props.nombreLista}</li>
        </ul>
      </>
  )
}

export default Hijo