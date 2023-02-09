function range(start, end) {
    rangeWithStep(start, end, 1)
}

function rangeWithStep(start, end, step) {
    let arr = []

    if(step > 0) {
        for(start; start <= end; start += step) {
            arr.push(start)
        }
    }

    if(step < 0) {
        for(start; start >= end; start += step) {
            arr.push(start)
        }
    }

    return arr
}

function sum(numbers) {
    let sum = 0

    for(const num of numbers) {
        sum += num
    }

    return sum
}

console.log(sum(rangeWithStep(5,2,-1)));