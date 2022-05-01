"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./public/classes");
const pokenode_ts_1 = require("pokenode-ts");
const data_1 = require("./public/data");
const maxNumber = 9007199254740991;
const minNumber = -maxNumber;
const lettersLower = "abcdefghijklmnopqrstuvwxyz";
const lettersUpper = lettersLower.toUpperCase();
const suitsStrings = ["hearts", "diamonds", "spades", "clubs"];
const suitsSymbols = ["♥", "♦", "♠", "♣"];
const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const rouletteColors = ["black", "red"];
const rouletteColorsInverted = ["red", "black"];
const aimless = {
    rng: ({ min = minNumber, max = maxNumber, float = false } = {}) => {
        if (float) {
            return Math.random() * (max - min) + min;
        }
        else {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },
    boolean: ({ chance = 50 } = {}) => {
        return aimless.rng({ min: 1, max: 100 }) <= chance;
    },
    coin: () => {
        const flip = aimless.boolean();
        return flip ? "heads" : "tails";
    },
    prime: ({ min = minNumber, max = maxNumber } = {}) => {
        const primes = [];
        for (let i = min; i <= max; i++) {
            let flag = 0;
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            if (i > 1 && flag == 0) {
                primes.push(i);
            }
        }
        return primes;
    },
    roll: (die) => {
        const dice = die.split("d");
        const amount = dice[0];
        const sides = dice[1];
        const rolls = [];
        for (let i = 0; i < amount; i++) {
            rolls.push(aimless.rng({ min: 1, max: sides }));
        }
        if (rolls.includes(NaN) || rolls.length == 0) {
            throw new Error("Invalid format. Please make sure to enter this format: #d# where the first # is the number of dice, and the second # is the number of sides of each die");
        }
        return rolls;
    },
    remove: (array, element, { returnArray = false } = {}) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                array.splice(i, 1);
            }
        }
        return returnArray ? array : undefined;
    },
    sum: (array) => {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += +array[i];
        }
        return sum;
    },
    subtract: (array) => {
        let sub = array[0];
        for (let i = 1; i < array.length; i++) {
            sub -= +array[i];
        }
        return sub;
    },
    pick: (array, { picked = 1, remove = false } = {}) => {
        if (picked == 1) {
            const item = array[aimless.rng({ min: 0, max: array.length - 1 })];
            remove ? aimless.remove(array, item) : null;
            return item;
        }
        else {
            const pickedElements = [];
            for (let i = 0; i < picked; i++) {
                const item = array[aimless.rng({ min: 0, max: array.length - 1 })];
                remove ? aimless.remove(array, item) : null;
                pickedElements.push(item);
            }
            return pickedElements;
        }
    },
    shuffle: (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = aimless.rng({ min: 0, max: i });
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },
    merge: (array1, array2) => {
        for (let i = 0; i < array2.length; i++) {
            array1.push(array2[i]);
        }
        return array1;
    },
    capitalize: (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    lowercase: (string) => {
        return string.charAt(0).toLowerCase() + string.slice(1);
    },
    letter: ({ casing = "all" } = {}) => {
        let pool = [];
        let picked;
        switch (casing) {
            case "lower":
                pool = lettersLower.split("");
                break;
            case "upper":
                pool = lettersUpper.split("");
                break;
            case "all":
                pool = aimless.merge(lettersLower.split(""), lettersUpper.split(""));
                break;
            default:
                pool = undefined;
                break;
        }
        return picked = aimless.pick(pool);
    },
    deck: ({ shuffled = false, symbols = true } = {}) => {
        const deck = [];
        for (let i = 0; i < 4; i++) {
            for (let k = 0; k < 13; k++) {
                deck.push(new classes_1.Card(symbols ? suitsSymbols[i] : suitsStrings[i], ranks[k], values[k]));
            }
        }
        return shuffled ? aimless.shuffle(deck) : deck;
    },
    roulette: ({ shuffled = false } = {}) => {
        const roulette = [];
        roulette.push(new classes_1.rouletteNumber(0, "green"));
        for (let i = 1; i <= 36; i++) {
            if (i <= 10) {
                roulette.push(new classes_1.rouletteNumber(i, rouletteColors[i % 2]));
            }
            else if (i <= 18) {
                roulette.push(new classes_1.rouletteNumber(i, rouletteColorsInverted[i % 2]));
            }
            else if (i <= 28) {
                roulette.push(new classes_1.rouletteNumber(i, rouletteColors[i % 2]));
            }
            else {
                roulette.push(new classes_1.rouletteNumber(i, rouletteColorsInverted[i % 2]));
            }
        }
        return shuffled ? aimless.shuffle(roulette) : roulette;
    },
    animal: ({ link = false } = {}) => {
        const animal = aimless.pick(data_1.animals);
        const wikipedia = `https://en.wikipedia.org/wiki/${animal}`;
        return link ? wikipedia : animal;
    },
    day: ({ week = true }) => {
        return week ? aimless.pick(data_1.weekDays) : aimless.pick(data_1.days);
    },
    month: () => {
        return aimless.pick(data_1.months);
    },
    date: ({ minYear = 1600, maxYear = 2030, american = false } = {}) => {
        let date;
        const day = aimless.pick(data_1.days);
        const month = aimless.pick(data_1.months);
        const year = aimless.rng({ min: minYear, max: maxYear });
        return american ? date = `${month} ${day} ${year}` : date = `${day} ${month} ${year}`;
    },
    age: ({ type = "all" } = {}) => {
        switch (type) {
            case "all":
                return aimless.rng({ min: 1, max: 120 });
            case "child":
                return aimless.rng({ min: 1, max: 12 });
            case "teen":
                return aimless.rng({ min: 13, max: 19 });
            case "adult":
                return aimless.rng({ min: 20, max: 120 });
            default:
                return aimless.rng({ min: 1, max: 120 });
        }
    },
    move: async () => {
        const id = aimless.rng({ min: 1, max: 807 });
        const api = new pokenode_ts_1.PokemonClient();
        const pokemon = await api.getPokemonById(id);
        const move = aimless.pick(pokemon.moves).move.name;
        return move;
    },
    pokemon: async ({ level = 1 } = {}) => {
        const id = aimless.rng({ min: 1, max: 807 });
        const api = new pokenode_ts_1.PokemonClient();
        const pokemon = await api.getPokemonById(id);
        const species = await api.getPokemonSpeciesById(id);
        const Pokemon = {
            name: pokemon.species.name,
            sprite: pokemon.species.url,
            types: {
                first: pokemon.types[0].type.name,
                second: pokemon.types.length > 1 ? pokemon.types[1].type.name : undefined
            },
            stats: {
                hp: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                specialAttack: pokemon.stats[3].base_stat,
                specialDefense: pokemon.stats[4].base_stat,
                speed: pokemon.stats[5].base_stat
            },
            moves: [],
            captureRate: species.capture_rate,
            level: level
        };
        return Pokemon;
    },
    gender: (others) => {
        if (!others) {
            console.log("a");
            return aimless.boolean() ? "Male" : "Female";
        }
        else {
            const genders = ["Male", "Female"];
            for (let i = 0; i < others.length; i++) {
                genders.push(others[i]);
            }
            return aimless.pick(genders);
        }
    },
    color: () => {
        return aimless.pick(data_1.colors);
    },
    euro: ({ max = 500 } = {}) => {
        const euro = aimless.rng({ min: 0, max: max, float: true });
        return "€" + Math.round((euro + Number.EPSILON) * 100) / 100;
    },
    dollar: ({ max = 500 } = {}) => {
        const dollar = aimless.rng({ min: 0, max: max, float: true });
        return "$" + Math.round((dollar + Number.EPSILON) * 100) / 100;
    }
};
exports.default = aimless;
