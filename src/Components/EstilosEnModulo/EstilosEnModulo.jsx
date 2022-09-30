import React,{Component} from "react";
import styles from './EstilosEnModulo.module.css'

class EstilosEnModulo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (
        <>
            <h1 className={styles.title}>Estamos en Modulos</h1>
        </> 
        );
    }
}
 
export default EstilosEnModulo;