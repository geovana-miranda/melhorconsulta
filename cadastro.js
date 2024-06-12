let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let passwordConfirmation = document.getElementById('password-confirmation');
let telefone = document.getElementById('telefone');
let dataNascimento = document.getElementById('data-nascimento');

let msgErro = document.getElementById('msg-erro');
let msgSucesso = document.getElementById('msg-sucesso');
let msgErroSenha = document.getElementById('msg-erro-senha');

let visualizarSenha = document.querySelector('.eye1');
let visualizarConfirmarSenha = document.querySelector('.eye2');

//abrir popup
const modalCadastrar = document.getElementById('modal-cadastro')
function popup_cadastrar() {
    modalCadastrar.showModal();
}

///VISUALIZAR SENHA CADASTRO
visualizarSenha.addEventListener('click',() => {
    let inputSenha = document.getElementById('password');
    if (inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
})
visualizarConfirmarSenha.addEventListener('click',() => {
    let inputSenha = document.getElementById('password-confirmation');
    if (inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
})

function registrar(){
    //página não atualizar ao clicar em cadastrar
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })
    
    //testar se todos os campos estão preenchidos
if (username.value == '' || email.value == '' || password.value == '' || passwordConfirmation.value == '' || telefone.value.length < 9 || dataNascimento.value == ''){
    msgErro.setAttribute('style', 'display: block');
    msgErro.innerHTML = '<strong>Preencha todos os campos corretamente';
    msgSucesso.innerHTML = '';
    msgSucesso.setAttribute('style', 'display: none');
} else {    
    msgErro.innerHTML = '';
    msgErro.setAttribute('style', 'display: none');

    //testar se as senhas são iguais
    if (password.value != passwordConfirmation.value){
        msgErroSenha.setAttribute('style', 'display: block');
    } else {
        msgErroSenha.setAttribute('style', 'display: none');
        
        
        let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') || '[]');

        //Incrementar a lista usando array -- objeto usuario 
        listaUsuarios.push(
           {
               nomeCadastro: username.value,
               emailCadastro: email.value,
               passwordCadastro: password.value,
               passwordConfirmationCadastro: passwordConfirmation.value,
               telefoneCadastro: telefone.value,
               dataNascimentoCadastro: dataNascimento.value
           }
        )
        
        //Salvando a lista no localStorage
        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
        console.log(listaUsuarios);

        msgSucesso.setAttribute('style', 'display: block');
        msgSucesso.innerHTML = '<strong>Usuário cadastrado com sucesso.';

    }

}

}


