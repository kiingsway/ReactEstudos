import React, { Component } from 'react';
import './estilo.css'

class CardNota extends Component {
    render() { 
        return (
            <section className="card-nota shadow">
                <header>
                    <h3>{this.props.titulo}</h3>
                </header>
                <p>{this.props.nota}</p>
            </section>
        );
    }
}
 
export default CardNota;