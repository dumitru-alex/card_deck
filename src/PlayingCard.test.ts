import { CardName, CardSuit } from "./interface/Card";
import { PlayingCard } from "./PlayingCard";

test("should create a card", () => {
  expect(new PlayingCard(CardSuit.Clubs, CardName.Ace).toString()).toEqual(
    "Ace of Clubs"
  );
});

test("should have a suit property", () => {
    expect(new PlayingCard(CardSuit.Clubs, CardName.Ace).rank).toEqual(
      "Ace"
    );
})

test("should have a rank property", () => {
    expect(new PlayingCard(CardSuit.Clubs, CardName.Ace).suit).toEqual(
      "Clubs"
    );
})