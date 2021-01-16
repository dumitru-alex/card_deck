import { CardSuit, CardName, Card } from "./interface/Card";

export class PlayingCard implements Card {
  #suit: CardSuit;
  #rank: CardName;

  constructor(suit: CardSuit, rank: CardName) {
    this.#suit = suit;
    this.#rank = rank;
  }

  get suit(): CardSuit {
    return this.#suit;
  }
  get rank(): CardName {
    return this.#rank;
  }

  toString(): string {
    return `${this.#rank} of ${this.#suit}`;
  }
}
