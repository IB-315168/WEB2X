function min(...numbers) {
    return numbers[Number(numbers[0] > numbers[1])]
}

console.log(min(-1, -4));