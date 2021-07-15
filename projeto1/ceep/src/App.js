import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

    constructor() {
        super();        
        this.state = { notas: [], categorias: [] };
    }

    criarNota(titulo, nota, categoria) {
        const novaNota = { titulo, nota, categoria };
        const novoArrayNotas = [...this.state.notas, novaNota];
        const novoEstado = { notas: novoArrayNotas };
        
        this.setState(novoEstado);
    }

    addCategoria(nome) {
        const novoArrayCategorias = [...this.state.categorias, nome];
        const novoEstado = {...this.state, categorias:novoArrayCategorias};
        
        this.setState(novoEstado);
    }

    deletarNota(index) {
        let arrayNotas = this.state.notas;
        arrayNotas.splice(index,1);

        this.setState({notas:arrayNotas});
    }

    render() {

        return (
            <section>
                <FormularioCadastro
                categorias={this.state.categorias}
                criarNota={this.criarNota.bind(this)}
                />
                <main className="conteudo-principal">
                    <ListaDeCategorias
                    addCategoria={this.addCategoria.bind(this)}
                    categorias={this.state.categorias}/>
                    <ListaDeNotas
                    apagarNota={this.deletarNota.bind(this)}
                    notas={this.state.notas}/>

                </main>
            </section>
        );
    }

}

export default App;