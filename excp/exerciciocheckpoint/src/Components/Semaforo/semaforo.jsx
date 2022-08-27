import React from "react";
import { useState } from "react";


export default function Semaforo(){

    const [opacidadeVm,setOpacVm]= useState(100);
    const [opacidadeAm,setOpacAm]= useState(0);
    const [opacidadeVr,setOpacVr]= useState(0);
    
    const vermelho={
        color:'#C81818',
        opacity:opacidadeVm
    }
    const amarelo={
        color:'#F1D733',
        opacity:opacidadeAm
    }
    const verde={
        color:'#70BE23',
        opacity:opacidadeVr
    }
    function trocaSinal(){
        if(vermelho.opacity===100 && amarelo.opacity===0 && verde.opacity===0){
           setOpacVm(0)
           setOpacVr(100)
        }
        if(vermelho.opacity===0 && amarelo.opacity===0 && verde.opacity===100){
            setOpacVr(0)
            setOpacAm(100)
        }
        if(vermelho.opacity===0 && amarelo.opacity===100 && verde.opacity===0){
            setOpacAm(0)
            setOpacVm(100)
        }
    }
    return(
        <div>
            <div>
                <h2 style={vermelho}>Pare</h2>
                <h2 style={amarelo}>Atenção</h2>
                <h2 style={verde}>Siga</h2>
                <button onClick={trocaSinal}>Avança</button>
            </div>
        </div>
    )
}