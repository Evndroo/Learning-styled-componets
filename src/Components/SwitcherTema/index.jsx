import React from 'react';

import themeOn from "../../assets/images/themeOn.svg"
import themeOff from "../../assets/images/themeOff.svg"

import {Icon} from "../UI/index";

const claro = <Icon src={themeOn} alt="Tema claro"/>
const escuro = <Icon src={themeOff} alt="Tema escuro"/>

export default ({tema}) => ( tema ? claro : escuro);