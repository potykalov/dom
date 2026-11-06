import goblinImg from "../../img/goblin.png";

export default class GameController {
  #board;
  #goblin;
  #previousIndex;

  constructor(board) {
    this.#board = board;
  }

  init() {
    this.#goblin = this.createGoblin();

    this.moveGoblin();

    setInterval(() => {
      this.moveGoblin();
    }, 1000);
  }

  createGoblin() {
    const goblin = document.createElement("img");
    goblin.classList.add("goblin");
    goblin.src = goblinImg;

    return goblin;
  }

  moveGoblin() {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * this.#board.children.length);
    } while (randomIndex === this.#previousIndex);

    this.#previousIndex = randomIndex;

    this.#board.children[randomIndex].append(this.#goblin);
  }
}
