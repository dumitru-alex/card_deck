import { CardValue, CardSuit } from "./interface/Card";
import { PlayingCard } from "./PlayingCard";

test("should create a card", () => {
  expect(new PlayingCard(CardSuit.Clubs, CardValue.Ace).toString()).toEqual(
    "1 of Clubs"
  );
});

test("should have a value property", () => {
    expect(new PlayingCard(CardSuit.Clubs, CardValue.Ace).value).toEqual(
      1
    );
})

test("should have a suit property", () => {
    expect(new PlayingCard(CardSuit.Clubs, CardValue.Ace).suit).toEqual(
      "Clubs"
    );
})