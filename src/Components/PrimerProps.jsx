import React,{Component} from "react";

class PrimerProps extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <>
                <h1>Hola desde Primer Props</h1>
                <h2>Me he comido: {this.props.verduras}</h2>
            </>
         );
    }
}
 
export default PrimerProps;