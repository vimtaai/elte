export const canvas = document.querySelector("canvas");
export const context = canvas.getContext("2d");

export function initCanvas() {
  canvas.width = 500;
  canvas.height = 500;
}