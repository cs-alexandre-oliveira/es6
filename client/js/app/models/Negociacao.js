class Negociacao {

    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
/* Quando uma Function é chamada dentro de uma Classe ela é chamada de Método*/
    obtemVolume() {
        return this.quantidade * this.valor;
    }
}