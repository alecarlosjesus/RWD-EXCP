import React from "react";
import DemonstracaoLista from "./DemonstracaoLista";

export default ()=>{

    const listaCarros=['Fusca', 'Mustang', 'Corolla', 'Ferrari 250', 'Aston Martin', 'Ferrari F-40', 'Porche 911', 'Buggati Verion', 'Volksvagem Golf', 'Lamborghini Miura']

    return(
        <DemonstracaoLista>
        <ul>
            {listaCarros.map(carro=><li>{carro}</li>)}
        </ul>
                
        </DemonstracaoLista>
    )
}
