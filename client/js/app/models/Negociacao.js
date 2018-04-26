class Negociacao {
  /* Quando utilizado o Underline a propriedade fica exclusiva para acesso da Classe */
  constructor(data, quantidade, valor) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }
  /* Quando uma Function é chamada dentro de uma Classe ela é chamada de Método*/
  getVolume() {
    return this._quantidade * this._valor;
  }

  getData() {
    return this._data;
  }

  getQuantidade() {
    return this._quantidade;
  }

  getValor() {
    return this._valor;
  }
}