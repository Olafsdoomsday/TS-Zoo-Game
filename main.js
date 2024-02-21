"use strict";
/*--------------- DATA ---------------*/
var Diet;
(function (Diet) {
    Diet["Herbivore"] = "herbivore";
    Diet["Carnivore"] = "carnivore";
})(Diet || (Diet = {}));
const AllAnimals = {
    Lion: {
        rarity: 5,
        tolerance: 5,
        sociality: 1,
        diet: Diet.Carnivore,
        prefix: 'Lion',
        suffix: 'ion',
    },
    Rabbit: {
        rarity: 2,
        tolerance: 0,
        sociality: 4,
        diet: Diet.Herbivore,
        prefix: 'Rabb',
        suffix: 'it',
    },
    Butterfly: {
        rarity: 3,
        tolerance: 2,
        sociality: 2,
        diet: Diet.Herbivore,
        prefix: 'Butt',
        suffix: 'erfly',
    },
    Elephant: {
        rarity: 5,
        tolerance: 3,
        sociality: 3,
        diet: Diet.Herbivore,
        prefix: 'Eleph',
        suffix: 'ephant',
    },
    Penguin: {
        rarity: 4,
        tolerance: 2,
        sociality: 5,
        diet: Diet.Carnivore,
        prefix: 'Peng',
        suffix: 'uin',
    },
    Kangaroo: {
        rarity: 4,
        tolerance: 1,
        sociality: 2,
        diet: Diet.Herbivore,
        prefix: 'Kang',
        suffix: 'aroo',
    },
    Dolphin: {
        rarity: 1,
        tolerance: 0,
        sociality: 10,
        diet: Diet.Carnivore,
        prefix: 'Dolph',
        suffix: 'in',
    },
    Cockatoo: {
        rarity: 2,
        tolerance: 0,
        sociality: 4,
        diet: Diet.Herbivore,
        prefix: 'Cock',
        suffix: 'atoo',
    },
    Giraffe: {
        rarity: 3,
        tolerance: 2,
        sociality: 2,
        diet: Diet.Herbivore,
        prefix: 'Gir',
        suffix: 'affe',
    },
    Squirell: {
        rarity: 1,
        tolerance: 1,
        sociality: 1,
        diet: Diet.Herbivore,
        prefix: 'Squir',
        suffix: 'ell',
    },
    Hippo: {
        rarity: 4,
        tolerance: 2,
        sociality: 3,
        diet: Diet.Carnivore,
        prefix: 'Hipp',
        suffix: 'ippo',
    },
    Gorilla: {
        rarity: 5,
        tolerance: 0,
        sociality: 5,
        diet: Diet.Herbivore,
        prefix: 'Gor',
        suffix: 'illa',
    },
    Rhinoceros: {
        rarity: 4,
        tolerance: 5,
        sociality: 1,
        diet: Diet.Herbivore,
        prefix: 'Rhin',
        suffix: 'ceros',
    },
    Turkey: {
        rarity: 6,
        tolerance: 0,
        sociality: 1,
        diet: Diet.Herbivore,
        prefix: 'Turk',
        suffix: 'ey',
    },
    Goldfish: {
        rarity: 2,
        tolerance: 8,
        sociality: 3,
        diet: Diet.Herbivore,
        prefix: 'Gold',
        suffix: 'ish',
    },
    Snake: {
        rarity: 3,
        tolerance: 2,
        sociality: 1,
        diet: Diet.Carnivore,
        prefix: 'Sn',
        suffix: 'ake',
    },
    Chicken: {
        rarity: 1,
        tolerance: 1,
        sociality: 1,
        diet: Diet.Herbivore,
        prefix: 'Chick',
        suffix: 'icken',
    },
    Kitten: {
        rarity: 1,
        tolerance: 10,
        sociality: 1,
        diet: Diet.Carnivore,
        prefix: 'Kitt',
        suffix: 'itten',
    },
    Puppy: {
        rarity: 2,
        tolerance: 0,
        sociality: 3,
        diet: Diet.Carnivore,
        prefix: 'Pupp',
        suffix: 'uppy',
    },
    Lizard: {
        rarity: 3,
        tolerance: 3,
        sociality: 2,
        diet: Diet.Carnivore,
        prefix: 'Liz',
        suffix: 'ard',
    },
    Crocodile: {
        rarity: 15,
        tolerance: 5,
        sociality: 1,
        diet: Diet.Carnivore,
        prefix: 'Croc',
        suffix: 'odile',
    },
    Blobfish: {
        rarity: 20,
        tolerance: 0,
        sociality: 1,
        diet: Diet.Herbivore,
        prefix: 'Blob',
        suffix: 'ob',
    },
    Tiger: {
        rarity: 10,
        tolerance: 30,
        sociality: 1,
        diet: Diet.Carnivore,
        prefix: 'Tig',
        suffix: 'iger',
    },
    Monkey: {
        rarity: 15,
        tolerance: 5,
        sociality: 5,
        diet: Diet.Herbivore,
        prefix: 'Monk',
        suffix: 'onkey',
    },
    Panda: {
        rarity: 15,
        tolerance: 10,
        sociality: 3,
        diet: Diet.Herbivore,
        prefix: 'Pand',
        suffix: 'anda',
    },
    Leopard: {
        rarity: 20,
        tolerance: 5,
        sociality: 2,
        diet: Diet.Carnivore,
        prefix: 'Leop',
        suffix: 'ard',
    },
    Otter: {
        rarity: 20,
        tolerance: 0,
        sociality: 4,
        diet: Diet.Herbivore,
        prefix: 'Ott',
        suffix: 'er',
    },
    Armadillo: {
        rarity: 5,
        tolerance: 50,
        sociality: 2,
        diet: Diet.Herbivore,
        prefix: 'Armad',
        suffix: 'illo',
    },
    Vulture: {
        rarity: 15,
        tolerance: 10,
        sociality: 3,
        diet: Diet.Carnivore,
        prefix: 'Vult',
        suffix: 'ure',
    },
    Piranha: {
        rarity: 10,
        tolerance: 3,
        sociality: 30,
        diet: Diet.Carnivore,
        prefix: 'Pir',
        suffix: 'anha',
    },
    Grizzly: {
        rarity: 5,
        tolerance: 1,
        sociality: 1,
        diet: Diet.Carnivore,
        prefix: 'Rizz',
        suffix: 'izzly',
    },
    'Turtle': {
        rarity: 300,
        tolerance: 200,
        sociality: 20,
        diet: Diet.Herbivore,
        prefix: 'Turt',
        suffix: 'urtle',
    },
    'Mouse': {
        rarity: 200,
        tolerance: 150,
        sociality: 50,
        diet: Diet.Herbivore,
        prefix: 'Mous',
        suffix: 'ouse',
    },
    'Eagle': {
        rarity: 400,
        tolerance: 100,
        sociality: 15,
        diet: Diet.Carnivore,
        prefix: 'Eag',
        suffix: 'eagle',
    },
    'Fox': {
        rarity: 350,
        tolerance: 150,
        sociality: 10,
        diet: Diet.Carnivore,
        prefix: 'Fox',
        suffix: 'ox',
    },
    'Owl': {
        rarity: 400,
        tolerance: 100,
        sociality: 15,
        diet: Diet.Carnivore,
        prefix: 'Owl',
        suffix: 'owl',
    },
    'Chameleon': {
        rarity: 500,
        tolerance: 80,
        sociality: 10,
        diet: Diet.Herbivore,
        prefix: 'Cham',
        suffix: 'eleon',
    },
    'Goose': {
        rarity: 1000,
        tolerance: 1,
        sociality: 1,
        diet: Diet.Carnivore,
        prefix: 'Goos',
        suffix: 'oose',
    },
    'Chipmunk': {
        rarity: 350,
        tolerance: 100,
        sociality: 20,
        diet: Diet.Herbivore,
        prefix: 'Chip',
        suffix: 'unk',
    },
    'Axolotl': {
        rarity: 500,
        tolerance: 100,
        sociality: 5,
        diet: Diet.Herbivore,
        prefix: 'Axol',
        suffix: 'otl',
    },
};
const BaseAnimals = [
    'Lion',
    'Rabbit',
    'Butterfly',
    'Elephant',
    'Penguin',
    'Kangaroo',
    'Dolphin',
    'Cockatoo',
    'Giraffe',
    'Squirell',
    'Hippo',
    'Rhinoceros',
    'Turkey',
    'Goldfish',
    'Snake',
    'Chicken',
    'Kitten',
    'Puppy',
    'Lizard',
];
const Tier2Animals = [
    'Crocodile',
    'Blobfish',
    'Tiger',
    'Monkey',
    'Panda',
    'Leopard',
    'Otter',
    'Armadillo',
    'Vulture',
    'Piranha',
    'Grizzly',
];
const Tier3Animals = [
    'Turtle',
    'Mouse',
    'Eagle',
    'Fox',
    'Owl',
    'Chameleon',
    'Goose',
    'Chipmunk',
    'Axolotl',
];
const AnimalCode = {
    // Encode
    Lion: "li",
    Rabbit: "ra",
    Butterfly: "bu",
    Elephant: "el",
    Penguin: "pe",
    Kangaroo: "ka",
    Lizard: "lz",
    Dolphin: "do",
    Cockatoo: "co",
    Giraffe: "gi",
    Squirell: "sq",
    Hippo: "hi",
    Gorilla: "ri",
    Rhinoceros: "rh",
    Turkey: "tu",
    Goldfish: "go",
    Snake: "sn",
    Chicken: "ch",
    Kitten: "ki",
    Puppy: "pu",
    Crocodile: "cr",
    Blobfish: "bl",
    Tiger: "ti",
    Monkey: "mo",
    Panda: "pa",
    Leopard: "le",
    Otter: "ot",
    Armadillo: "ar",
    Vulture: "vu",
    Piranha: "pi",
    Grizzly: "gr",
    Turtle: "tl",
    Mouse: "ms",
    Eagle: "ea",
    Fox: "fo",
    Owl: "ow",
    Chameleon: "ca",
    Goose: "gs",
    Chipmunk: "cp",
    Axolotl: "ax",
    // Decode
    "li": "Lion",
    "ra": "Rabbit",
    "bu": "Butterfly",
    "el": "Elephant",
    "pe": "Penguin",
    "ka": "Kangaroo",
    "lz": "Lizard",
    "do": "Dolphin",
    "co": "Cockatoo",
    "gi": "Giraffe",
    "sq": "Squirell",
    "hi": "Hippo",
    "ri": "Gorilla",
    "rh": "Rhinoceros",
    "tu": "Turkey",
    "go": "Goldfish",
    "sn": "Snake",
    "ch": "Chicken",
    "ki": "Kitten",
    "pu": "Puppy",
    "bl": "Blobfish",
    "ti": "Tiger",
    "mo": "Monkey",
    "pa": "Panda",
    "le": "Leopard",
    "ot": "Otter",
    "ar": "Armadillo",
    "vu": "Vulture",
    "pi": "Piranha",
    "gr": "Grizzly",
    "tl": "Turtle",
    "ms": "Mouse",
    "ea": "Eagle",
    "fo": "Fox",
    "ow": "Owl",
    "ca": "Ghameleon",
    "gs": "Goose",
    "cp": "Chipmunk",
    "ax": "Axolotl",
};
const Upgrades = {
    animalCount: {
        cost: 50,
        progress: 0,
        repeat: -2,
        descr: 'Gives you room for another animal.',
        name: 'Animal Count +1'
    },
    grassGain: {
        cost: 50,
        progress: 5,
        repeat: -2,
        descr: 'You now produce more meat every 10 seconds.',
        name: 'Grass Gain +1'
    },
    meatGain: {
        cost: 50,
        progress: 5,
        repeat: -2,
        descr: 'You now produce more grass every 10 seconds.',
        name: 'Meat Gain +1'
    },
    colourMutation: {
        cost: 1000000,
        progress: 150,
        repeat: 252,
        descr: 'Increases colour mutations when breeding animals.',
        name: 'Coloured Fur'
    },
    colourEggs: {
        cost: 100,
        progress: 30,
        repeat: 254,
        descr: 'Eggs can hatch animals with colours.',
        name: 'Coloured Eggs'
    },
    toleranceMutation: {
        cost: 5000,
        progress: 150,
        repeat: 9,
        descr: 'Increases animals tolerance to disease.',
        name: 'Immune System'
    },
    eggSpeed: {
        cost: 15000,
        progress: 50,
        repeat: 9,
        descr: 'Eggs now hatch faster.',
        name: 'Better Incubators'
    },
    tier2: {
        cost: 10000,
        progress: 20,
        repeat: 0,
        descr: 'Unlocks tier 2 animals from eggs.',
        name: 'Tier-2 Animals'
    },
    tier3: {
        cost: 5000000,
        progress: 500,
        repeat: 0,
        descr: 'Unlocks tier 3 animals from eggs.',
        name: 'Tier-3 Animals'
    },
    // bargain: {
    //     cost: 100000000,
    //     progress: 1000,
    //     repeat: 0,
    //     descr: 'Reduces the cost for breeding and buying eggs.',
    //     name: 'Tier-2 Animals'
    // }
};
/*--------------- MISC ---------------*/
function rndNum(min, max) {
    return Math.random() * (max - min) + min;
}
function rndInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function rndProb(prob) {
    if (rndInt(0, 100) < prob)
        return true;
    return false;
}
function average(num1, num2) {
    return (num1 + num2) / 2;
}
function hexadecimal(num, length) {
    let res = num.toString(16);
    if (res.length > length) {
        return res.slice(0, length);
    }
    while (res.length < length) {
        res = "0" + res;
    }
    return res;
}
function arrayUnique(array) {
    var a = array.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
}
function shortenNumber(num) {
    let ending = '';
    let abbreviatedNumber = num;
    if (num > 1000000000000000) {
        abbreviatedNumber = Math.round(num / 10000000000000);
        abbreviatedNumber = abbreviatedNumber / 100;
        ending = 'QD';
    }
    else if (num > 1000000000000) {
        abbreviatedNumber = Math.round(num / 10000000000);
        abbreviatedNumber = abbreviatedNumber / 100;
        ending = 'T';
    }
    else if (num > 1000000000) {
        abbreviatedNumber = Math.round(num / 10000000);
        abbreviatedNumber = abbreviatedNumber / 100;
        ending = 'B';
    }
    else if (num > 1000000) {
        abbreviatedNumber = Math.round(num / 10000);
        abbreviatedNumber = abbreviatedNumber / 100;
        ending = 'M';
    }
    else if (num > 1000) {
        abbreviatedNumber = Math.round(num / 10);
        abbreviatedNumber = abbreviatedNumber / 100;
        ending = 'K';
    }
    return `${abbreviatedNumber}${ending}`;
}
function colourValue(colour) {
    let value = 0;
    let r = colour[0];
    let g = colour[1];
    let b = colour[2];
    if (r > 252) {
        value += 3;
    }
    else {
        value += r / 100;
    }
    if (g > 252) {
        value += 3;
    }
    else {
        value += g / 100;
    }
    if (b > 252) {
        value += 3;
    }
    else {
        value += b / 100;
    }
    return value;
}
/*--------------- DISEASE ---------------*/
class Disease {
    constructor(lethality, infectivity, severity, countdown) {
        this.lethality = lethality;
        this.infectivity = infectivity;
        this.severity = severity;
        this.countdown = countdown;
    }
    mutate() {
        let mutCount = rndInt(1, 3);
        let lethality = this.lethality;
        let infectivity = this.infectivity;
        let severity = this.severity;
        for (mutCount; mutCount > 0; mutCount--) {
            let mutation = rndInt(1, 3);
            if (mutation == 1) {
                lethality -= rndInt(0, 5);
            }
            else if (mutation == 2) {
                infectivity += rndInt(0, 2);
            }
            else {
                severity += rndInt(0, 5);
            }
        }
        return new Disease(lethality, infectivity, severity, lethality);
    }
}
function generateDisease(progress) {
    let lethality = Math.ceil(300 - (progress + rndNum(0, progress)) * 2);
    let infectivity = progress;
    let severity = progress + rndInt(0, progress);
    return new Disease(lethality, infectivity, severity, lethality);
}
/*--------------- NATURE ---------------*/
class Nature {
    constructor(tolerance, sociality, enhance) {
        this.tolerance = tolerance;
        this.sociality = sociality;
        this.enhance = enhance;
    }
    mutate() {
        let mutCount = rndInt(2, 3);
        let enhanceMut = 3;
        for (mutCount; mutCount > 0; mutCount--) {
            let mutation = rndInt(1, enhanceMut);
            if (mutation == 1) {
                this.tolerance += rndInt(0, game.unlockedUpgrades.toleranceMutation);
            }
            else if (mutation == 2) {
                this.sociality += rndInt(-1, 1);
            }
            else {
                this.enhance += rndInt(0, 1);
                enhanceMut -= 1;
            }
        }
        this.sociality = Math.max(this.sociality, 1);
    }
}
/*--------------- ANIMAL ---------------*/
class Animal {
    constructor(name, colour, rarity, level, nature, diet, sickness = null, value, hunger, ancestory) {
        this.name = name;
        this.colour = colour;
        this.rarity = rarity;
        this.level = level;
        this.nature = nature;
        this.diet = diet;
        this.sickness = sickness;
        this.value = value;
        this.hunger = hunger;
        this.ancestory = ancestory;
        if (rarity > 16777215) {
            rarity = 16777215;
        }
        let reduction = 0;
        if (this.sickness != null) {
            reduction = this.sickness.severity;
        }
        this.income = Math.max(Math.round((colourValue(colour) + Math.round(level)) * rarity - reduction), 1);
        if (hasLoaded) {
            this.updateIncome();
        }
    }
    infect(disease) {
        if (disease.infectivity > this.nature.tolerance) {
            this.sickness = disease;
            this.updateIncome();
            return true;
        }
        return false;
    }
    socialBoost() {
        let total = game.getSocial(this.ancestory[0]);
        let boost = 1;
        if (total == this.nature.sociality) {
            boost = 1.5;
        }
        else if (total > this.nature.sociality) {
            boost = 0.5;
        }
        return boost;
    }
    // public specialEffects() {
    //     let effect = false
    //     let start = '#222'
    //     let end = '#fff'
    //     if (this.rarity > 300) {
    //     }
    //     let effectData = {
    //         effect: effect,
    //         start: start,
    //         end: end
    //     }
    // }
    cure() {
        this.sickness = null;
    }
    feed() {
        this.hunger += 1;
        if (this.hunger >= this.nature.enhance * this.level) {
            this.level += 1;
            this.hunger = 0;
            this.updateIncome();
        }
    }
    breed(partner) {
        game.progress += 1;
        // Diet and Ancestory
        let diet;
        let ancestory = arrayUnique(this.ancestory.concat(partner.ancestory));
        let dietCount = [0, 0];
        for (let i of ancestory) {
            console.log(i);
            if (AllAnimals[i].diet == Diet.Carnivore) {
                dietCount[0] += 1;
            }
            else {
                dietCount[1] += 1;
            }
        }
        if (dietCount[0] > dietCount[1]) {
            diet = Diet.Carnivore;
        }
        else if (dietCount[1] > dietCount[0]) {
            diet = Diet.Herbivore;
        }
        else {
            diet = rndInt(0, 1) == 1 ? Diet.Carnivore : Diet.Herbivore;
        }
        //Name
        let ancestorBase = ancestory.splice(0, 1)[0];
        let name;
        if (this.name == partner.name) {
            name = this.name;
        }
        else {
            name = AllAnimals[ancestorBase].prefix;
            for (let animal of ancestory) {
                name += AllAnimals[animal].suffix;
            }
        }
        ancestory.unshift(ancestorBase);
        // Colour
        let r = Math.round(average(this.colour[0], partner.colour[0]));
        let g = Math.round(average(this.colour[1], partner.colour[1]));
        let b = Math.round(average(this.colour[2], partner.colour[2]));
        let colour = [r, g, b];
        // Rarity
        let rarity = Math.round(average(this.rarity, partner.rarity));
        rarity += this.level - 1 + partner.level - 1;
        // Nature
        let tolerance = Math.round(average(this.nature.tolerance, partner.nature.tolerance));
        let sociality = Math.round(average(this.nature.sociality, partner.nature.sociality));
        let enhance = Math.round(average(this.nature.enhance, partner.nature.enhance));
        let nature = new Nature(tolerance, sociality, enhance);
        // Mutations
        let mutCount = rndInt(3, 10);
        for (mutCount; mutCount > 0; mutCount--) {
            let mutation = rndInt(1, 3);
            // Colour Mutation
            if (mutation == 1) {
                r += rndInt(-game.unlockedUpgrades.colourMutation, game.unlockedUpgrades.colourMutation);
                g += rndInt(-game.unlockedUpgrades.colourMutation, game.unlockedUpgrades.colourMutation);
                b += rndInt(-game.unlockedUpgrades.colourMutation, game.unlockedUpgrades.colourMutation);
                colour = [Math.max(0, Math.min(r, 255)), Math.max(0, Math.min(g, 255)), Math.max(0, Math.min(b, 255))];
                continue;
            }
            // Rarity Mutation
            if (mutation == 2) {
                rarity += rndInt(-rarity / 20, rarity / 20);
                break;
            }
            // Nature Mutation
            if (mutation == 3) {
                nature.mutate();
                continue;
            }
        }
        return new Animal(name, colour, rarity, 1, nature, diet, null, 0, 0, ancestory);
    }
    get genome() {
        let name = this.name;
        let diet = this.diet == Diet.Carnivore ? "|c" : "|h";
        let r = hexadecimal(this.colour[0], 2);
        let g = hexadecimal(this.colour[1], 2);
        let b = hexadecimal(this.colour[2], 2);
        let rarity = hexadecimal(this.rarity, 6);
        let level = hexadecimal(this.level, 1);
        let tolerance = hexadecimal(this.nature.tolerance, 6);
        let sociality = hexadecimal(this.nature.sociality, 6);
        let enhance = hexadecimal(this.nature.enhance, 4);
        let lethality = this.sickness != null ? hexadecimal(this.sickness.lethality, 6) : "000000";
        let infectivity = this.sickness != null ? hexadecimal(this.sickness.infectivity, 6) : "000000";
        let severity = this.sickness != null ? hexadecimal(this.sickness.severity, 6) : "000000";
        let countdown = this.sickness != null ? hexadecimal(this.sickness.countdown, 3) : "000";
        let value = hexadecimal(this.value, 7);
        let hunger = hexadecimal(this.hunger, 4);
        let ancestory = "";
        for (let animal of this.ancestory) {
            ancestory += AnimalCode[animal];
        }
        let genome = name + diet + r + g + b + rarity + level + tolerance + sociality + enhance + lethality + infectivity + severity + countdown + value + hunger + ancestory;
        return genome;
    }
    kill() {
        removeAnimal(this.genome);
        game.removeAnimal(this);
    }
    sell() {
        game.coins += this.value;
        this.kill();
    }
    tick() {
        this.value += this.income;
        if (this.sickness != null) {
            this.sickness.countdown -= 1;
            if (this.sickness.countdown <= 0) {
                this.kill();
            }
        }
        return 0;
    }
    updateIncome() {
        let reduction = 0;
        if (this.sickness != null) {
            reduction = this.sickness.severity;
        }
        this.income = Math.max(Math.round(((colourValue(this.colour) + Math.round(this.level)) * this.rarity) * this.socialBoost()) - reduction, 1);
    }
}
class Egg {
    constructor(duration = 10) {
        this.duration = duration;
    }
    tick() {
        this.duration -= 1;
        if (this.duration < 1) {
            return this.hatch();
        }
        return 0;
    }
    hatch() {
        let selection = 0;
        selection = rndInt(0, game.unlockedUpgrades.tier);
        let animalName;
        if (selection == 1) {
            animalName = Tier2Animals[rndInt(0, Tier2Animals.length - 1)];
        }
        else if (selection == 2) {
            animalName = Tier3Animals[rndInt(0, Tier3Animals.length - 1)];
        }
        else {
            animalName = BaseAnimals[rndInt(0, Tier2Animals.length - 1)];
        }
        let baseAnimal = AllAnimals[animalName];
        return new Animal(animalName, [rndInt(0, game.unlockedUpgrades.colourEggs), rndInt(0, game.unlockedUpgrades.colourEggs), rndInt(0, game.unlockedUpgrades.colourEggs)], baseAnimal.rarity, 1, new Nature(baseAnimal.tolerance, baseAnimal.sociality, 1), baseAnimal.diet, null, 0, 0, [animalName]);
    }
    infect(disease) {
        return;
    }
    get genome() {
        return `egg|${this.duration}`;
    }
}
function decodeGenome(rawGenome) {
    let name = rawGenome.split('|')[0];
    let genome = rawGenome.split('|')[1];
    if (name == 'egg') {
        return new Egg(parseInt(genome));
    }
    // Hippopotamus|c 00 00 00 000005 1 000002 000003 0000 0000000000000000000000000028hi
    let diet = genome[0] == "c" ? Diet.Carnivore : Diet.Herbivore;
    let r = parseInt(genome.slice(1, 3), 16); //2
    let g = parseInt(genome.slice(3, 5), 16); //2
    let b = parseInt(genome.slice(5, 7), 16); //2
    let rarity = parseInt(genome.slice(7, 13), 16); //6
    let level = parseInt(genome.slice(13, 14), 16); //1
    let tolerance = parseInt(genome.slice(14, 20), 16); //6
    let sociality = parseInt(genome.slice(20, 26), 16); //6
    let enhance = parseInt(genome.slice(26, 30), 16); //4
    let lethality = parseInt(genome.slice(30, 36), 16); //6
    let infectivity = parseInt(genome.slice(36, 42), 16); //6
    let severity = parseInt(genome.slice(42, 48), 16); //6
    let countdown = parseInt(genome.slice(48, 51), 16); //3
    let value = parseInt(genome.slice(51, 58), 16); //7
    let hunger = parseInt(genome.slice(58, 62), 16); //4
    let disease;
    if (lethality == 0 && infectivity == 0 && severity == 0 && countdown == 0) {
        disease = null;
    }
    else {
        disease = new Disease(lethality, infectivity, severity, countdown);
    }
    let ancestory = [];
    let ancestoryGenome = genome.slice(62);
    for (let char = 0; char < ancestoryGenome.length; char += 2) {
        ancestory.push(AnimalCode[`${ancestoryGenome[char]}${ancestoryGenome[char + 1]}`]);
    }
    return new Animal(name, [r, g, b], rarity, level, new Nature(tolerance, sociality, enhance), diet, disease, value, hunger, ancestory);
}
class Game {
    constructor(progress, coins, animals, enhancementItems, upgrds) {
        this.progress = progress;
        this.coins = coins;
        this.animals = animals;
        this.enhancementItems = enhancementItems;
        this.upgrds = upgrds;
        this.gameView = new GameView(coins, enhancementItems.meat, enhancementItems.grass, progress, animals);
        GameEventHandler();
    }
    save() {
        let animalData = [];
        for (let animal of this.animals) {
            animalData.push(animal.genome);
        }
        let data = {
            progress: this.progress,
            coins: this.coins,
            animals: animalData,
            enhancementItems: this.enhancementItems,
            upgrades: this.upgrds
        };
        localStorage.setItem('02', JSON.stringify(data));
    }
    addAnimal(organism) {
        this.animals.push(organism);
        this.gameView.addCard(organism);
        this.updateIncome();
        this.gameView.update();
    }
    removeAnimal(organism) {
        this.animals.splice(this.animals.indexOf(organism), 1);
        this.gameView.removeCard(organism);
        this.updateIncome();
        this.gameView.update();
    }
    getSocial(baseAnimal) {
        let total = 0;
        for (let animal of this.animals) {
            if (animal instanceof Animal) {
                if (animal.ancestory[0] == baseAnimal) {
                    total += 1;
                }
            }
        }
        return total;
    }
    updateIncome() {
        for (let animal of game.animals) {
            if (animal instanceof Animal) {
                animal.updateIncome();
            }
        }
    }
    tick() {
        let animals = [...this.animals];
        for (let animal of animals) {
            let tick = animal.tick();
            if (tick != 0) {
                this.removeAnimal(animal);
                sendAnimal(tick.genome);
                this.addAnimal(tick);
            }
        }
        this.gameView.update();
    }
    disease() {
        let lethality = rndInt(-game.progress + 300, 300);
        let infectivity = rndInt(1, Math.floor(game.progress / 3));
        let severity = rndInt(5, Math.floor(game.progress));
        let disease = new Disease(lethality, infectivity, severity, lethality);
        this.animals[rndInt(0, this.animals.length - 1)].infect(disease);
        this.animals[rndInt(0, this.animals.length - 1)].infect(disease.mutate());
    }
    get unlockedUpgrades() {
        let animalCount = 5 + this.upgrds.animalCount;
        let grassGain = 1 + this.upgrds.grassGain;
        let meatGain = 1 + this.upgrds.meatGain;
        let tier = this.upgrds.tier2 + this.upgrds.tier3;
        let eggSpeed = this.upgrds.eggSpeed;
        let colourEggs = 4 + this.upgrds.colourEggs;
        let toleranceMutation = 1 + this.upgrds.toleranceMutation;
        let colourMutation = 2 + this.upgrds.colourMutation;
        let data = {
            animalCount: animalCount,
            grassGain: grassGain,
            meatGain: meatGain,
            tier: tier,
            eggSpeed: eggSpeed,
            colourEggs: colourEggs,
            toleranceMutation: toleranceMutation,
            colourMutation: colourMutation
        };
        return data;
    }
    get upgrades() {
        let data = {};
        for (let upgrade of Object.keys(Upgrades)) {
            if (Upgrades[upgrade].progress > game.progress) {
                continue;
            }
            let cost = Upgrades[upgrade].cost * (game.upgrds[upgrade] + 1);
            if (Upgrades[upgrade].repeat >= game.upgrds[upgrade] || Upgrades[upgrade].repeat == -2) {
                data[upgrade] = {
                    cost: cost,
                    descr: Upgrades[upgrade].descr,
                    name: Upgrades[upgrade].name,
                    unlocked: false,
                };
            }
            else if (Upgrades[upgrade].repeat == game.upgrds[upgrade] - 1) {
                data[upgrade] = {
                    cost: 'PURCHASED',
                    descr: Upgrades[upgrade].descr,
                    name: Upgrades[upgrade].name,
                    unlocked: true,
                };
            }
        }
        return data;
    }
    purchaseUpgrade(upgrade) {
        //@ts-ignore: You gotta trust me
        let upgradeData = this.upgrades[upgrade];
        if (this.coins >= upgradeData.cost) {
            this.coins -= upgradeData.cost;
            this.upgrds[upgrade] += 1;
            game.gameView.update();
        }
        refreshShop();
    }
}
class GameView {
    constructor(coins, meat, grass, progress, animals) {
        this.cardHolder = document.getElementById('card-holder');
        //@ts-ignore: These will never be null
        this.coins = document.getElementById('coins');
        this.meat = document.getElementById('meat');
        this.grass = document.getElementById('grass');
        this.breedCost = document.getElementById('breed-cost-info');
        this.eggCost = document.getElementById('egg-cost-info');
        this.cards = new Map();
        for (let animal of animals) {
            this.addCard(animal);
        }
        this.setCoins(coins);
        this.setGrass(grass);
        this.setMeat(meat);
        this.eggCost.innerText = `EGG: ${shortenNumber(20 + progress * 5)}`;
        this.breedCost.innerText = `BREED: ${shortenNumber(progress * 10)}`;
    }
    setCoins(e) {
        this.coins.innerText = shortenNumber(e);
    }
    setMeat(e) {
        this.meat.innerText = e.toString();
    }
    setGrass(e) {
        this.grass.innerText = e.toString();
    }
    addCard(contents) {
        var _a;
        let card = document.createElement('div');
        card.classList.add("card");
        let data = {};
        if (contents instanceof Egg) {
            let name = document.createElement('h1');
            name.innerText = 'egg';
            let duration = document.createElement('h2');
            //@ts-ignore: This is an egg
            duration.innerText = `${contents.duration}`;
            card.classList.add('egg');
            card.appendChild(name);
            card.appendChild(duration);
            card.style.borderColor = `rgb(0,0,0)`;
            data.duration = duration;
        }
        else {
            let scroll = document.createElement("div");
            scroll.classList.add("scroll-x");
            let name = document.createElement("h1");
            name.innerText = contents.name;
            scroll.appendChild(name);
            let rarity = document.createElement('p');
            rarity.innerText = `rarity: ${contents.rarity}`;
            let level = document.createElement('p');
            level.innerText = `level: ${contents.level}`;
            let diet = document.createElement('p');
            diet.classList.add(contents.diet);
            diet.innerText = `${contents.diet}: ${contents.hunger}/${contents.nature.enhance * contents.level}`;
            let income = document.createElement('p');
            income.innerText = `income: ${contents.income}`;
            let social = document.createElement('p');
            social.innerText = `social: 0/${contents.nature.sociality}`;
            let value = document.createElement('p');
            value.innerText = `value: ${contents.value}`;
            card.appendChild(scroll);
            card.appendChild(rarity);
            card.appendChild(level);
            card.appendChild(diet);
            card.appendChild(income);
            card.appendChild(social);
            card.appendChild(value);
            card.addEventListener('click', () => {
                handleCardClick(contents, card);
            });
            card.addEventListener('contextmenu', () => [
                favourite(card)
            ]);
            let colour = contents.colour;
            card.style.borderColor = `rgb(${colour[0]},${colour[1]},${colour[2]})`;
            if (contents.sickness != null) {
                card.classList.add('sick');
            }
            data.level = level;
            data.diet = diet;
            data.income = income;
            data.social = social;
            data.value = value;
            if (currentAction != null) {
                card.classList.add('clickable');
            }
        }
        (_a = this.cardHolder) === null || _a === void 0 ? void 0 : _a.appendChild(card);
        data.elem = card;
        this.cards.set(contents, data);
    }
    removeCard(contents) {
        this.cards.get(contents).elem.remove();
        this.cards.delete(contents);
    }
    updateCard(contents) {
        if (contents instanceof Egg) {
            this.cards.get(contents).duration.innerText = contents.duration;
        }
        else {
            let data = this.cards.get(contents);
            data.level.innerText = `level: ${contents.level}`;
            data.income.innerText = `income: ${shortenNumber(contents.income)}`;
            let total = game.getSocial(contents.ancestory[0]);
            let socialElemInnerHTML = `social: ${game.getSocial(contents.ancestory[0])}/${contents.nature.sociality}`;
            if (total == contents.nature.sociality) {
                socialElemInnerHTML = `social: <span class="light-green">${game.getSocial(contents.ancestory[0])}/${contents.nature.sociality}</span>`;
            }
            else if (total > contents.nature.sociality) {
                socialElemInnerHTML = `social: <span class="grey">${game.getSocial(contents.ancestory[0])}/${contents.nature.sociality}</span>`;
            }
            data.social.innerHTML = socialElemInnerHTML;
            data.value.innerText = `value: ${shortenNumber(contents.value)}`;
            data.diet.innerText = `${contents.diet}: ${contents.hunger}/${contents.nature.enhance * contents.level}`;
            if (contents.sickness != null) {
                this.cards.get(contents).elem.classList.add('sick');
            }
            else {
                this.cards.get(contents).elem.classList.remove('sick');
            }
        }
    }
    update() {
        for (let animal of this.cards.keys()) {
            this.updateCard(animal);
        }
        this.eggCost.innerText = `EGG: ${shortenNumber(20 + game.progress * 5)}`;
        this.breedCost.innerText = `BREED: ${shortenNumber(game.progress * 10)}`;
        this.setCoins(game.coins);
        this.setGrass(game.enhancementItems.grass);
        this.setMeat(game.enhancementItems.meat);
    }
}
/*--------------- GAME EVENTS ---------------*/
function purchaseEgg() {
    if (game.animals.length >= game.unlockedUpgrades.animalCount) {
        notification('NO SPACE', 'You have run out of space for animals. You can get more space by purchasing it from the shop or by selling animals.');
        return;
    }
    if (game.coins >= (20 + game.progress * 5)) {
        game.addAnimal(new Egg(10 - game.unlockedUpgrades.eggSpeed));
        game.coins -= 20 + game.progress * 5;
        game.progress += 1;
        game.gameView.update();
    }
}
function favourite(elem) {
    if (favourites.includes(elem) != true) {
        favourites.push(elem);
    }
    else {
        favourites.splice(favourites.indexOf(elem), 1);
    }
    elem.classList.toggle('favourite');
}
function closeAction() {
    //@ts-ignore: These exists
    let breed = document.getElementById("breed");
    let sell = document.getElementById("sell");
    let feed = document.getElementById('feed');
    currentAction = null;
    breed.classList.remove('selected');
    sell.classList.remove('selected');
    feed.classList.remove('selected');
    for (let animal of game.gameView.cards.entries()) {
        if (animal[0].genome.split('|')[0] == 'egg') {
            continue;
        }
        animal[1].elem.classList.remove('clickable');
        animal[1].elem.classList.remove('shake');
    }
    breedingPartner = null;
}
function toggleBreeding() {
    //@ts-ignore: These exists
    let breed = document.getElementById("breed");
    let sell = document.getElementById("sell");
    let feed = document.getElementById('feed');
    if (currentAction == "Breed") {
        currentAction = null;
        if (breedingPartner != null) {
            game.gameView.cards.get(breedingPartner).elem.classList.remove('selected');
        }
        breed.classList.remove('selected');
        for (let animal of game.gameView.cards.entries()) {
            if (animal[0].genome.split('|')[0] == 'egg') {
                continue;
            }
            animal[1].elem.classList.remove('clickable');
            animal[1].elem.classList.remove('shake');
        }
        breedingPartner = null;
        return;
    }
    else if (currentAction == "Sell" || currentAction == "Feed") {
        sell.classList.remove('selected');
        feed.classList.remove('selected');
        setTimeout(() => {
            breed.classList.add('selected');
        }, 300);
    }
    else {
        breed.classList.add('selected');
    }
    currentAction = "Breed";
    for (let animal of game.gameView.cards.entries()) {
        if (animal[0].genome.split('|')[0] == 'egg') {
            continue;
        }
        animal[1].elem.classList.add('clickable');
        animal[1].elem.classList.remove('shake');
    }
}
function toggleSelling() {
    //@ts-ignore: These exists
    let breed = document.getElementById("breed");
    let sell = document.getElementById("sell");
    let feed = document.getElementById('feed');
    if (currentAction == "Sell") {
        currentAction = null;
        sell.classList.remove('selected');
        for (let animal of game.gameView.cards.entries()) {
            if (animal[0].genome.split('|')[0] == 'egg') {
                continue;
            }
            animal[1].elem.classList.remove('clickable');
            animal[1].elem.classList.remove('shake');
        }
        return;
    }
    else if (currentAction == "Breed" || currentAction == "Feed") {
        breed.classList.remove('selected');
        feed.classList.remove('selected');
        setTimeout(() => {
            sell.classList.add('selected');
        }, 300);
    }
    else {
        sell.classList.add('selected');
    }
    currentAction = "Sell";
    for (let animal of game.gameView.cards.entries()) {
        if (animal[0].genome.split('|')[0] == 'egg') {
            continue;
        }
        if (favourites.includes(animal[1].elem) == true) {
            continue;
        }
        animal[1].elem.classList.add('clickable');
        animal[1].elem.classList.add('shake');
    }
}
function toggleFeeding() {
    if (game.enhancementItems.grass <= 0 && game.enhancementItems.meat <= 0) {
        return;
    }
    //@ts-ignore: These exists
    let breed = document.getElementById("breed");
    let sell = document.getElementById("sell");
    let feed = document.getElementById('feed');
    if (currentAction == "Feed") {
        currentAction = null;
        feed.classList.remove('selected');
        for (let animal of game.gameView.cards.entries()) {
            if (animal[0].genome.split('|')[0] == 'egg') {
                continue;
            }
            animal[1].elem.classList.remove('clickable');
            animal[1].elem.classList.remove('shake');
        }
        return;
    }
    else if (currentAction == "Breed" || currentAction == "Sell") {
        breed.classList.remove('selected');
        sell.classList.remove('selected');
        setTimeout(() => {
            feed.classList.add('selected');
        }, 300);
    }
    else {
        feed.classList.add('selected');
    }
    currentAction = "Feed";
    for (let animal of game.gameView.cards.entries()) {
        if (animal[0].genome.split('|')[0] == 'egg') {
            continue;
        }
        animal[1].elem.classList.add('clickable');
        animal[1].elem.classList.remove('shake');
    }
}
function refreshShop() {
    let shop = document.getElementById('shop');
    let shopItems = document.getElementsByClassName('shop-item');
    while (shopItems[0]) {
        shopItems[0].remove();
    }
    for (let upgrade of Object.keys(game.upgrades)) {
        let shopItemElem = document.createElement('div');
        shopItemElem.classList.add('shop-item');
        let shopItemName = document.createElement('h3');
        let shopItemDescr = document.createElement('p');
        let shopItemCost = document.createElement('p');
        //@ts-ignore: This will work because we just got the keys
        shopItemName.innerText = game.upgrades[upgrade].name;
        shopItemDescr.innerText = game.upgrades[upgrade].descr;
        shopItemCost.innerText = shortenNumber(game.upgrades[upgrade].cost);
        shopItemName.classList.add('shop-item-name');
        shopItemDescr.classList.add('shop-item-descr');
        shopItemCost.classList.add('shop-item-cost');
        //@ts-ignore: Again, we just got keys
        if (game.upgrades[upgrade].unlocked) {
            shopItemElem.classList.add('enabled');
        }
        shopItemElem.appendChild(shopItemName);
        shopItemElem.appendChild(shopItemDescr);
        shopItemElem.appendChild(shopItemCost);
        shopItemElem.addEventListener('click', () => {
            game.purchaseUpgrade(upgrade);
        });
        shop === null || shop === void 0 ? void 0 : shop.appendChild(shopItemElem);
    }
}
function toggleShop() {
    refreshShop();
    let shop = document.getElementById('shop');
    shop === null || shop === void 0 ? void 0 : shop.classList.toggle('enabled');
}
function togglePause() {
    //@ts-ignore: Trust me bro
    let pauseImg = document.getElementById('pause-img');
    if (unpaused == true) {
        unpaused = false;
        pauseImg.src = 'imgs/play.png';
    }
    else {
        unpaused = true;
        pauseImg.src = 'imgs/pause.png';
    }
}
function toggleSearch() {
    var _a;
    closeAction();
    //@ts-ignore: This exists
    let search = document.getElementById('search');
    let act = document.getElementById('actions');
    if (searchBar) {
        searchBar = false;
        search.classList.remove('enabled');
        act.classList.remove('enabled');
    }
    else {
        searchBar = true;
        search.classList.add('enabled');
        (_a = document.getElementById('search-input')) === null || _a === void 0 ? void 0 : _a.focus();
        act.classList.add('enabled');
    }
}
function notification(header, details) {
    let notification = document.getElementById('notification');
    let notificationHeader = document.getElementById('notification-head');
    let notificationDetails = document.getElementById('notification-details');
    //@ts-ignore: You got to trust me
    let main = document.getElementById('main');
    //@ts-ignore: These exist
    notificationHeader.innerText = header;
    notificationDetails === null || notificationDetails === void 0 ? void 0 : notificationDetails.innerText = details;
    notification === null || notification === void 0 ? void 0 : notification.classList.add('enabled');
    main.style.opacity = '0.2';
    main.style.pointerEvents = 'none';
    setTimeout(() => {
        notification === null || notification === void 0 ? void 0 : notification.classList.remove('enabled');
        main.style.opacity = '1';
        main.style.pointerEvents = 'all';
    }, 3000);
}
function handleCardClick(organism, elem) {
    // BREEDING
    if (currentAction == "Breed") {
        if (game.animals.length >= game.unlockedUpgrades.animalCount) {
            notification('NO SPACE', 'You have run out of space for animals. You can get more space by purchasing it from the shop or by selling animals.');
            return;
        }
        if (game.coins < game.progress * 10) {
            return;
        }
        if (breedingPartner == null) {
            breedingPartner = organism;
            game.gameView.cards.get(organism).elem.classList.add('selected');
        }
        else if (breedingPartner == organism) {
            breedingPartner = null;
            game.gameView.cards.get(organism).elem.classList.remove('selected');
        }
        else {
            game.coins -= game.progress * 10;
            let outcome = breedingPartner.breed(organism);
            game.addAnimal(outcome);
            sendAnimal(outcome.genome);
            game.gameView.cards.get(breedingPartner).elem.classList.remove('selected');
            breedingPartner = null;
        }
        // SELLING
    }
    else if (currentAction == "Sell") {
        if (favourites.includes(elem) == true) {
            return;
        }
        organism.sell();
        // FEEDING
    }
    else if (currentAction == "Feed") {
        let diet;
        if (organism.diet == Diet.Carnivore) {
            diet = "meat";
        }
        else {
            diet = "grass";
        }
        if (game.enhancementItems[diet] >= 1) {
            organism.feed();
            game.enhancementItems[diet] -= 1;
            while (organism.hunger > 0 && game.enhancementItems[diet] > 0) {
                organism.feed();
                game.enhancementItems[diet] -= 1;
            }
        }
    }
    game.gameView.update();
}
function GameEventHandler() {
    //@ts-ignore: This exists
    let eggPurchase = document.getElementById('purchase-egg');
    eggPurchase.addEventListener('click', purchaseEgg);
    //@ts-ignore: These exists
    let breed = document.getElementById("breed");
    let sell = document.getElementById("sell");
    let feed = document.getElementById('feed');
    let shop = document.getElementById('shop-button');
    let pause = document.getElementById('pause');
    let searchButton = document.getElementById('search-button');
    let search = document.getElementById('search-input');
    let restart = document.getElementById('restart');
    let bin = document.getElementById('bin');
    breed.addEventListener('click', toggleBreeding);
    sell.addEventListener('click', toggleSelling);
    feed.addEventListener('click', toggleFeeding);
    shop.addEventListener('click', toggleShop);
    pause.addEventListener('click', togglePause);
    searchButton.addEventListener('click', toggleSearch);
    bin.addEventListener('click', () => {
        for (let animal of game.animals) {
            if (animal.genome.split('|')[0] != "egg") {
                //@ts-ignore: This is an animal
                animal.sell();
            }
        }
    });
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'Enter':
                toggleSearch();
                break;
            default:
                break;
        }
    });
    search.addEventListener('input', () => {
        for (let animal of game.gameView.cards.keys()) {
            if (search.value == "") {
                game.gameView.cards.get(animal).elem.classList.remove('hidden');
                continue;
            }
            if (animal.genome.split('|')[0].toLowerCase().includes(search.value.toLowerCase()) != true) {
                game.gameView.cards.get(animal).elem.classList.add('hidden');
            }
            else {
                game.gameView.cards.get(animal).elem.classList.remove('hidden');
            }
        }
    });
    restart.addEventListener('click', () => {
        localStorage.removeItem('02');
        window.location.reload();
    });
    setInterval(() => {
        if (unpaused) {
            game.tick();
        }
    }, 1500);
    setInterval(() => {
        if (unpaused) {
            game.enhancementItems.grass += (game.unlockedUpgrades.grassGain);
            game.enhancementItems.meat += (game.unlockedUpgrades.meatGain);
            if (lastInfection == 0) {
                game.disease();
                lastInfection = 3;
            }
            else {
                lastInfection -= 1;
            }
        }
        game.save();
    }, 10000);
}
/*--------------- INITIALIZATION ---------------*/
let game;
let currentAction = null;
let breedingPartner = null;
let favourites = [];
let unpaused = true;
let searchBar = false;
let lastInfection = 3;
let hasLoaded = false;
if (localStorage.getItem('02') != null) {
    //@ts-ignore: Just checked if it is null
    let saveData = JSON.parse(localStorage.getItem('02'));
    let animals = [];
    for (let animal of saveData.animals) {
        animals.push(decodeGenome(animal));
    }
    game = new Game(saveData.progress, saveData.coins, animals, saveData.enhancementItems, saveData.upgrades);
}
else {
    game = new Game(0, 100, [], { meat: 0, grass: 0 }, { animalCount: 0, grassGain: 0, meatGain: 0, tier2: 0, tier3: 0, eggSpeed: 0, colourMutation: 0, colourEggs: 0, toleranceMutation: 0 });
}
hasLoaded = true;
game.updateIncome();
/*--------------- COMMUNISM ---------------*/
let socket = new WebSocket(`ws://10.48.164.6:8080`);
socket.onopen = function () {
    console.log("[open] Connection established");
    console.log("Sending to server");
};
socket.onmessage = (event) => {
    console.log(event.data);
    let purpose = event.data.split(" ");
    if (purpose[0] == "animal") {
        console.log(purpose[1]);
        game.addAnimal(decodeGenome(purpose[1]));
    }
    else if (purpose[0] == "delete") {
        console.log(purpose[1]);
        for (let animal of game.animals) {
            if (animal.genome == purpose[1]) {
                game.removeAnimal(animal);
                break;
            }
        }
    }
};
socket.onclose = function (event) {
    if (event.wasClean) {
        console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    }
    else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        console.log('[close] Connection died');
    }
};
function sendAnimal(genome) {
    socket.send(`animal ${genome}`);
}
function removeAnimal(genome) {
    socket.send(`delete ${genome}`);
}
socket.onerror = function (error) {
    console.log(`[error]`);
};
