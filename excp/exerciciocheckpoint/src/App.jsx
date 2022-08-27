import React from "react";
import Semaforo from './Components/Semaforo/semaforo'
import ListaDeCarros from './Components/ListaCarros/ListaDeCarros'
import Carteirinha from './Components/Carteirinha/Carteirinha'
import CarteirinhaEditavel from './Components/CarteirinhaEditavel/CarteirinhaEditavel'

export default function App(){
    return(
        <div>
            <h1>RM96124 - LUIZ HENRIQUE PAIOLA VIANA</h1>
            <Semaforo/>
            <ListaDeCarros/>
            <Carteirinha/>
            <CarteirinhaEditavel/>
        </div>
    )
}