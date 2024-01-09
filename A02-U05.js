let caja = document.getElementById('caja');

let x = 0
let y = 0

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp' || e.key === 'NumPad8') {
        caja.style.top = `${y -= 10}px`;
    } else if (e.key === 'ArrowDown' || e.key === 'NumPad2') {
        caja.style.top = `${y += 10}px`;
    } else if (e.key === 'ArrowLeft' || e.key === 'NumPad4') {
        caja.style.left = `${x -= 10}px`;
    } else if (e.key === 'ArrowRight' || e.key === 'NumPad6') {
        caja.style.left = `${x += 10}px`;
    }
});
