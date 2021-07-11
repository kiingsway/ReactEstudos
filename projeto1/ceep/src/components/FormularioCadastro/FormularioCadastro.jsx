import React, { Component } from "react";
import './estilo.css'

class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = '';
    this.nota = '';
  }

  _handleMudancaTitulo(ev) {
    ev.stopPropagation();
    
    this.titulo = ev.target.value;
  }

  _handleMudancaNota(ev) {
    ev.stopPropagation();

    this.nota = ev.target.value;
  }

  _criarNota(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    this.props.criarNota(this.titulo, this.nota);
  }


  render() {
    return (
      <form
        className="container"
        onSubmit={this._criarNota.bind(this)}>

        <input type="text" placeholder="Título" className="txtTitulo" onChange={this._handleMudancaTitulo.bind(this)} />
        <textarea placeholder="Escreva sua nota..." className="formControl" rows="5" onChange={this._handleMudancaNota.bind(this)} />
        <button type="submit" className="btn btn-primary">Criar Nota</button>
      </form>
    );
  }
}
export default FormularioCadastro;