// snake.ts

// Importa la interfaz Point desde el archivo point.ts
import type { Point } from "./point";

// Interfaz Snake que define la estructura de la serpiente en el juego
export interface Snake {
  body: Point[]; // El cuerpo de la serpiente es una lista de puntos
  direction: string; // La dirección de la serpiente, puede ser 'up', 'down', 'left' o 'right'
  score: number; // Puntuación de la serpiente
}

// Interfaz Food que extiende la interfaz Point, representando la posición de la comida
export interface Food extends Point {}

// Función para generar una posición aleatoria para la comida dentro del lienzo
export const generateFood = (canvasWidth: number, canvasHeight: number): Food => {
  return {
    // Limita las coordenadas de la comida entre 10 y canvasWidth - 10, y 10 y canvasHeight - 10 respectivamente
    x: Math.round((Math.random() * (canvasWidth - 20) + 10) / 10) * 10,
    y: Math.round((Math.random() * (canvasHeight - 20) + 10) / 10) * 10,
  };
};
