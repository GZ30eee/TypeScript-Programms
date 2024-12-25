function isPalindrome(str: string): boolean {
       const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
       return cleanedStr === cleanedStr.split('').reverse().join('');
   }
   console.log(isPalindrome("A man a plan a canal Panama")); // Output: true
