import { createActor, updateActor } from "../actor.js";

export function createRobot(width, height) {
  const robot = createActor(width, height);
  robot.dataset.type = "robot";
  robot.classList.add("robot");
  updateRobot(robot);
  return robot;
}

export function updateRobot(robot) {
  updateActor(robot);
  robot.innerText = robot.dataset.dead ? "🔥" : "🤖";
}