// Importación de módulos
import canvasModule from './canvas';
import { detectCollisions } from './collision';
import { drawFood, drawSnake } from './draw';
import { handleKeyPress } from './input';
import { Food, Snake, generateFood } from './snake';
import { updateSnake } from './update';

// Inicialización de variables
const canvas = canvasModule.canvas;
let food: Food = generateFood(canvas.width, canvas.height);
const snake: Snake = {
  body: [{ x: 10, y: 10 }],
  direction: 'right',
  score: 0,
};
let isPaused = false;

// Imprime el objeto canvas en la consola
console.log('gameCanvas:', canvas);

// Verifica que el canvas sea válido
if (canvas !== null) {
  // Bucle principal del juego
  const gameLoop = () => {
    // Verifica si el juego no está en pausa
    if (!isPaused) {
      // Actualiza la serpiente y la comida, y actualiza el marcador de puntuación en el DOM
      food = updateSnake(snake, food, updateScoreDOM);
      // Dibuja la serpiente en el lienzo
      drawSnake(snake);
      // Dibuja la comida en el lienzo
      drawFood(food);
      // Detecta colisiones y actualiza el marcador de puntuación en el DOM
      detectCollisions(snake, canvas, updateScoreDOM);
    }

    // Llama recursivamente al bucle principal para disminur la velocidad del snake
    setTimeout(gameLoop, 150);
  };

  // Escucha eventos de teclado
  document.addEventListener('keydown', (event) => {
    // Maneja la barra espaciadora para pausar/despausar el juego
    if (event.key === ' ') {
      isPaused = !isPaused;
    } else {
      // Maneja las teclas direccionales para cambiar la dirección de la serpiente
      handleKeyPress(event, snake);
    }
  });

  // Función para actualizar el marcador de puntuación en el DOM
  const updateScoreDOM = (score: number) => {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
      scoreElement.textContent = `Score: ${score}`;
    }
  };

  // Inicia el bucle principal del juego
  gameLoop();
} else {
  // Muestra un mensaje de error si no se puede obtener el elemento 'gameCanvas' desde el DOM
  console.error("No se pudo obtener el elemento 'gameCanvas' desde el DOM.");
}
