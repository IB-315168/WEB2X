function flatten(array) {
    return array.reduce((array,p) => array.concat(p), [])
}

console.log(flatten([[1, 2, 3], [4, 5], [6]]))