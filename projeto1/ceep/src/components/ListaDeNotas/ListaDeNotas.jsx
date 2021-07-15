import React, { Component } from 'react';
import CardNota from '../CardNota';
import './estilo.css'

class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="notas-item" key={index}>
              <CardNota
              indice={index}
              apagarNota={this.props.apagarNota}
              titulo={nota.titulo}
              nota={nota.nota}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;