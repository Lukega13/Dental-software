//Index.html

//Onfocus do email e senha
function acionarEmail() {
    var email = document.getElementById('email');
    email.classList.remove('erro-input')
    email.classList.add('input-acionado')

    var text = document.getElementById('tittle-email')
    text.classList.remove('tittle-email-error')
    text.classList.add('tittle-email-active')
}

function acionarSenha() {
    var senha = document.getElementById('senha');
    senha.classList.remove('erro-input')
    senha.classList.add('input-acionado')

    var text = document.getElementById('tittle-senha')
    text.classList.remove('tittle-senha-error')
    text.classList.add('tittle-senha-active')
}

//Onblur email e senha
function fillEmail() {
    var email = document.getElementById('email');
    var text = document.getElementById('tittle-email')

    if (email.value.length < 3) {
        email.classList.remove('input-acionado')
        email.classList.add('erro-input')

        text.classList.remove('tittle-email-active')
        text.classList.add('tittle-email-error')
    } else {
        acionarEmail()
    }
}

function fillSenha() {
    var senha = document.getElementById('senha');
    var text = document.getElementById('tittle-senha')

    if (senha.value.length < 3) {
        senha.classList.remove('input-acionado')
        senha.classList.add('erro-input')

        text.classList.remove('tittle-senha-active')
        text.classList.add('tittle-senha-error')
    } else {
        acionarSenha()
    }
}






//Home-page.html

//Abrir e Fechar sidebar
function toggleMenu() {
    let navigation = document.querySelector('.navigation')
    navigation.classList.toggle('navbar-active')

    let sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('sidebar-active')

    let navtoggle = document.querySelector('.nav-toggle')
    navtoggle.classList.toggle('nav-toggle-active')

    //Fechar os submenus quando fechar a sidebar
    let pacientes = document.querySelector('.pacientes')
    pacientes.classList.remove('submenu-active')
    let mensagens = document.querySelector('.messages')
    mensagens.classList.remove('submenu-active')
    let relatorios = document.querySelector('.relatorios')
    relatorios.classList.remove('submenu-active')
}

function ativarPacientes() {
    let pacientes = document.querySelector('.pacientes')
    pacientes.classList.toggle('submenu-active')
}

function ativarMensagens() {
    let mensagens = document.querySelector('.messages')
    mensagens.classList.toggle('submenu-active')
}

function ativarRelatorios() {
    let relatorios = document.querySelector('.relatorios')
    relatorios.classList.toggle('submenu-active')
}


//Abrir e Fechar perfil
function abrirPerfil() {
    let perfil = document.querySelector('.container-perfil')
    perfil.classList.toggle('container-perfil-active')
}


//Colocar em Dark Mode
function toggleTheme() {
    let main = document.querySelector('body')
    main.classList.toggle('dark-theme-container')

    let header = document.querySelector('#header_home-page')
    header.classList.toggle('dark-theme-header')

    let navtoggle = document.querySelector('#nav-toggle')
    navtoggle.classList.toggle('dark-theme-navbar')

    let sidebar = document.querySelector('#navbar')
    sidebar.classList.toggle('dark-theme-navbar')

    let sidebarItems = document.querySelector('.sidebar')
    sidebarItems.classList.toggle('dark-theme-navbar')

    let icones = document.querySelector('#icones-header')
    icones.classList.toggle('dark-theme-icones')

    let containerPerfil = document.querySelector('.container-perfil-active')
    containerPerfil.classList.toggle('dark-theme-perfil')


}
