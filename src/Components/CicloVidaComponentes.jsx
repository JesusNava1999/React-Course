import React, { Component } from 'react'; // irmc

class CicloVidaComponentes extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            nombre:'Jesus',
            evento:null
        }
    }

    cambiarNombre(){
        this.setState({nombre:'Karla'})
    }

    // Montar el componente (Eventos, peticiones http)
    componentDidMount(){
        this.state.evento=window.addEventListener('resize',()=>{
            console.log(window.innerWidth)
        })
    }
    // Actualizar componente (Actualizaciones)
    componentDidUpdate(prevProps, prevState){
        if(prevState===this.state.nombre){
            console.log('Mi estado no ha cambiado')
        } else {
            console.log('Mi estado si ha cambiado, ahora me llamo ',this.state.nombre)
        }
    }
    // Desmontar componente (Limpieza de eventos y timers)
    componentWillUnmount(){
        window.removeEventListener(this.state.evento)
    }
    
    render() { 
        return ( 
        <>
            <h1>{this.state.nombre}</h1>
            <button onClick={this.cambiarNombre.bind(this)}>Cambiar nombre</button>
        </>
        );
    }
}
 
export default CicloVidaComponentes;