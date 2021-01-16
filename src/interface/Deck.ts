import { PlayingCard } from "../PlayingCard";

export interface Deck {
  cards: PlayingCard[];
  shuffle: () => void;
  dealOneCard: () => PlayingCard | void;
}
