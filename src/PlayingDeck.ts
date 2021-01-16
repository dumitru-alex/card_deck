import { CardName, CardSuit } from "./interface/Card";
import { Deck } from "./interface/Deck";
import { PlayingCard } from "./PlayingCard";

export class PlayingDeck implements Deck {
  #currentCard: number;
  cards: PlayingCard[];
  constructor() {
    this.#currentCard = 0;
    this.cards = [];
    const suits = Object.values(CardSuit);
    const names = Object.values(CardName);
    suits.map((suit) => {
      names.map((cardName) => {
        this.cards.push(new PlayingCard(suit, cardName));
      });
    });
    // Define a new playing card type, for Joker
  }

  suffle(): void {}
  dealOneCard(): PlayingCard | void {}
  toString(): string {
    return this.cards.reduce((prev, cur) => {
      const addNewLine = (prev: string) => {
        return prev.length > 0 ? "\n" : "";
      };
      return prev + `${addNewLine(prev)}` + cur.toString();
    }, "");
  }
}

const myDeck = new PlayingDeck();
console.log(myDeck.toString());
