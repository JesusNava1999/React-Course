import React from 'react'

/*
    onFocus(cuando un input esta activado o en foco)
    onBlur(cuando pulsamos fuera de un input que esta en foco)
    onChange(Cuando hay un cambio en el componente o input)
    onClick(Cuando se hace un click en el raton sobre el elemento)
    onDoubleClick(Cuando se hace un click en el raton sobre el elemento(nativamente no funciona en moviles))
    onKeyDown(Cuando pulsamos un botón del teclado )
    onKeyPress(Cuando presionamos una tecla)
    onMouseDown(Cuando presionamos el boton del mouse mouse hacia abajo)
    onMouseOver(Cuando pasamos por encima el ratón )
    onMouseLeave(Cuando salimos del elemento)
*/ 

const Eventos = () => {
    const foco = () => {
        console.log('Estoy en foco')
    }
    const blur = () => {
        console.log('No estoy en foco')
    }
    const change = () => {
        console.log('He cambiado')
    }
    const click = () => {
        console.log('Me has clickeado')
    }
    const dobleClick = () => {
        console.log('Me has clickeado 2 veces')
    }
    const pulsarTecla = () => {
        console.log('Me estas pulsando')
    }

  return (
      <>
        <form>
            <input onFocus={foco} 
            onBlur={blur} 
            onChange={change}  
            onKeyDown={pulsarTecla}           
            type='text'></input>            
        </form>
        <button onClick={click}
        onDoubleClick={dobleClick}
        >Pulsame</button>
      </>
  )
}

export default Eventos