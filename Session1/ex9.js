function arrayToList(array) {
    if(array.length === 1) {
        return {
            value: array.shift(),
            rest: null
        }
    }

    let list = {
        value: array.shift(),
        rest: arrayToList(array)
    }

    return list
}

function listToArray(list) {
    let array = []

    while(list !== null) {
        array.push(list.value)
        list = list.rest 
    }

    return array
}

function prepend(valueAdd, listAdd) {
    let list = {
        value: valueAdd,
        rest: listAdd
    }

    return list
}

function getNth(n, list) {
    for(let i = 0; i < n; i++) {
        list = list.rest

        if(list === null) {
            return undefined
        }
    }

    return list.value
}

console.log(arrayToList([10,20]))
console.log(getNth(3, prepend(7, arrayToList([10,20]))))