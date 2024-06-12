var estrelas = document.querySelectorAll('.star-icon');
let areaTexto = document.getElementById('area-texto');
let msgErroAvaliar = document.getElementById('msg-erro-avaliar');
let msgSucessoAvaliar = document.getElementById('msg-sucesso-avaliar');

document.addEventListener('click', function(e){
    var classEstrela = e.target.classList;
    if (!classEstrela.contains('ativo')){
        estrelas.forEach(function(estrela){
            estrela.classList.remove('ativo');
        });
        classEstrela.add('ativo');
        console.log(e.target.getAttribute('nota-avaliacao'));
    }
});

function avaliarConsulta(){
    if (areaTexto.value == ''){
        msgErroAvaliar.setAttribute('style', 'display: block');
        msgErroAvaliar.innerHTML = '<strong>Preencha todos os campos corretamente';
        msgSucessoAvaliar.innerHTML = '';
        msgSucessoAvaliar.setAttribute('style', 'display: none');
    } else {
        msgSucessoAvaliar.setAttribute('style', 'display: block');
        msgSucessoAvaliar.innerHTML = '<strong>Consulta avaliada com sucesso.';
        msgErroAvaliar.innerHTML = '';
        msgErroAvaliar.setAttribute('style', 'display: none');
        document.getElementById("botao-avaliar").setAttribute('style', 'display: none');

        modalAvaliar.close();
    }
}