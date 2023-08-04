import { Box, Button, TextField } from "@mui/material";
import { useState } from 'react';

export default function ReactState(): JSX.Element {
    const [contador, setContador] = useState<number>(0);
    const [nome, setNome] = useState<string>("");

    const incrementarContador = (): void => {
        setContador(contador + 1);
    };

    const decrementarContador = (): void => {
        setContador(contador -1);
    };

    const atualizarNome = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setNome(event.target.value);
    };

    return(
        <>
            <Box>
                <p>Contador: {contador}</p>
                <Button onClick={incrementarContador} variant='contained'>Incrementar</Button>
                <Button onClick={decrementarContador} variant='contained'>Decrementar</Button>
            </Box>

            <Box 
            component='form' sx={{
                "& > :not(style)": { m: 1, width: '80ch'},
            }}
            noValidate
            autoComplete='off'>
                <TextField id='filled' variant='filled' value={nome} onChange={atualizarNome}/>
                <p>Nome: {nome}</p>                
               </Box>

        </>
         );
}

