// Create a custom map function that works similarly to the built-in Array.prototype.map. It should apply a given transformation function to each element of an array and return a new array with the transformed values

function customMap<T, U>(arr: T[], transform: (item: T) => U): U[] {
    const result: U[] = [];
    for (const item of arr) {
        result.push(transform(item));
    }
    return result;
}

// Example usage:
const numbers = [1, 2, 3, 4];
const squaredNumbers = customMap(numbers, (num) => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16]
