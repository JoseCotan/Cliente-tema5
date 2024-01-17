var datos = ["dni", "nombre", "nac", "email", "web"];

function validarDNI() {
    var dni = document.getElementById("dni");
    if (/^[0-9]{2}.[0-9]{3}.[0-9]{3}-[A-Z]$/.test(dni.value)) {
        return true;
    } alert("DNI Incorrecto.")
    dni.value = "";
    return false;

}

function validarNombre() {
    var nombre = document.getElementById("nombre");
    if (/^[a-zA-Z]{3,15} [a-zA-Z]{3,15}( [a-zA-Z]{3,15}){0,2}$/.test(nombre.value)) {
        return true;
    } alert("Nombre Incorrecto.")
    nombre.value = "";
    return false;
}

function validarFecha() {
    var nac = document.getElementById("nac");
    if (/^([0-2][0-9]|[3][01])\/([0][0-9]|[1][1-2])\/([0-9]{4})$/.test(nac.value)) {
        return true;
    } alert("Fecha de nacimiento incorrecta.")
    fecha.value = "";
    return false;
}

function validarEmail() {
    var email = document.getElementById("email");
    if (/^[-_a-zA-Z0-9]{3,50}@[a-zA-Z]{3,50}\.[a-z]{2,3}$/.test(email.value)) {
        return true;
    } alert("E-main incorrecto.")
    email.value = "";
    return false;
}

function validarWeb() {
    var web = document.getElementById("web");
    if (/^((http|https):\/\/)+([w]{3}\.)+[a-z0-9]+\.[a-z]{2,6}$/.test(web.value)) {
        return true
    } alert("Página web incorrecta.")
    web.value = "";
    return false;
}

function validarPass() {
    var pass = document.getElementById("pass");
    var r_pass = document.getElementById("r_pass");
    if (/^.{8,10}$/.test(pass.value)) {
        if (pass.value == r_pass.value) {
            return true
        }
    } alert("Contraseña incorrecta.")
    pass.value = "";
    r_pass.value = "";
    return false;
}

function validar () {
    if (validarDNI() && validarNombre() && validarFecha() &&
        validarEmail() && validarWeb && validarPass()) {
            alert("si")
        }
}