import React, { Component } from 'react';
import './estilo.css'

class ListaDeCategorias extends Component {

    _handleEventoInput(e) {
        if(e.key == "Enter"){

        }
    }


    render() { 
        return (
            <section>
                <ul className="categorias">
                    <li>Categoria</li>
                    <li>Categoria</li>
                    <li>Categoria</li>
                    <li>Categoria</li>
                    <li><input type="text" name="" id="" placeholder="Adicionar categoria..." onKeyUp={this._handleEventoInput.bind(this)} /></li>
                </ul>
    

            </section>
        );
    }
}
 
export default ListaDeCategorias;