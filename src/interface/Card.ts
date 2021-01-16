export enum CardSuit {
  Diamonds = "Diamonds",
  Clubs = "Clubs",
  Hearts = "Hearts",
  Spades = "Spades",
}

export enum CardName {
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
  Joker = "Joker",
}

export interface Card {
  suit: CardSuit;
  rank: CardName;
}