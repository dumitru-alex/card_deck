import {
  CardSuit,
  CardValue,
  Card,
  // CardFace
} from './interface/Card';

export class PlayingCard implements Card {
  #suit: CardSuit;
  #value: CardValue;
  // #face: CardFace | undefined;

  constructor(suit: CardSuit, value: CardValue) {
    this.#suit = suit;
    this.#value = value;
    // this.#face = CardValue[this.#value] in Object.keys(CardFace) ?  CardValue[this.#value] as CardFace: undefined;
  }

  get suit(): CardSuit {
    return this.#suit;
  }
  get value(): number {
    return this.#value;
  }

  // get face(): CardFace | undefined {
  //   return this.#face;
  // }
  toString(): string {
    // return `${this.#face ? this.#face : this.#value} of ${this.#suit}`;
    return `${this.#value} of ${this.#suit}`;
  }
}
