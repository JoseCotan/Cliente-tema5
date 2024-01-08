document.addEventListener('mousedown', function(e) {
    let accion = 'Pulsa un botón'
    switch (e.button) {
        case 0:
            accion = "Has pulsado el botón izquierdo";
            break;
        case 1:
            accion = "Has pulsado el botón central";
            break;
        case 2:
            accion = "Has pulsado el botón derecho";
            break;
    }
    document.getElementById("parrafo").innerHTML += `${accion}<br>`;
});
