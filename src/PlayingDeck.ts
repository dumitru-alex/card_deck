import { CardName, CardSuit } from "./interface/Card";
import { Deck } from "./interface/Deck";
import { PlayingCard } from "./PlayingCard";

export class PlayingDeck implements Deck {
  readonly DECK_SIZE = 52;
  #cards: PlayingCard[];
  constructor() {
    this.#cards = [];
    const suits = Object.values(CardSuit);
    const names = Object.values(CardName);
    suits.forEach((cardSuit) => {
      names.forEach((cardName) => {
        this.#cards.push(new PlayingCard(cardSuit, cardName));
      });
    });
  }

  get cards(): PlayingCard[] {
    return this.#cards;
  }
  shuffle(): void {
    //  Fisher-Yates shuffling algorithm (Richard Durstenfeld's version). See: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    for (let i = this.#cards.length - 1; i > 0; i--) {
      console.log(i);
      const j: number = Math.floor(Math.random() * (i + 1));
      [this.#cards[i], this.#cards[j]] = [this.#cards[j]!, this.#cards[i]!];
    }
  }

  dealOneCard(): PlayingCard | undefined {
    return this.#cards.pop();
  }

  toString(): string {
    return this.#cards.reduce((prev, cur) => {
      const addNewLine = (prev: string) => {
        return prev.length > 0 ? "\n" : "";
      };
      return prev + `${addNewLine(prev)}` + cur.toString();
    }, "");
  }
}

// Define a new playing card type, for Joker
