function reverseArray(array) {
    let newArray = []

    for(let i = array.length-1; i >= 0; i--) {
        newArray.push(array[i])
    }

    return newArray
}


function reverseArrayInPlace(array) {
    for(let i = 0; i < array.length; i++) {
        array.splice(i, 1, array.length-i)
    }

    return array
}


console.log(reverseArray([1,2,3,4,5]))
console.log(reverseArrayInPlace([1,2,3,4,5]))