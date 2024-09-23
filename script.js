const heartContainer = document.getElementById('heart-container');

// Función para crear corazones flotantes
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Posición inicial aleatoria
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${(Math.random() * 5) + 5}s`; // Diferentes velocidades

    heartContainer.appendChild(heart);

    // Remover corazones después de la animación
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Crear corazones cada 500 milisegundos
setInterval(createHeart, 500);
