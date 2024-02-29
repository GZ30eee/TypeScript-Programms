function generateFibonacci(n: number): number[] {
    const fibSeries: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries;
}

const count = 8;
console.log(`First ${count} Fibonacci numbers: ${generateFibonacci(count).join(', ')}`);
