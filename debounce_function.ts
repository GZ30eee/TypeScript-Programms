function debounce(func: Function, delay: number) {
       let timeoutId: NodeJS.Timeout;

       return function(...args: any[]) {
           clearTimeout(timeoutId);
           timeoutId = setTimeout(() => func.apply(this, args), delay);
       };
   }

   const logMessage = debounce(() => console.log('Debounced!'), 1000);
   logMessage(); // Call this multiple times to see the debouncing in action
