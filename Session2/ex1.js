function squareList(array) {
    return array.filter(i => Number.isInteger(i) && i > 0).map(x => x * x)
}

console.log(squareList([-3, 4.8, 5, 3, -3.2]))