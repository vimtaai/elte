import { Bird } from "./bird.js";
import { Pipe } from "./pipe.js";

export const Stage = {
  PLAYING: "playing",
  GAMEOVER: "gameover"
};

export class AppState {
  bird = new Bird(200);
  pipes = [];
  stage = Stage.PLAYING;
  score = 0;

  newPipe(canvasWidth, canvasHeight) {
    this.pipes.push(new Pipe(canvasWidth, canvasHeight));
  }

  deletePipe(pipe) {
    const pipeIndex = this.pipes.indexOf(pipe);
    this.pipes.splice(pipeIndex, 1);
  }

  addScore() {
    this.score += 1;
  }
}