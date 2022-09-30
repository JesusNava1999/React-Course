import React,{Component} from "react";

class EstilosEnLinea extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        let age = 17
        const title = {
            textAling: 'center',
            color: 'white',
            backgroundColor: age>= 18 ? 'blue' : 'red'             
        }

        return (  
            <>
                <h1 style={title}>I´m a Title</h1>    
            </>
        );
    }
}
 
export default EstilosEnLinea;