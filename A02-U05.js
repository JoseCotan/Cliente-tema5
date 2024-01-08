document.addEventListener('keydown', function (e) {
    let caja = document.getElementById('caja');
    let x = parseInt(caja.style.left) || 0
    let y = parseInt(caja.style.top) || 0

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
