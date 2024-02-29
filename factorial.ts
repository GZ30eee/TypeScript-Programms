function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const num = 5;
console.log(`Factorial of ${num} is ${factorial(num)}`);
