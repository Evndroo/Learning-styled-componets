import React from 'react';
import alimentacao from "../assets/images/alimentacao.svg"
import outros from "../assets/images/outros.svg"
import saude from "../assets/images/saude.svg"
import transporte from "../assets/images/transporte.svg"
import utilidades from "../assets/images/utilidades.svg"
import { ThemeIcon } from  "./UI"

export default (type) => {
    const Images = {
        Restaurante : <ThemeIcon src={alimentacao} alt="Restaurante"/>, 
        Utilidades : <ThemeIcon src={utilidades} alt="Utilidades"/>, 
        Saude : <ThemeIcon src={saude} alt="Saude"/>, 
        Transporte : <ThemeIcon src={transporte} alt="Transporte"/>, 
        default : <ThemeIcon src={outros} alt="Outros"/>, 
    };

    return Images[type] || Images.default;

};

