import React,{useState, useEffect} from 'react'

export const UseCount=()=>{
    const[contador,setContador]=useState(0);

    useEffect(()=>{
        let intervalo=setInterval(()=>{setContador(contador<20 ? contador + 1 : null)},1000);
        return()=>{
            clearInterval(intervalo);

        }
    },[contador])
    return[contador]
}