function countBs(text) {
    let counter = 0

    for(const char of text) {
        counter += char === "B"
    }

    return counter
}

function countChar(text, char) {
    let counter = 0

    for(const character of text) {
        counter += character === char
    }

    return counter
}

console.log(countBs("Big Black box"));
console.log(countChar("character c is the awecomest", "c"));