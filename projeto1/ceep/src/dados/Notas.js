export default class Notas {

    constructor() {
        this.notas = [];
    }

    addNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
    }

    apagarNotas(index) {
        this.notas.splice(index, 1);
    }
}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;

    }
}