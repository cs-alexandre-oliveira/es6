class NegociacaoController {
    
    constructor() {
        //bind é utilizado para continuar a relação do documento com o Método querySelector
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
         
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), 
            new NegociacoesView($('#negociacoesView')), 
            'adiciona', 'esvazia');
       
        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')),
            'texto');       
    }
    
    adiciona(event) {
        
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso'; 
        this._limpaFormulario();   
    }

    importaNegociacoes() {

      let service = new NegociacaoService();

      service.obterNegociacaoDaSemana((err, negociacoes) => {
        if(err)  {
          this._mensagem.texto = err;
          return;
        }

        negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));  //forEach vai percorrer item por item criado no novo array criado pelo 'map.'
        this._mensagem.texto = 'Negociações importadas com S U C E S S O !!!!!! '

      });

    } 
    
    apaga() {
        
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
    }
    
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);    
    }
     //metodo privado na Classe é criado com o underline _nomeMetodo
    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }
}