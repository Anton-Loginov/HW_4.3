'use strict';

const power = (x,n) => {
    if(n === 0) {
        return 1;
    }

    if(n < 0) {
        return 1 / (power(x, Math.abs(n)));
    }

    return x * power(x, n-1);
};

console.log(power(2.00000,10));
console.log(power(2.10000,3));
console.log(power(2.00000,-2));




