import React from "react";
import foto from "../../imgs/fotoFIAP.webp"
import logoFiap from "../../imgs/logoFiap.webp"
import CarteirinhaCss from "../Carteirinha/Carteirinha.css"

export default function Carteirinha(){
    
    return(

        <div >
            <div className="container" style={CarteirinhaCss}>
                <div className="foto-carteirinha">
                <img src={foto} alt="Foto pessoal" />
                </div>
                <div className="info-carteirinha">
                    <img src={logoFiap} alt="Logo Fiap" className="logo-fiap"/>
                    <h2>LUIZ HENRIQUE PAIOLA VIANA</h2>
                    <h3>TECNOLOGIA EM ANALISE E DESENVOLVIMENTO DE SISTEMAS</h3>
                </div>
            </div>

        </div>

    )

}