function countCharacters(str:string):{[key:string]:number} {
      const counts:{[key:string]:number}={};
      for(const char of str){
          counts[char]=(counts[char]||0)+1;
      }
      return counts;
}
console.log(countCharacters("hello world")); 
//Output:{h :1,e :1,l :3,o :2,w :1,r :1,d :1}
