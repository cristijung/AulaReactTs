import { Link } from 'react-router-dom';

interface MenuPaiProps {
    children: React.ReactNode;
    to: string;    
}

export default function MenuPai({ children, to}: MenuPaiProps): JSX.Element {
    return(
        <>
        <Link to={to}>
            {children}
        </Link>
        </>
    )
}