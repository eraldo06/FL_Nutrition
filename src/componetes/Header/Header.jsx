import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="shadow-drop-2-bottom">
            <Link to="/clientes">Ver Clientes</Link>
            <Link to="/">Ver Produtos</Link>
            <Link to="/cadastrar">Cadastrar Cliente</Link>
        </header>
    )
}


export default Header;