let caja = document.getElementById("caja");

caja.addEventListener("mousedown", function () {
    caja.style.backgroundColor = "yellow";
});

document.addEventListener("keydown", function () {
    caja.style.backgroundColor = "blue";
});

caja.addEventListener("mousemove", function () {
    caja.style.backgroundColor = "white";
});
