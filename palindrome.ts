function isPalindrome(str: string): boolean {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

const inputString = "racecar";
console.log(`Is "${inputString}" a palindrome? ${isPalindrome(inputString)}`);
