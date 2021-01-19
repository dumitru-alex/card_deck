import { CardValue, CardSuit } from "./interface/Card";
import { PlayingCard } from "./PlayingCard";

test("should create a card", () => {
  expect(new PlayingCard(CardSuit.Clubs, CardValue.Ace).toString()).toEqual(
    "Ace of Clubs"
  );
  expect(new PlayingCard(CardSuit.Diamonds, CardValue.Four).toString()).toEqual(
    "Four of Diamonds"
  );
  expect(new PlayingCard(CardSuit.Hearts, CardValue.Queen).toString()).toEqual(
    "Queen of Hearts"
  );
});

test("should have a value property", () => {
  expect(new PlayingCard(CardSuit.Clubs, CardValue.Ace).value).toEqual(1);
  expect(new PlayingCard(CardSuit.Diamonds, CardValue.Two).value).toEqual(2);
  expect(new PlayingCard(CardSuit.Diamonds, CardValue.King).value).toEqual(13);
});

test("should have a suit property", () => {
  expect(new PlayingCard(CardSuit.Clubs, CardValue.Ace).suit).toEqual("Clubs");
});
