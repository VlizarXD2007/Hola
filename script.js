const flowerContainer = document.getElementById('flower-container');

// Función para crear flores flotantes
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    
    // Posición inicial aleatoria
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.animationDuration = `${(Math.random() * 5) + 5}s`; // Diferentes velocidades

    flowerContainer.appendChild(flower);

    // Remover flores después de la animación
    setTimeout(() => {
        flower.remove();
    }, 10000);
}

// Crear flores cada 500 milisegundos
setInterval(createFlower, 500);
