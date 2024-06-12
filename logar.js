//coloca o nome do usuario na tela

let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

let nomeLogado = document.getElementById('nome-logado');

sessionStorage.setItem('usuarioLogado', JSON.stringify())

nomeLogado.textContent = usuarioLogado.nome;

