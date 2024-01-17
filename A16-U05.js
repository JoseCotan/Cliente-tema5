let cookie = decodeURIComponent(document.cookie);

if (cookie.length === 0 || !cookie.includes("ios")) {
    document.cookie = "ios=0";
    document.cookie = "android=0";
    document.cookie = "windows=0";
    document.cookie = "otros=0";
}

actualizarDatos();

document.getElementById("votar").addEventListener("click", function () {
    let opcionSeleccionada = document.querySelector("input[name='sistemaOP']:checked");

    if (opcionSeleccionada) {
        document.cookie = `${opcionSeleccionada.id}=${(parseInt(obtenerCookie(opcionSeleccionada.id)) + 1)}`;
        actualizarDatos();
    }
});

function actualizarDatos() {
    let votosIos = parseInt(obtenerCookie("ios"));
    let votosAndroid = parseInt(obtenerCookie("android"));
    let votosWindows = parseInt(obtenerCookie("windows"));
    let votosOtros = parseInt(obtenerCookie("otros"));

    let totalVotos = votosIos + votosAndroid + votosWindows + votosOtros;

    let porcentajeIos = (votosIos / totalVotos) * 100;
    let porcentajeAndroid = (votosAndroid / totalVotos) * 100;
    let porcentajeWindows = (votosWindows / totalVotos) * 100;
    let porcentajeOtros = (votosOtros / totalVotos) * 100;

    document.getElementById("iOSBarra").style.width = `${porcentajeIos}%`;
    document.getElementById("androidBarra").style.width = `${porcentajeAndroid}%`;
    document.getElementById("windowsBarra").style.width = `${porcentajeWindows}%`;
    document.getElementById("otrosBarra").style.width = `${porcentajeOtros}%`;
}

function obtenerCookie(sistema) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");
        if (cookie[0] === sistema) {
            return cookie[1];
        }
    }
}