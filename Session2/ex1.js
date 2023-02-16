function squareList(array) {
    return array.filter(i => typeof i == Number).map(x => x * x)
}

console.log(squareList([1,2,3]))