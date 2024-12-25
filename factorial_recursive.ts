function factorial(n: number): number {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
