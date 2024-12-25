function flattenArray(arr: any[]): any[] {
       return arr.reduce((flatArray, item) => 
           flatArray.concat(Array.isArray(item) ? flattenArray(item) : item), []);
   }

   console.log(flattenArray([1,[2,[3,[4]]]])); // Output:[1 ,2 ,3 ,4]
