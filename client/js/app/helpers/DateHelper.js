class DateHelper {

  constructor() {
    throw new Error('DateHelper não pode ser instanciada!');
  }

// static é um método que pertencem a definição da classe evitando criar instancias
  static textoParaData(texto) {
    //spread operator (...) é usado para apontar que o primeiro elemento do array é o primeiro parametro passado para a function
    return new Date(...texto.split('-').map((item, indice) => item - indice % 2)); //quando usar arrow function e tiver somente uma linha não necessita de (function, {} e return)
  }

  static dataParaTexto(data) {
    return data.getDate()
      + '/' + (data.getMonth() + 1)
      + '/' + data.getFullYear();
  }
}