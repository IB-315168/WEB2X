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

console.log(listToArray(arrayToList([10,20])))