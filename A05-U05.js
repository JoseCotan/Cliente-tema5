let imagen1 = document.getElementById("imagen");

let imagen2 = new Image();
imagen2.src = "imagen2.png"

imagen1.addEventListener("mousedown", function () {
    imagen1.src = imagen2.src;
});

imagen1.addEventListener("mouseup", function () {
    imagen1.src = "imagen1.png";
});
