class NegociacaoController {

    constructor() {
//bind é utilizado para continuar a relação do documento com o Método querySelector
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {
        event.preventDefault();

//console.log(typeof(this._inputData.value)); 
        let data = new Date(
//spread operator (...) é usado para apontar que o primeiro elemento do array é o primeiro parametro passado para a function    
            ...this._inputData.value
                .split('-')
//quando usar arrow function e tiver somente uma linha não necessita de (function, {} e return)
                .map((item, indice) => item - indice % 2)
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);

    }
}

