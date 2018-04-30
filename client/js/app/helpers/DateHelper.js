class DateHelper {

  constructor() {
    throw new Error('DateHelper não pode ser instanciada!');
  }

  static dataParaTexto(data) {
    // utilizando template String
    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
  }

// static é um método que pertencem a definição da classe evitando criar instancias
  static textoParaData(texto) {
    //Expressão Regular para validar o formato de data
    if(!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw new Error('Formato deve estar diferente de YYYY/MM/DD!');

    //spread operator (...) é usado para apontar que o primeiro elemento do array é o primeiro parametro passado para a function
    return new Date(...texto.split('-').map((item, indice) => item - indice % 2)); //quando usar arrow function e tiver somente uma linha não necessita de (function, {} e return)
  }

}