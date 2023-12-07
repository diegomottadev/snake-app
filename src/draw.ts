// draw.ts
import type { Snake, Food } from './snake';
import canvasModule from './canvas';

// Obtiene el contexto del lienzo desde el módulo canvas
const { ctx } = canvasModule;

// Función para dibujar la serpiente en el lienzo
export const drawSnake = (snake: Snake) => {
  // Verifica si el contexto del lienzo es válido
  if (ctx) {
    // Limpia el lienzo
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Establece el color de la serpiente como gris claro
    ctx.fillStyle = '#8F8F8F';

    // Dibuja cada segmento de la serpiente en el lienzo
    snake.body.forEach(segment => {
      ctx.fillRect(segment.x, segment.y, 10, 10); // Cada segmento tiene un tamaño de 10x10
    });
  }
};

// Función para dibujar la comida en el lienzo
export const drawFood = (food: Food) => {
  // Verifica si el contexto del lienzo es válido
  if (ctx) {
    // Establece el color de la comida como amarillo oscuro
    ctx.fillStyle = '#DAA520';
    // Dibuja la comida en el lienzo
    ctx.fillRect(food.x, food.y, 10, 10); // La comida tiene un tamaño de 10x10
  }
};
