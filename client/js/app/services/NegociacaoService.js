class NegociacaoService {

  constructor() {
    this._http = new HttpService();
  }

  obterNegociacaoDaSemana() {

    return new Promise((resolve, reject)  =>  {
      this._http
          .get('negociacoes/semana')
          .then(negociacao  =>  {
            resolve(negociacao.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
          })
          .catch(erro =>  {
            console.log(erro);
            reject('Não foi possivel obter negociações da semana')
          });
    });

  }
  obterNegociacaoDaSemanaAnterior() {

    return new Promise((resolve, reject)  =>  {
      this._http
          .get('negociacoes/anterior')
          .then(negociacao  =>  {
            resolve(negociacao.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
          })
          .catch(erro =>  {
            console.log(erro);
            reject('Não foi possivel obter negociações da semana anterior')
          });
    });

  }
  obterNegociacaoDaSemanaRetrasada() {

    return new Promise((resolve, reject)  =>  {
      this._http
          .get('negociacoes/retrasada')
          .then(negociacao  =>  {
            resolve(negociacao.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
          })
          .catch(erro =>  {
            console.log(erro);
            reject('Não foi possivel obter negociações da semana retrasada')
          });
    });

  }
}