class NegociacaoService {
  obterNegociacaoDaSemana(cb) {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'negociacoes/semana');

    xhr.onreadystatechange = () => {

      if (xhr.readyState == 4) {
        if (xhr.status == 200) {

          cb(null, JSON.parse(xhr.responseText) //JSON.parse converte o texto em um Array de Objeto JavaScript
            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));// a função 'map.' varrerá o array e criará um novo com modificações.
        } else {
          console.log(xhr.responseText);
          cb('Não foi possivel obter as negociações!!!', null);
        }
      }
    };
    xhr.send();

  }
}