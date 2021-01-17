import { PlayingCard } from "./PlayingCard";
import { PlayingDeck } from "./PlayingDeck";

test("should create a 52 card deck", () => {
  expect(new PlayingDeck().DECK_SIZE).toBe(52);
});

test("should shuffle the deck", () => {
  const testDeck = new PlayingDeck();
  const shuffledDeck = new PlayingDeck();
  shuffledDeck.shuffle();
  expect(testDeck.toString()).not.toBe(shuffledDeck.toString());
});

test("should deal 52 cards", () => {
  const testDeck = new PlayingDeck();
  let cardsDealt: PlayingCard[] = [];

  for (let i = 0; i < testDeck.DECK_SIZE; i++) {
    const card = testDeck.dealOneCard();
    if (card) cardsDealt.push(card);
  }

  expect(cardsDealt.length).toBe(testDeck.DECK_SIZE);
});

test("should return undefined after dealing 52 cards", () => {
  const testDeck = new PlayingDeck();

  for (let i = 0; i < testDeck.DECK_SIZE; i++) {
    testDeck.dealOneCard();
  }
  const fiftyThirdCard = testDeck.dealOneCard();
  expect(fiftyThirdCard).toEqual(undefined);
});
