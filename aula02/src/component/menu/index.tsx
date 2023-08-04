import { Link } from 'react-router-dom';

export default function Menu() {
    return(
        <>
            <Link to='/'>Home</Link>
            <Link to='/galeria'> | Galeria</Link>
            <Link to='/texto'> | Texto</Link>
        </>
    )
}