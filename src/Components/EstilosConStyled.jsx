import React,{Component} from "react";
import styled,{keyframes} from 'styled-components';
import './variables.css'

class EstilosConStyled extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        const fondoTexto={
            color:'yellow'
        }
        //
        const animaTexto=keyframes`
            from {
                color:blue;
            }
            to {
                color:red;
            }
        `
        // 
        const Title = styled.h1`
        color:green;
        font-size: 20px;
        text-align:center;
        background-color: ${fondoTexto.color};
        
        &:hover{
            color:orangered;
        }

        @media(min-width:800px){
            color:transparent;
        }

        animation:${animaTexto} 2s linear infinite;
        `
        //
        const Cabecera = styled.header`
        height:var(--altoHeader);
        background-color:var(--colorHeader);
        width:var(--anchoHeader);
        `
        return ( 
        <>
        <Cabecera>
            <Title>
                We are in StyledComponent!
            </Title>
        </Cabecera>
        </>
        );
    }
}
 
export default EstilosConStyled;