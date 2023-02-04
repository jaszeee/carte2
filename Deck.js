import Card from "./Card.js";
import { option } from "./app.js";
import shuffle from "./node_modules/lodash-es/shuffle.js";
export class Deck {
	constructor(options) {
		this.values = options.values;
		this.suits = options.suits;
	}
	cards = [];

	createFullDeck = () => {
		this.values.forEach((value) => {
			this.suits.forEach((suit) => {
				this.cards.push(new Card(value, suit));
			});
		});
	};
	shuffle() {
		this.cards = shuffle(this.cards);
	}
	displayCards() {
		this.cards.forEach((c) => {
			c.display();
		});
	}
}
