class NegociacaoController {

    adiciona(event) {
        event.preventDefault();

        /*bind é utilizado para continuar a relação do documento com o Método querySelector */
        let $ = document.querySelector.bind(document);
        
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);
    }
}