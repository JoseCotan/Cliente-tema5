let asig = ["Empresa", "Despliegue", "Diseño", "Cliente", "Servidor"];
let prof = ["Juana", "Miguel Ángel", "Nacho", "Rafa", "Ricardo"];
let correos = ["juana.cala@iesdonana.org",
    "miguelangel.garcia@iesdonana.org",
    "nacho@iesdonana.org",
    "rafael.figueroa@iesdonana.org",
    "ricardo.perez@iesdonana.org"];

let rellenar = document.getElementById("rellenar");
let enviar = document.getElementById("enviar");
let dias = document.getElementById("dias");
let nombre = document.getElementById("nombre");
let mensaje = document.getElementById("mensaje");

rellenar.addEventListener('click', function () {
    window.reload();
});

document.addEventListener('change', function (e) {
    document.body.style.backgroundColor = e.target.id;
});

enviar.addEventListener('click', function () {
    let num = document.querySelector('select[id="asig"]').value;
    // let dia = dias.options[dias.selecteIndex].text;
    let marcados = document.querySelectorAll('.dias:checked');
    let diasSeleccionados = [];
    marcados.forEach(function (checkbox) {
        diasSeleccionados.push(checkbox.name);
    });
    alert(`Se enviará a ${prof[num]} de la materia ${asig[num]} el ${(diasSeleccionados[diasSeleccionados.length - 1])
        }.`);
    let mailto = `mailto:${correos[num]}?subject=${encodeURIComponent(
        `Correo para ${prof[num]} por parte de ${nombre.value}.`)}&body=${encodeURIComponent(
        `Días con disponibilidad: ${diasSeleccionados.join(', ')}.

${mensaje.value}`)}`;
    window.location.href = mailto;
<<<<<<< HEAD
});
=======
});
>>>>>>> 9a23bf64f3a3bfe404534e12e3cd472a354ba7dc
