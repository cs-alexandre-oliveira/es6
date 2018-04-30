class NegociacaoController {

    constructor() {
        //bind é utilizado para continuar a relação do documento com o Método querySelector
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao);
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();
    }
    //metodo privado na Classe é criado com o underline _nomeMetodo
    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputValor.value = 0.0;
        this._inputQuantidade.value = 1;

        this._inputData.focus();
    }
}

