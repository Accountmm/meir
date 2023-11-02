function value(...comminString) {
    let numbers =  comminString 
    if (numbers.length > 2) {
        return numbers.slice(1,-1)
    }else {
        return "null"
    }
}
console.log(value(1,2));

