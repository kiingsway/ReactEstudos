import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';
import "./assets/App.css";
import './assets/index.css';
import Categorias from './dados/Categorias';
import Notas from './dados/Notas';

class App extends Component {

    constructor() {
        super();
        this.categorias = new Categorias();
        this.notas = new Notas();
    }

    render() {

        return (
            <section>
                <FormularioCadastro
                categorias={this.categorias.categorias}
                criarNota={this.notas.addNota}
                />
                <main className="conteudo-principal">
                    <ListaDeCategorias
                    addCategoria={this.categorias.addCategoria}
                    categorias={this.categorias.categorias}/>
                    <ListaDeNotas
                        apagarNota={this.notas.deletarNota}
                    notas={this.notas.notas}/>

                </main>
            </section>
        );
    }

}

export default App;