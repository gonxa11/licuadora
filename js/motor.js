var estadoLicuadora = 'apagada';
var licuadora = document.getElementById('blender')
var sonidoLicuadora = document.getElementById('blender-sound')
var botonLicuadora = document.getElementById('blender-button-sound')

function controlarLicuadora() {
    if (estadoLicuadora == 'apagada') {
        estadoLicuadora = 'encendido';
        licuadora.classList.add('active');
        hacerbrrbrr();
    } else {
        estadoLicuadora = 'apagada';
        licuadora.classList.remove('active');
        hacerbrrbrr();
    }
}

function hacerbrrbrr() {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;

    }
}