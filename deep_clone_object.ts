function deepClone<T>(obj: T): T {
       return JSON.parse(JSON.stringify(obj));
   }

   const originalObj = { a: 1, b: { c: [2,3] } };
   const clonedObj = deepClone(originalObj);
   console.log(clonedObj); // Output: { a: 1, b: { c:[2 ,3] } }
