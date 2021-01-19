import { CardSuit, CardValue, Card } from "./interface/Card";

export class PlayingCard implements Card {
  #suit: CardSuit;
  #value: CardValue;

  constructor(suit: CardSuit, value: CardValue) {
    this.#suit = suit;
    this.#value = value;
  }

  get suit(): CardSuit {
    return this.#suit;
  }
  get value(): CardValue {
    return this.#value;
  }

  toString(): string {
    return `${CardValue[this.#value]} of ${this.#suit}`;
  }
}
