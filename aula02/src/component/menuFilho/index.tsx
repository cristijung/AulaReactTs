import MenuPai from "../menuPai";


export default function MenuFilho() {
    return(
        <>
        <div>
            <MenuPai to='/'>Início da página </MenuPai>
            <MenuPai to='/galeria'>| Sobre Galeria </MenuPai>
            <MenuPai to='/'>| Posts </MenuPai>
        </div>
        </>

    );
}