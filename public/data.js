"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emojis = exports.superheroes = exports.responses8ball = exports.colors = exports.months = exports.weekDays = exports.days = exports.animals = void 0;
const animals = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra",
];
exports.animals = animals;
const days = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
    "13th",
    "14th",
    "15th",
    "16th",
    "17th",
    "18th",
    "19th",
    "20th",
    "21st",
    "22nd",
    "23rd",
    "24th",
    "25th",
    "26th",
    "27th",
    "28th",
    "29th",
    "30th",
    "31st",
];
exports.days = days;
const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
exports.weekDays = weekDays;
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
exports.months = months;
const colors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
];
exports.colors = colors;
const responses8ball = [
    "As I see it, yes.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don???t count on it.",
    "It is certain.",
    "It is decidedly so.",
    "Most likely.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Outlook good.",
    "Reply hazy, try again.",
    "Signs point to yes.",
    "Very doubtful.",
    "Without a doubt.",
    "Yes.",
    "Yes ??? definitely.",
    "You may rely on it.",
];
exports.responses8ball = responses8ball;
const superheroes = [
    "Ant-Man",
    "Aquaman",
    "Asterix",
    "The Atom",
    "The Avengers",
    "Batgirl",
    "Batman",
    "Batwoman",
    "Black Canary",
    "Black Panther",
    "Captain America",
    "Captain Marvel",
    "Catwoman",
    "Conan the Barbarian",
    "Daredevil",
    "The Defenders",
    "Doc Savage",
    "Doctor Strange",
    "Elektra",
    "Fantastic Four",
    "Ghost Rider",
    "Green Arrow",
    "Green Lantern",
    "Guardians of the Galaxy",
    "Hawkeye",
    "Hellboy",
    "Incredible Hulk",
    "Iron Fist",
    "Iron Man",
    "Marvelman",
    "Robin",
    "The Rocketeer",
    "The Shadow",
    "Spider-Man",
    "Sub-Mariner",
    "Supergirl",
    "Superman",
    "Teenage Mutant Ninja Turtles",
    "Thor",
    "The Wasp",
    "Watchmen",
    "Wolverine",
    "Wonder Woman",
    "X-Men",
    "Zatanna",
    "Zatara",
];
exports.superheroes = superheroes;
const emojis = [
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "??????????????????",
    "?????????????????????????",
    "?????????????????????????",
    "?????????????????????????",
    "??????????????????",
    "??????????????????",
    "?????????????????????????",
    "?????????????????????????",
    "?????????????????????????",
    "??????????????????",
    "??????????????????",
    "?????????????????????????",
    "?????????????????????????",
    "?????????????????????????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????????????????",
    "????????????????????",
    "????",
    "???????????????????????????",
    "???????????????????????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????",
    "????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "???",
    "???????",
    "???????",
    "???????",
    "???????",
    "???????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "???",
    "???????",
    "???????",
    "???????",
    "???????",
    "???????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "???",
    "???????",
    "???????",
    "???????",
    "???????",
    "???????",
    "???",
    "???????",
    "???????",
    "???????",
    "???????",
    "???????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "????",
    "????",
    "??????",
    "??????",
    "??????",
    "????",
    "????",
    "??????",
    "????",
    "??????",
    "????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "???",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????",
    "??????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "??????",
    "????",
    "??????",
    "????",
    "????",
    "??????",
    "????",
    "????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "???????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "????",
    "??????",
    "????",
    "????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "????",
    "????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "????????",
    "??????",
    "????",
    "????",
    "????",
    "???",
    "???",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "???????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "???????",
    "????",
    "??????",
    "??????",
    "???",
    "???",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "???????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "????",
    "????",
    "????",
    "??????",
    "??????",
    "????",
    "????",
    "???",
    "???",
    "???",
    "???",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "????",
    "??????",
    "??????",
    "??????",
    "??????",
    "????",
    "????",
    "????",
    "#???",
    "0???",
    "1???",
    "2???",
    "3???",
    "4???",
    "5???",
    "6???",
    "7???",
    "8???",
    "9???",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "????",
    "????",
    "????",
    "???",
    "???",
    "???",
    "???",
    "??????",
    "??????",
    "????",
    "???",
    "??",
    "??",
    "????",
    "????",
    "???",
    "???",
    "??????",
    "??????",
    "???",
    "???",
    "???",
    "??????",
    "??????",
    "???",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "???",
    "????",
    "????",
    "????",
    "??????",
    "??????",
    "??????",
    "????",
    "????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "??????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
    "????",
];
exports.emojis = emojis;
