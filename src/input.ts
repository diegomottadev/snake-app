// input.ts

import type { Snake } from "./snake";

// Función para manejar eventos de teclado y actualizar la dirección de la serpiente
export const handleKeyPress = (event: KeyboardEvent, snake: Snake) => {
  // Obtiene la tecla presionada
  const keyPressed = event.key;

  // Actualiza la dirección de la serpiente según la tecla presionada
  switch (keyPressed) {
    case 'ArrowUp':
      if (snake.direction !== 'down') {
        snake.direction = 'up';
      }
      break;
    case 'ArrowDown':
      if (snake.direction !== 'up') {
        snake.direction = 'down';
      }
      break;
    case 'ArrowLeft':
      if (snake.direction !== 'right') {
        snake.direction = 'left';
      }
      break;
    case 'ArrowRight':
      if (snake.direction !== 'left') {
        snake.direction = 'right';
      }
      break;
    default:
      // No hacer nada si se presiona otra tecla
      break;
  }
};
