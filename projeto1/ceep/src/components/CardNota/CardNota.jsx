import React, { Component } from 'react';
import './estilo.css'
import {ReactComponent as DeleteSVG} from '../../assets/img/delete.svg'

class CardNota extends Component {

    apagar() {
        const indice = this.props.indice;
        this.props.apagarNota(indice);
    }

    render() { 
        return (
            <section className="card-nota shadow">
                <header className="card-nota-cabecalho">
                    <h3 class="cabecalho">{this.props.titulo}</h3>
                    <h4 class="cabecalho">{this.props.categoria}</h4>
                    <DeleteSVG onClick={this.apagar.bind(this)}/>
                </header>
                <p>{this.props.nota}</p>
            </section>
        );
    }
}
 
export default CardNota;