export enum CardSuit {
  Diamonds = "Diamonds",
  Clubs = "Clubs",
  Hearts = "Hearts",
  Spades = "Spades",
}

export enum CardName {
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
  rank: CardName;
}