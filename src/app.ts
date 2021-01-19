// Playground

import { CardDeck } from "./CardDeck";
import { PlayingCard } from "./PlayingCard";

class Player {
  #cards: PlayingCard[];
  constructor() {
    this.#cards = [];
  }

  get cards(): PlayingCard[] {
    return this.#cards;
  }
  receiveCard(card: PlayingCard): void {
    this.#cards.push(card);
  }

  fold(): PlayingCard[] {
    const temp = this.#cards;
    this.#cards = [];
    return temp;
  }

  showHand(): string {
    return this.#cards.reduce((prev, cur) => {
      const addNewLine = (prev: string) => {
        return prev.length > 0 ? "\n" : "";
      };
      return prev + `${addNewLine(prev)}` + cur.toString();
    }, "");
  }
}

const Alex = new Player();
const newDeck = new CardDeck();

console.log(Alex.showHand());

// const dealtCard = newDeck.dealOneCard();
// console.log(dealtCard?.toString());

// Alex.receiveCard(dealtCard!);
// console.log(Alex.showHand());

for (let step = 0; step < 5; step++) {
  Alex.receiveCard(newDeck.dealOneCard()!);
}
console.log(">> My hand <<");
console.log(Alex.showHand());

console.log(">> Drop cards <<");
Alex.fold().forEach((card) => console.log(card.toString()));

console.log(">> My hand <<");
console.log(Alex.showHand());
