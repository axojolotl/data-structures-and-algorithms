// return true if a positive integer whose prime factors are limited to 2, 3, and 5.

const isUgly = n => {
    if (n < 1) return false;
    
    for (let i of [2,3,5]){
        n = divider(n, i)
    } return n == 1;
};

const divider = (dividend, divisor) => {
    while (dividend % divisor == 0) dividend /= divisor;
    return dividend
}

