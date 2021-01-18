import { CardDeck } from './CardDeck';

const myDeck = new CardDeck();

for (let i = 0; i < myDeck.DECK_SIZE; i++) {
  const card = myDeck.dealOneCard();
  if (card) console.log(card.toString());
}
const card2 = myDeck.dealOneCard();
console.log(card2)
if (card2) console.log(card2.toString());
