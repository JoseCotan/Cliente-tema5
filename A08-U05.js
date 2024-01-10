let asig = ["Empresa", "Despliegue", "Diseño", "Cliente", "Servidor"];
let prof = ["Juana", "Miguel Ángel", "Nacho", "Rafa", "Ricardo"]

let rellenar = document.getElementById("rellenar");
let enviar = document.getElementById("enviar");
let dias = document.getElementById("dias");

rellenar.addEventListener('click', function () {
    window.reload();
});

document.addEventListener('change', function (e) {
    document.body.style.backgroundColor = e.target.id;
});

enviar.addEventListener('click', function() {
    let num = document.querySelector('select[id="asig"]').value;
    // let dia = dias.options[dias.selecteIndex].text;
    let marcados = document.querySelectorAll('.dias:checked');
            let diasSeleccionados = [];
            marcados.forEach(function(checkbox) {
                diasSeleccionados.push(checkbox.name);
            });
    alert(`Se enviará a ${prof[num]} de la materia ${asig[num]} el ${
        (diasSeleccionados[diasSeleccionados.length - 1])
    }.`);
})
