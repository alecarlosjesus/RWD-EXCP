import React from "react";
import foto from "../../imgs/fotoFIAP.webp"
import logoFiap from "../../imgs/logoFiap.webp"
import CarteirinhaEditavelCss from "../CarteirinhaEditavel/CarteirinhaEditavel.css"

export default function Carteirinha(){
    
    return(

        <div >
            <div className="container" style={CarteirinhaEditavelCss}>
                <div className="foto-carteirinha">
                <img src={foto} alt="Foto pessoal" />
                </div>
                <div className="info-carteirinha">
                    <img src={logoFiap} alt="Logo Fiap" className="logo-fiap"/>
                    <h2><input type="text" className="inputCarteirinha" placeholder="Digite seu nome"/></h2>
                    <h3>TECNOLOGIA EM ANALISE E DESENVOLVIMENTO DE SISTEMAS</h3>
                </div>
            </div>

        </div>

    )

}