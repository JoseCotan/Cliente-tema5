let cookie = decodeURIComponent(document.cookie);
let dni = document.getElementById("dni");
let nombre = document.getElementById("nombre");
let nac = document.getElementById("nac");
let email = document.getElementById("email");
let web = document.getElementById("web");
let pass = document.getElementById("pass");
let conf_pass = document.getElementById("conf_pass");
let mostrar = document.getElementById("mostrar");
let guardar = document.getElementById("guardar");
let ver = document.getElementById("ver");
let introducir = document.getElementById("introducir");
let valores = ["DNI: ", "Nombre: ", "Nacimiento: ", "Email: ", "Página web: "];
let inputs = [dni, nombre, nac, email, web];


document.addEventListener("change", function () {
    if (dni.value !== '' && !/^[0-9]{2}.[0-9]{3}.[0-9]{3}-[A-Z]$/.test(dni.value)) {
        dni.value = '';
        alert("DNI incorrecto.");
    } else if (nombre.value !== '' && !/^[A-Za-zÀ-ÿ]+( [A-Za-zÀ-ÿ]+){1,3}$/.test(nombre.value)) {
        nombre.value = '';
        alert("Nombre incorrecto.");
    } else if (nac.value !== '' && !/^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[0-9]{2}|20[0-1][0-9]|202[0-3])$/.test(nac.value)) {
        nac.value = '';
        alert("Fecha incorrecta.");
    } else if (email.value !== '' && !/^[a-zA-Z-_.0-9]{3,30}@[a-z]{3,30}[.][a-z]{2,6}$/.test(email.value)) {
        email.value = '';
        alert("Email incorrecto.");
    } else if (web.value !== '' && !/^(http|https):\/\/www[.][a-zA-Z]{3,50}[.][a-z]{2,6}$/.test(web.value)) {
        web.value = '';
        alert("Página web incorrecta.");
    } else if (pass.value !== '' && !/^[a-zA-Z-_.0-9]{8,10}$/.test(pass.value)) {
        pass.value = '';
        alert("Formato de la contraseña incorrecta.");
    } else if (conf_pass.value !== '' && pass.value !== conf_pass.value) {
        conf_pass.value = '';
        alert("La contraseña no coincide.");
    }
});

guardar.addEventListener("click", function () {
    if (dni.value !== '' &&
        nombre.value !== '' &&
        nac.value !== '' &&
        email.value !== '' &&
        web.value !== '' &&
        pass.value !== '' &&
        conf_pass.value !== '') {
        document.cookie = `dni=${dni.value}`;
        document.cookie = `nombre=${nombre.value}`;
        document.cookie = `nac=${nac.value}`;
        document.cookie = `email=${email.value}`;
        document.cookie = `web=${web.value}`;
        cookie = decodeURIComponent(document.cookie);
    } else {
        alert("Faltan datos.");
    }
});

ver.addEventListener("click", function () {
    if (comprobarCookie()) {
        let datos = cookie.split(';');
        for (let i = 0; i < 5; i++) {
            if (i == 0) {
                mostrar.innerHTML = `${valores[i]}${datos[i].split("=")[1]}<br>`;
            } else {
                mostrar.innerHTML += `${valores[i]}${datos[i].split("=")[1]}<br>`;
            }
        }
    }
});

introducir.addEventListener("click", function () {
    if (comprobarCookie()) {
        let datos = cookie.split(';');
        for (let i = 0; i < 5; i++) {
            inputs[i].value = `${datos[i].split("=")[1]}`;
        }
    }
});

function comprobarCookie() {
    if (document.cookie.length > 0) {
        return true;
    }
    alert("No existe ninguna cookie almacenada.");
    return false
}