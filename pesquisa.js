function botaoPesquisa() {
    let campoPesquisa = document.getElementById('campo-pesquisa').value;

    localStorage.setItem('pesquisa', campoPesquisa);

    window.location.href = './pesquisa.html';

}

function botaoPesquisaLogado() {

    let campoPesquisa = document.getElementById('campo-pesquisa-logado').value;

    localStorage.setItem('pesquisa', campoPesquisa);

    window.location.href = './pesquisa-logado.html';

}

let resultadoPesquisa = document.getElementById('resultado-pesquisa');

campoPesquisa = localStorage.getItem('pesquisa')
resultadoPesquisa.textContent = campoPesquisa;
