import React, { Component } from 'react';
import './estilo.css'
import {ReactComponent as DeleteSVG} from '../../assets/img/delete.svg'

class CardNota extends Component {
    render() { 
        return (
            <section className="card-nota shadow">
                <header className="card-nota-cabecalho">
                    <h3 class="cabecalho">{this.props.titulo}</h3>
                    <DeleteSVG />
                </header>
                <p>{this.props.nota}</p>
            </section>
        );
    }
}
 
export default CardNota;