export enum CardSuit {
  Diamonds = 'Diamonds',
  Clubs = 'Clubs',
  Hearts = 'Hearts',
  Spades = 'Spades',
}

// export type CardValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13

export enum CardValue {
  Ace = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
  Jack = 11,
  Queen = 12,
  King = 13,
}
export enum CardFace {
  'Ace' = 'Ace',
  // Two = "Two",
  // Three = "Three",
  // Four = "Four",
  // Five = "Five",
  // Six = "Six",
  // Seven = "Seven",
  // Eight = "Eight",
  // Nine = "Nine",
  // Ten = "Ten",
  'Jack' = 'Jack',
  'Queen' = 'Queen',
  'King' = 'King',
}

export interface Card {
  suit: CardSuit;
  value: CardValue;
  // face?: CardFace;
}
