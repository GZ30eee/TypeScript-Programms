function uniqueElements<T>(arr:T[]): T[] {
       return [...new Set(arr)];
   }

   console.log(uniqueElements([1 ,2 ,2 ,3 ,4 ,4])); // Output :[1 ,2 ,3 ,4]
