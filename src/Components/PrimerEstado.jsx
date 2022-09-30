import React,{Component} from "react";

class PrimerEstado extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'Jesús',
            lastName: 'Nava'
        }
    }

    changeData(){
        if(this.state.name==='Jesús' && this.state.lastName==='Nava'){
            this.setState({name: 'José', lastName: 'Cuellar'})
        } else {
            this.setState({name: 'Jesús', lastName: 'Nava'})
        } 
    }

    render() { 
        return ( 
            <>
                <h3>My name is: {this.state.name} {this.state.lastName}</h3>
                <button onClick={this.changeData.bind(this)}>Try</button>
            </>
         );
    }
}

export default PrimerEstado;