import React from "react";
import { Box, Button } from "../UI/index.js";
import { extratoLista } from "../../info";
import Itens from "../Itens/index.jsx";

const Extrato = ()=>{
    return(
        <Box>
            {extratoLista.updates.map((item)=>(
                <Itens key={item.id} type={item.type} from={item.from}  value={item.value} date={item.date}/>
            ))}
            <Button>Ver Mais</Button>
        </Box>
    )
}

export default Extrato;