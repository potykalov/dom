import GameController from "./GameController/GameController.mjs";

const appEl = document.querySelector(".app");
const gameController = new GameController(appEl);

gameController.init();
