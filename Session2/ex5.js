function urlSlug(title) {
    return title.toLowerCase().split("").map((x) => { if(x === ' ') {
        return '-'
    } else {
        return x
    }}).join("")
}

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))