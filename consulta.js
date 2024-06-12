let pagamentoCartao ='';
pagamentoCartao = document.getElementById('pagamento-cartao');

let dataMarcada = document.getElementById('txtData');
//let form1 = document.getElementById('form1');

let nomeCartao = document.getElementById('nome-cartao');
let numeroCartao = document.getElementById('numero-cartao');
let cvvCartao = document.getElementById('cvv-cartao');

let msgErroMarcar = document.getElementById('msg-erro-marcar');
let msgSucessoMarcar = document.getElementById('msg-sucesso-marcar');

function marcarConsulta(){

    //verefica se foi selecionado um dia
    if (pagamentoCartao.value == undefined){
        msgErroMarcar.setAttribute('style', 'display: block');
        msgErroMarcar.innerHTML = '<strong>Selecione quando você prefere fazer o pagamento';
    } else {
        if (pagamentoCartao.value == 'hoje') {
            verificarDadosCartao()
        }
       if (pagamentoCartao.value == 'diadaconsulta'){
            msgErroMarcar.innerHTML = '';
            msgErroMarcar.setAttribute('style', 'display: none');
            msgSucessoMarcar.setAttribute('style', 'display: block');
            msgSucessoMarcar.innerHTML = '<strong>Consulta marcada com sucesso.';
       }

    }
}

function verificarDadosCartao(){
    if (nomeCartao.value == '' || numeroCartao.value == '' ||  cvvCartao.value == ''){
        msgErroMarcar.setAttribute('style', 'display: block');
        msgErroMarcar.innerHTML = '<strong>Preencha todos os campos corretamente';
        msgSucessoMarcar.innerHTML = '';
        msgSucessoMarcar.setAttribute('style', 'display: none');
    } else {    
        msgErroMarcar.innerHTML = '';
        msgErroMarcar.setAttribute('style', 'display: none');
        msgSucessoMarcar.setAttribute('style', 'display: block');
        msgSucessoMarcar.innerHTML = '<strong>Consulta marcada com sucesso.';
    }
}

function hoje(){
    pagamentoCartao.value = 'hoje'

    dadosCartao();
    msgErroMarcar.innerHTML = '';
    msgErroMarcar.setAttribute('style', 'display: none');
}

function diaConsulta(){
    pagamentoCartao.value = 'diadaconsulta'

    limparDadosCartao();
    msgErroMarcar.innerHTML = '';
    msgErroMarcar.setAttribute('style', 'display: none');

    //preenchendo dados do cartao para nao dar erro
    nomeCartao.value == 'nulo'
    numeroCartao.value == '000'
    cvvCartao.value == '000'
}

function dadosCartao(){
    pagamentoCartao.setAttribute('style', 'display: block');
}

function limparDadosCartao(){
    pagamentoCartao.setAttribute('style', 'display: none');
}
        

