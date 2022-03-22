import { useEffect, useState } from "react";
import Header from "../../components/header";
import Pedido from "../../components/pedido";
import api from '../../services/api';

function Pedidos(){

    //const pedidos = [];
    const [pedidos, setPedidos] = useState([]);    

    function ListarPedidos(){
        api.get("pedidos/itens")
        .then(function (response) {
//            console.log(response.data);
            setPedidos(response.data);
        })
        .catch(function (err){
            console.log(err);
        })
    }

    useEffect(function(){
        ListarPedidos();
    }, []);

    return <>
    <Header />

    <div className="container-fluid">

        <div className="m-2 mt-4 d-flex justify-content-between">
            <h2>Pedidos na Fila.</h2>
            <button onClick={ListarPedidos} className="btn btn-lg btn-primary">Atualizar</button>
        </div>   

        <div className="m-2 mt-4">
            {
                pedidos.map(function (item){
                    return <Pedido  key={item.id_pedido}
                                    id_pedido={item.id_pedido}
                                    dt_pedido={item.dt_pedido}
                                    status={item.status}
                                    nome={item.nome}
                                    endereco={item.endereco}
                                    itens={item.itens}
                                    />
                })
            }
        </div> 
        
    </div>
        
    </>
}

export default Pedidos;