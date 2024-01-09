let imagen = document.getElementById("imagen");
imagen.addEventListener("error", function () {
    alert("La imagen no cargó correctamente.");
});

imagen.addEventListener("abort", function () {
    alert("La carga de la imagen fue abortada.");
});
