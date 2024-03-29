let cookie = decodeURIComponent(document.cookie);
let form = document.forms[0];
let mostrar = document.getElementById("mostrar");
let valores = ["DNI: ", "Nombre: ", "Nacimiento: ", "Email: ", "Página web: "];
let valoresCookie = ["dni", "nombre", "nac", "email", "web"];
let inputs = [dni, nombre, nac, email, web];
let letra = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N",
    "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];


form.addEventListener("change", function () {
    if (dni.value !== '' && !form.elements["dni"].checkValidity()) {
        dni.value = '';
        dni.setCustomValidity("Dni incorrecto.");
    } else if (!comprobarLetra(dni.value)) {
        dni.value = '';
        alert("Letra incorrecta.");
    }
    else if (nombre.value !== '' && !form.elements["nombre"].checkValidity()) {
        nombre.value = '';
        alert("Nombre incorrecto.");
    } else if (nac.value !== '' && !form.elements["nac"].checkValidity()) {
        nac.value = '';
        alert("Fecha incorrecta.");
    } else if (email.value !== '' && !form.elements["email"].checkValidity()) {
        email.value = '';
        alert("Email incorrecto.");
    } else if (web.value !== '' && !form.elements["web"].checkValidity()) {
        web.value = '';
        alert("Página web incorrecta.");
    } else if (pass.value !== '' && !form.elements["pass"].checkValidity()) {
        pass.value = '';
        alert("Formato de la contraseña incorrecta.");
    } else if (conf_pass.value !== '' && pass.value !== conf_pass.value) {
        conf_pass.value = '';
        alert("La contraseña no coincide.");
    }
});

document.getElementById("guardar").addEventListener("click", function () {
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

document.getElementById("ver").addEventListener("click", function () {
    if (comprobarCookie()) {
        let datos = cookie.split('; ');
        for (let i = 0; i < 5; i++) {
            if (i == 0) {
                mostrar.innerHTML = `${valores[i]}${getCookie(valoresCookie[i])}<br>`;
            } else {
                mostrar.innerHTML += `${valores[i]}${getCookie(valoresCookie[i])}<br>`;
            }
        }
    }
});

document.getElementById("introducir").addEventListener("click", function () {
    if (comprobarCookie()) {
        let datos = cookie.split('; ');
        console.log(datos)
        for (let i = 0; i < 5; i++) {
            inputs[i].value = getCookie(valoresCookie[i]);
        }
    }
});

function getCookie(name) {
    let cname = name + "=";
    let dc = document.cookie;
    if (dc.length > 0) {
        begin = dc.indexOf(cname);
        if (begin != -1) {
            begin += cname.length;
            end = dc.indexOf(";", begin);
            if (end == -1) end = dc.length;
            return decodeURIComponent(dc.substring(begin, end));
        }
    }
    return null;
}

function comprobarCookie() {
    if (document.cookie.length > 0) {
        return true;
    }
    alert("No existe ninguna cookie almacenada.");
    return false
}

function comprobarLetra(dni) {
    // Ej. con 99.999.999-X
    let numero = '';
    let ultimaReal;

    // Obtenemos 99999999
    for (let i = 0; i < dni.length; i++) {
        if (!isNaN(parseInt(dni[i]))) {
            numero += dni[i];
        }
    }
    // Sacamos la X del 99.999.999-X
    ultimaReal = letra[parseInt(numero) % 23];

    // Comparamos si la letra real es correcta
    return ultimaReal === dni[dni.length - 1];
}
