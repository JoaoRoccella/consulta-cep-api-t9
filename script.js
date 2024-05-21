function consultaCEP(cep) {

    cep = cep.replace(/\D/g, '');  // expressão regular -> regex

    const requisicao = new Request(`https://viacep.com.br/ws/${cep}/json`, {
        "method": "GET",
        "headers": {
            "Content-type": "application/json"
        }
    });
    
    fetch(requisicao)
        .then(resposta => resposta.json())
        .then(resposta => {
            document.querySelector('#logradouro').value = resposta.logradouro;
            document.querySelector('#bairro').value = resposta.bairro;
            document.querySelector('#cidade').value = resposta.localidade;
            document.querySelector('#uf').value = resposta.uf;
        });
}
