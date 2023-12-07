// canvas.ts
// Declara las variables para el lienzo y el contexto
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

// Obtiene el elemento canvas del DOM y su contexto 2D
canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
ctx = canvas.getContext('2d')!;

// Utiliza `export =` para exportar ambas variables como un módulo
const canvasModule = { canvas, ctx };

// Exporta el módulo canvas
export default canvasModule;
