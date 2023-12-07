// collision.ts
import { Snake, Food, generateFood } from './snake';

let food: Food | undefined; // Inicializar como undefined
let canvas: HTMLCanvasElement;

function initializeFood(canvasWidth: number, canvasHeight: number) {
  food = generateFood(canvasWidth, canvasHeight);
}
export const detectCollisions = (snake: Snake, canvasElement: HTMLCanvasElement, updateScoreDOM: (score: number) => void) => {
  if (!food) {
    initializeFood(canvasElement.width, canvasElement.height);
  }

  canvas = canvasElement;

  // Comprueba si la cabeza de la serpiente colisiona con los límites del cuadro
  if (
    snake.body[0].x < 0 ||
    snake.body[0].x >= canvasElement.width ||
    snake.body[0].y < 0 ||
    snake.body[0].y >= canvasElement.height
  ) {
    snake.score = 0;
    resetGame(snake, updateScoreDOM);
  }

  // Comprueba si la cabeza de la serpiente colisiona con la comida
  if (
    snake.body[0].x === food?.x &&
    snake.body[0].y === food?.y
  ) {
    snake.body.push({ x: food.x, y: food.y });
    food = generateFood(canvas.width, canvas.height);

    snake.score += 1000;
    updateScoreDOM(snake.score);
  } else {
    // Comprueba si la cabeza de la serpiente colisiona con su propio cuerpo
    for (let i = 1; i < snake.body.length; i++) {
      if (snake.body[i].x === snake.body[0].x && snake.body[i].y === snake.body[0].y) {
        //resetGame(snake, updateScoreDOM);
      }
    }
  }
};

const resetGame = (snake: Snake, updateScoreDOM: (score: number) => void) => {
  snake.body = [{ x: 10, y: 10 }];
  food = generateFood(canvas.width, canvas.height);
  updateScoreDOM(snake.score);
};