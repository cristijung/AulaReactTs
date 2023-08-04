import ReactHook from "../component/estados/stateHook";
import ReactState from "../component/estados/stateReact";


export default function EstadoContador() {
    return(
        <>
        <h2> Aqui está o contador desenvolvido pelo useState</h2>
        <ReactState />
        <hr />
        <ReactHook />
        </>
    )
}