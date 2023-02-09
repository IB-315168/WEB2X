function fizzBuzz(scale) {
    for(let i = 1; i <= scale; i++){
        let str = ""

        if(i%3 === 0) {
            str += "Fizz"
        } 

        if(i%5 === 0) {
            str += "Buzz"
        }

        if(str.length === 0) {
            str = i;
        }

        console.log(str);
    }
}

fizzBuzz(15);