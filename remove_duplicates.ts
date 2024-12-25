function removeDuplicates<T>(arr:T[]): T[] {
      return Array.from(new Set(arr));
}

console.log(removeDuplicates([1 ,2 ,3 ,4 ,4])); //Output :[1 ,2 ,3 ,4]
