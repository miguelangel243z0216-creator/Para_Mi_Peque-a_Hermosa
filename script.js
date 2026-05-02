// 1. FECHA DE INICIO (Cambia esto: Año, Mes-1, Día)
const fechaInicio = new Date(2024, 11, 25); // Ejemplo: 15 de enero 2024

// 2. CONTADOR DE TIEMPO
function actualizarContador() {
    const ahora = new Date();
    const dif = ahora - fechaInicio;

    const d = Math.floor(dif / (1000 * 60 * 60 * 24));
    const h = Math.floor((dif / (1000 * 60 * 60)) % 24);
    const m = Math.floor((dif / 1000 / 60) % 60);
    const s = Math.floor((dif / 1000) % 60);

    document.getElementById('tiempo').innerText = `${d}d ${h}h ${m}m ${s}s`;
}
setInterval(actualizarContador, 1000);

// 3. EFECTO DE ESCRITURA
const frases = [
    "Eres el amor de mi vida...",
    "Siempre serás mi pequeña.",
    "Mi enfermera favorita 🩺",
    "Te amo muchísimo ❤️"
];

let fIdx = 0, cIdx = 0;
const target = document.getElementById('escritura-automatica');

function escribir() {
    if (cIdx < frases[fIdx].length) {
        target.innerHTML += frases[fIdx].charAt(cIdx);
        cIdx++;
        setTimeout(escribir, 100);
    } else {
        setTimeout(borrar, 2000);
    }
}

function borrar() {
    if (cIdx > 0) {
        target.innerHTML = frases[fIdx].substring(0, cIdx - 1);
        cIdx--;
        setTimeout(borrar, 50);
    } else {
        fIdx = (fIdx + 1) % frases.length;
        setTimeout(escribir, 500);
    }
}
escribir();

// 4. FLORES Y CORAZONES CAYENDO
const container = document.getElementById('flower-container');
const simbolos = ['🌸', '🌼', '💖', '✨', '🌷', '🩺'];

function crearFlor() {
    const flor = document.createElement('div');
    flor.className = 'flower';
    flor.style.left = Math.random() * 100 + "vw";
    flor.style.animationDuration = (Math.random() * 3 + 4) + "s";
    flor.innerText = simbolos[Math.floor(Math.random() * simbolos.length)];
    container.appendChild(flor);
    setTimeout(() => flor.remove(), 6000);
}
setInterval(crearFlor, 400);

// 5. CONTROL DE MÚSICA Y ROTACIÓN POLAROID
const musica = document.getElementById('miMusica');
const btn = document.getElementById('musicBtn');

function toggleMusic() {
    if (musica.paused) {
        musica.play();
        btn.innerText = "Pause";
    } else {
        musica.pause();
        btn.innerText = "Play";
    }
}

document.querySelectorAll('.polaroid-card').forEach(card => {
    const rot = Math.floor(Math.random() * 10 - 5);
    card.style.transform = `rotate(${rot}deg)`;
});