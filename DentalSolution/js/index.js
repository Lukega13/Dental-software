//Index.html


function emailFocus() {
    var email = document.getElementById('email');
    var text = document.getElementById('tittle-email')

    text.style.display = 'block'
    text.style.color = 'blue'

    email.style.borderBottom = '1px solid blue'
}


function emailBlur() {
    var email = document.getElementById('email');
    var emailValue = document.getElementById('email').value;

    var text = document.getElementById('tittle-email')

    if(emailValue.length <= 1){
        email.style.borderBottom = '1px solid red'

        text.style.color = 'red'

    } else {
        emailFocus()
    }
}


function senhaFocus() {
    var senha = document.getElementById('senha');
    var text = document.getElementById('tittle-senha')

    text.style.display = 'block'
    text.style.color = 'blue'

    senha.style.borderBottom = '1px solid blue'
}

function senhaBlur() {
    var senha = document.getElementById('senha');
    var senhaValue = document.getElementById('senha').value;

    var text = document.getElementById('tittle-senha')

    if(senhaValue.length <= 1){
        senha.style.borderBottom = '1px solid red'

        text.style.color = 'red'

    } else {
        senhaFocus()
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
