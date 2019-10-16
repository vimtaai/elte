const canvas = document.querySelector("canvas");

canvas.width = 500;
canvas.height = 500;
canvas.style.background = "black";

export const context = canvas.getContext("2d");
