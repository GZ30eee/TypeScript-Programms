function getRandomInt(min: number, max: number): number {
       return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   console.log(getRandomInt(1 ,100)); // Output :Random integer between [1 ,100]
