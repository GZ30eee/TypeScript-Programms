function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const testNumber = 17;
console.log(`${testNumber} is${isPrime(testNumber) ? '' : ' not'} a prime number.`);
