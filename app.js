"use strict";
import Card from "./Card.js";
import { Deck } from "./Deck";
export const options = {
	values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
	suits: ["Hearts", "Diamonds", "Spades", "Clubs"],
};

const card1 = new Card(2, "Hearts");
const deck = new Deck(options);
console.log(card1);

deck.createFullDeck();
console.log(deck);
deck.shuffle();
deck.displayCards();
