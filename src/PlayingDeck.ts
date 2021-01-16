import { CardName, CardSuit } from "./interface/Card";
import { Deck } from "./interface/Deck";
import { PlayingCard } from "./PlayingCard";

export class PlayingDeck implements Deck {
  readonly #NUMBER_OF_CARDS = 52;
  #currentCard: number;
  cards: PlayingCard[];
  constructor() {
    this.#currentCard = 0;
    this.cards = [];
    const suits = Object.values(CardSuit);
    const names = Object.values(CardName);
    suits.forEach((cardSuit) => {
      names.forEach((cardName) => {
        this.cards.push(new PlayingCard(cardSuit, cardName));
      });
    });
  }

  // Define a new playing card type, for Joker
  shuffle(): void {
    // how is shuffling considerred ?
    const nrOfShuffles = Math.floor(Math.random() * this.#NUMBER_OF_CARDS) + 1; // 0 <= 52 x Math.random() <= 52. Adding 1 to make sure we shuffle at least once
    for (let i = nrOfShuffles; i > 0; i--) {
      const randomFirstCard = this.cards[
        Math.floor(Math.random() * this.#NUMBER_OF_CARDS)
      ]!;
      const randomSecondCard = this.cards[
        Math.floor(Math.random() * this.#NUMBER_OF_CARDS)
      ]!;
      const temp = randomFirstCard;
      this.cards[this.cards.indexOf(randomFirstCard)] = randomSecondCard;
      this.cards[this.cards.indexOf(randomSecondCard)] = temp;
    }

    this.#currentCard = 0
  }
  dealOneCard(): PlayingCard | undefined {
    if (this.#currentCard > this.#NUMBER_OF_CARDS) {
      return;
    }
    this.#currentCard++;
    return this.cards[this.#currentCard - 1];
  }
  toString(): string {
    return this.cards.reduce((prev, cur) => {
      const addNewLine = (prev: string) => {
        return prev.length > 0 ? "\n" : "";
      };
      return prev + `${addNewLine(prev)}` + cur.toString();
    }, "");
  }
}
