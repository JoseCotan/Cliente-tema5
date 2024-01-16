let cookie = decodeURIComponent(document.cookie);
let mostrar = document.getElementById("contador");
contador();

function contador() {
    if (cookie.length === 0 || !cookie.includes("contador")) {
        document.cookie = "contador=1";
        mostrar.innerHTML = "1";
    } else {
        aumentar();
    }
}

function aumentar() {
    let datos = cookie.split(';');
    for (let i = 0; i < datos.length; i++) {
        let cookiePartes = datos[i].trim().split('=');
        if (cookiePartes[0] == "contador") {
            let contador = cookiePartes[1];
            contador++;
            document.cookie = `contador=${contador}`;
            mostrar.innerHTML = contador;
        }
    }
}