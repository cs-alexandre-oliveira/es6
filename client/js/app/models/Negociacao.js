class Negociacao {
    /* Quando utilizado o Underline a propriedade fica exclusiva para acesso da Classe */
    constructor(data, quantidade, valor) {
        
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }
    /* Quando uma Function é chamada dentro de uma Classe ela é chamada de Método*/
    get volume() {
        
        return this._quantidade * this._valor;
    }
    /* validação com New Date bloqueia a data de receber valores externos*/
    get data() {
        
        return new Date(this._data.getTime());
    }
    
    get quantidade() {
        
        return this._quantidade;
    }
    
    get valor() {
        
        return this._valor;
    }
}