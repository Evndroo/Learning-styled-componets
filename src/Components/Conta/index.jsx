import React, { useState } from "react";
import {Icon, ThemeIcon, Box, Detalhe, Saldo, Button} from "../UI/index.js";
import styled from "styled-components"

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

const IconMargin = styled(Icon)`
  margin-top:2px;
`

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box >
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <ThemeIcon src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe>R$</Detalhe> 1.000.000,00{" "}
          </Saldo>
        ) : null}
      </div>

      <Button onClick={toggleHandler}>
        <IconMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Conta;
