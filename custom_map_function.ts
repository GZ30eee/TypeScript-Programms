function customMap<T, U>(arr: T[], callback: (item: T) => U): U[] {
       const result: U[] = [];
       for (let i = 0; i < arr.length; i++) {
           result.push(callback(arr[i]));
       }
       return result;
   }
   console.log(customMap([1,2,3], x => x * x)); // Output: [1,4,9]
