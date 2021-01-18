import { CardValue, CardSuit } from "./interface/Card";
import { PlayingCard } from "./PlayingCard";

test("should create a card", () => {
  expect(new PlayingCard(CardSuit.Clubs, CardValue.Ace).toString()).toEqual(
    "Ace of Clubs"
  );
});

test("should have a suit property", () => {
    expect(new PlayingCard(CardSuit.Clubs, CardValue.Ace).value).toEqual(
      "Ace"
    );
})

test("should have a rank property", () => {
    expect(new PlayingCard(CardSuit.Clubs, CardValue.Ace).suit).toEqual(
      "Clubs"
    );
})