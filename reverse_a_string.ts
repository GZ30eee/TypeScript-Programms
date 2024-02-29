function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

const inputStr = "typescript";
console.log(`Reversed string: ${reverseString(inputStr)}`);
