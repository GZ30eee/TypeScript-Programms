function countVowels(str: string): number {
       const matches = str.match(/[aeiou]/gi);
       return matches ? matches.length : 0;
   }
   console.log(countVowels("Hello World")); // Output: 3
