let rellenar = document.getElementById("rellenar");

rellenar.addEventListener('click', function () {
    location.reload();
});

document.addEventListener('change', function (e) {
    document.body.style.backgroundColor = e.target.id;
});