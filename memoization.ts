// Implement a memoization function that caches the results of expensive function calls to improve performance. Use an object to store previously computed values
function memoize<T, U>(func: (arg: T) => U): (arg: T) => U {
    const cache = new Map<T, U>();
    return (arg: T) => {
        if (cache.has(arg)) {
            return cache.get(arg)!;
        }
        const result = func(arg);
        cache.set(arg, result);
        return result;
    };
}

// Example usage:
const expensiveComputation = (n: number): number => {
    console.log(`Computing for ${n}`);
    return n * 2;
};

const memoizedComputation = memoize(expensiveComputation);
console.log(memoizedComputation(5)); // Computes and caches
console.log(memoizedComputation(5)); // Retrieves from cache
