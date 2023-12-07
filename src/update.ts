// update.ts

// Importa las interfaces Snake y Food desde el archivo snake.ts
import type { Snake, Food } from "./snake";

// Importa la función generateFood desde el archivo snake.ts
import { generateFood } from "./snake";

// Importa el módulo canvas desde el archivo canvas.ts
import canvasModule from './canvas';

// Obtiene el elemento canvas del módulo canvas
const canvas = canvasModule.canvas;

// Función para actualizar la serpiente y la comida
export const updateSnake = (snake: Snake, food: Food, updateScoreDOM: (score: number) => void) => {
  // Crea una copia del primer segmento de la serpiente (la cabeza)
  const head = { ...snake.body[0] };

  // Actualiza la posición de la cabeza según la dirección de la serpiente
  switch (snake.direction) {
    case 'up':
      head.y -= 10;
      break;
    case 'down':
      head.y += 10;
      break;
    case 'left':
      head.x -= 10;
      break;
    case 'right':
      head.x += 10;
      break;
  }

  // Agrega la nueva cabeza al inicio del cuerpo de la serpiente
  snake.body.unshift(head);

  // Verifica si la serpiente ha comido la comida
  if (food && snake.body[0].x === food.x && snake.body[0].y === food.y) {
    // Agrega un nuevo segmento al cuerpo de la serpiente en la posición de la comida
    snake.body.push({ x: food.x, y: food.y });

    // Genera una nueva posición para la comida y actualiza la puntuación
    food = generateFood(canvas.width, canvas.height);
    snake.score += 1000;
    updateScoreDOM(snake.score);
  } else {
    // Si no ha comido, elimina el último segmento del cuerpo (cola)
    snake.body.pop();
  }

  // Retorna la nueva posición de la comida
  return food;
};
