"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rouletteNumber = exports.Card = void 0;
class Card {
    suit;
    rank;
    value;
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}
exports.Card = Card;
class rouletteNumber {
    value;
    color;
    constructor(value, color) {
        this.value = value;
        this.color = color;
    }
}
exports.rouletteNumber = rouletteNumber;
