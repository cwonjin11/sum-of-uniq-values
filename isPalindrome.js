var isPalindrome = function(x) {

    let reverse = []
    
    for (let i = x.length-1; i > -1; i--){
        reverse.push(x[i])
    }
    return x === reverse.join("")
};

console.log(isPalindrome("12231"))