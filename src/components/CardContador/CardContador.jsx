import React from "react";
import './CardContador.css';
import BotonSuma from "../BotonSuma/BotonSuma";

function CardContador({onClickSumar}){

    return (
        <div className="cardContador">
            <h2>Contador de Clics</h2>
            <BotonSuma onClick={onClickSumar} text="Sumar Clic"/>

        </div>
    )
}

export default CardContador;