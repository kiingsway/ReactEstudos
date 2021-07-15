import React, { Component } from 'react';
import './estilo.css'

class ListaDeCategorias extends Component {

    _handleEventoInput(e) {
        if(e.key === "Enter"){
            this.props.addCategoria(e.target.value)

        }
    }


    render() { 
        return (
            <section>
                <ul className="categorias">
                    {this.props.categorias.map((categoria,index) => {
                        return <li key={index}>{categoria}</li>
                    })}
                    <li><input type="text" name="" id="" placeholder="Adicionar categoria..." onKeyUp={this._handleEventoInput.bind(this)} /></li>
                </ul>
    

            </section>
        );
    }
}
 
export default ListaDeCategorias;