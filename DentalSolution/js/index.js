
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






const showMenu = (toggleId, navbarId) => {
    const toggle = document.getElementById(toggleId),
        navbar = document.getElementById(navbarId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'navbar')






function toggleMenu() {
    let navigation = document.querySelector('.navigation')
    navigation.classList.toggle('navbar-active')

    let sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('sidebar-active')

    let navtoggle = document.querySelector('.nav-toggle')
    navtoggle.classList.toggle('nav-toggle-active')
}

function ativarSubmenu() {
    let submenu = document.querySelector('.submenu-item')
    submenu.classList.toggle('submenu-item-active')
}
//ARRUMAR ESSA FUNÇÃO PRA QUE TODOS OS SUBMENU-ITEMS APAREÇAM E NÃO SÓ O PRIMEIRO