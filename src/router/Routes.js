import {Routes as WrapperRoutes, Route, BrowserRouter} from "react-router-dom";
import PagCadastrar from "../paginas/PagCadastrar";
import PagDetalhes from "../paginas/PagDetalhes";
import PagClientes from "../paginas/PagClientes";
import PagProdutos from "../paginas/PagProdutos";
export default function Routes(){
    return(
    <BrowserRouter>
    <WrapperRoutes>
        <Route path="/" element={<PagProdutos/>}/>
         <Route path="/clientes" element={<PagClientes/>}/> 
        <Route path="/cadastrar" element={<PagCadastrar/>} />
        <Route path={`/detalhes/:id`} element={<PagDetalhes/>} />
    </WrapperRoutes>
    </BrowserRouter>
    )
}
