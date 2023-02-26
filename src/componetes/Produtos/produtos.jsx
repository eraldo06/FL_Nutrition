
import { Link } from 'react-router-dom';
import api from '../../apiP';


const Prudutos = () => {
    return (
        <>
            <h1 className='h1'>Produtos</h1>
            <div className="container">
                {api.map((res) => {
                    return (
                        <div className="cliente">
                            <h2>{res.nomeProduto}</h2>
                            <p>{res.email}</p>
                            <p>{res.telefone}</p>
                            <p>{res.empresa}</p>
                            <div className="input">
                                <Link to={`/detalhes/${res.id}`}><input type="submit" value="Ver Produto" /></Link>
                            </div>
                        </div>

                    )
                })}
            </div>
        </>
    )
}


export default Prudutos;