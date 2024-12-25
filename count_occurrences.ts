function countOccurrences(arr: any[], value: any): number {
       return arr.filter(item => item === value).length;
   }

   console.log(countOccurrences([1 ,2 ,3 ,4 ,2 ,5],2)); // Output :2
