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

    if (emailValue.length <= 1) {
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

    if (senhaValue.length <= 1) {
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



//Mini Calendar
const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];


    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

//Tabela lista de pacientes
var tbody = document.getElementById("tbody-patient-list");

//Preencher tabela
var dados = [
    ["Lucas Guimarães Abreu", "19", "M", "34 99632-5828", "13151719", "1 risco", "botao"],
    ["Kleber Guimarães Abreu", "19", "M", "34 99632-5828", "13151719", "1 risco", "botao"],
    ["Lucas Guimarães Abreu", "19", "M", "34 99632-5828", "13151719", "1 risco", "botao"]
];

for (var i = 0; i < dados.length; i++) {
    var tr = "<tr>" +
        "<td>" + dados[i][0] + "</td>" +
        "<td>" + dados[i][1] + "</td>" +
        "<td>" + dados[i][2] + "</td>" +
        "<td>" + dados[i][3] + "</td>" +
        "<td>" + dados[i][4] + "</td>" +
        "<td>" + dados[i][5] + "</td>" +
        "<td>" + dados[i][6] + "</td>" +
        "</tr>";

    tbody.innerHTML += tr;

}

