// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function catNames(names) {
    return("Cat names:", names);
}

function destructivelyAppendCat(names) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(names) {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(names) {
    return cats.pop();
}

function destructivelyRemoveFirstCat(names) {
    return cats.shift();
}

const cats2 = [...cats, "Broom"];

function appendCat(names) {
    return cats2;
}

const cats3 = ["Arnold", ...cats]

function prependCat(names) {
    return cats3;
}

const cats4 = cats.slice(0, 2);

function removeLastCat(names) {
    return cats4;
}

const cats5 = cats.slice(1, 3)

function removeFirstCat(names) {
    return cats5;
}