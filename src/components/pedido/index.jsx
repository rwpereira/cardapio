import './style.css';
import api from '../../services/api';
import { useState } from "react";

function Pedido(props){

    const [status, setStatus] = useState(props.status);
    const [visible, setVisible] = useState(true);

    function AlterarStatus(sts){
        api.put(`pedidos/status/${props.id_pedido}`, {
            status: sts 
        })
        .then(function(response) { 
            //console.log('OK');
            setStatus(sts);

            if (sts == "F") {
                setVisible(false);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
    }

    return !visible ? <></> : <div className="d-flex justify-content-between shadow-sm pedido">
        <div>
            <span><b>Pedido #{props.id_pedido}</b></span>
            <span className="badge rouded-pill bg-secondary ms-3">{props.dt_pedido}</span>

            {status == "A" ? <span className="badge rouded-pill bg-danger ms-3">Aguardando</span> : null}
            {status == "P" ? <span className="badge rouded-pill bg-primary ms-3">Em Produção</span> : null}
            {status == "E" ? <span className="badge rouded-pill bg-success ms-3">Saiu Entrega</span> : null}
            {status == "F" ? <span className="badge rouded-pill bg-secondary ms-3">Finalizado</span> : null}
            

            <small className="d-block mt-1 text-secondary">{props.nome} - {props.endereco}</small>

            {
                props.itens.map(function(item) {
                    return <div className="d-inline-block text-center me-4 mt-2" key={item.id_item}>
                        <img src={item.url_foto} className="foto-item" alt="" />
                        <small className="d-block text-secondary">{item.qtd} x</small>
                        <small className="d-block text-secondary">{item.nome}</small>
                    </div>
                })
            }
        </div>

        <div className="d-flex align-items-center me-4">
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Status
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a onClick={(e) => AlterarStatus("A")} className="dropdown-item">Aguardando</a></li>
                    <li><a onClick={(e) => AlterarStatus("P")} className="dropdown-item">Em Produção</a></li>
                    <li><a onClick={(e) => AlterarStatus("E")} className="dropdown-item">Saiu Entrega</a></li>
                    <li><a onClick={(e) => AlterarStatus("F")} className="dropdown-item">Finalizar</a></li>
                </ul>
            </div>
        </div>
    </div>
    
    
}

export default Pedido;