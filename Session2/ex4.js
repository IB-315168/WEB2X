const letters = ["a", "d", "c", "a", "z", "g"]

function alphabeticalOrder(array) {
    return array.map(array.sort((a, b) => a - b))
}

console.log(alphabeticalOrder(letters))
// → ["a", "a", "c", "d", "g", "z"]
console.log(letters)
// → [ "a", "d", "c", "a", "z", "g"]
