function range(start) {
    return function (end) {
        let array = []

        for(start; start <= end; start++) {
            array.push(start)
        }

        return array
    }
}

let rangeFrom3To = range(3)

console.log(rangeFrom3To(7))