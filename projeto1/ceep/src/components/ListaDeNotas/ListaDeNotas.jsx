import React, { Component } from 'react';
import CardNota from '../CardNota';
import './estilo.css'

class ListaDeNotas extends Component {

  render() {
    return (
      <ul>
        {this.props.notas.map((nota, index) => {
          return (
            <li className="" key={index}>
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