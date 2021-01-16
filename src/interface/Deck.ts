import { PlayingCard } from "../PlayingCard";

export interface Deck {
  cards: PlayingCard[];
  suffle: () => void;
  dealOneCard: () => PlayingCard | void;
}
