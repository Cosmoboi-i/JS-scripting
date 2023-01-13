const isPrime = (n) => {

    let sum = 0;
    for (let i = 2; i <= n/2; i++) {
        if (n %i === 0) sum++;
    }
    return (sum === 0)? `${n} is prime` : `${n} is not prime`
}

const isArmstrong = (n) => {

    let m = n;
    let k = 0;

    while(m) {
        let x = m % 10;
        k += x*x*x;
        m = Math.floor(m / 10);
    }

    return (n === k)? `${n} is armstrong` : `${n} is not armstrong`
}

console.log(isPrime(4))
console.log(isArmstrong(152))