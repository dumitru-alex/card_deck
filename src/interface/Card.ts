export enum CardSuit {
  Diamonds = "Diamonds",
  Clubs = "Clubs",
  Hearts = "Hearts",
  Spades = "Spades",
}

type RangeValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
export enum CardNumber {
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
}

export enum CardFace {
  Jack = 11,
  Queen = 12,
  King = 13,
  Ace = 1,
}

export type CardVal = CardNumber | CardFace
const foo: RangeValue = CardFace.King
foo
export enum CardValue {
  // Ace = "1",
  // Two = "2",
  // Three = "3",
  // Four = "4",
  // Five = "5",
  // Six = "6",
  // Seven = "7",
  // Eight = "8",
  // Nine = "9",
  // Ten = "10",
  // Jack = "11",
  // Queen = "12",
  // King = "13",
  Ace = "Ace",
  Two = "Two",
  Three = "Three",
  Four = "Four",
  Five = "Five",
  Six = "Six",
  Seven = "Seven",
  Eight = "Eight",
  Nine = "Nine",
  Ten = "Ten",
  Jack = "Jack",
  Queen = "Queen",
  King = "King",
  // Joker = "Joker",
}

export interface Card {
  suit: CardSuit;
  value: CardValue;
}

export interface newCard {
  suit: CardSuit;
  value: number;
  face: any;
}
