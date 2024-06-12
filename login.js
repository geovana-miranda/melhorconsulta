let formLogin = document.getElementById('form-login');
let emailLogin = document.getElementById('email-login');
let passwordLogin = document.getElementById('password-login');

let msgErroLogin = document.getElementById('msg-erro-login');

let visualizarSenhaLogin = document.querySelector('.eye3');

//pegar lista de usuarios
let listaUsuarios = [];
//pegar um objeto
let validarUsuario = {
    nome: '',
    email: '',
    password: '',
}

//abrir popup
const modalLogin = document.getElementById('modal-login')
function popup_login() {
    modalLogin.showModal();
}

///VISUALIZAR SENHA LOGIN
visualizarSenhaLogin.addEventListener('click',() => {
    let inputSenha = document.getElementById('password-login');
    if (inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
})

function entrar(){
 //página não atualizar ao clicar em cadastrar
 formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
})

//PEGAR LISTA DE USUARIOS
listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
console.log(listaUsuarios);

//varrer a lista de usuarios
listaUsuarios.forEach((item) => {
    if(emailLogin.value == item.emailCadastro && passwordLogin.value == item.passwordCadastro){
        validarUsuario = {
            nome: item.nomeCadastro,
            email: item.emailCadastro,
            password: item.passwordCadastro
        }
    }
})

if (emailLogin.value == validarUsuario.email && passwordLogin.value == validarUsuario.password){
    msgErroLogin.setAttribute('style', 'display: none');
    msgErroLogin.innerHTML = '';

    //pegar o nome do usuario que logou
    localStorage.setItem('usuarioLogado', JSON.stringify(validarUsuario));

  
    window.location.href = './homepage-logado.html';

} else {
    msgErroLogin.setAttribute('style', 'display: block');
    msgErroLogin.innerHTML = '<strong>Email ou senha incorretos.';
    emailLogin.focus();
}
}

