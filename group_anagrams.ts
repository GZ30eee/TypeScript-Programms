function groupAnagrams(words:string[]): string[][] {
      const anagramsMap:{[key:string]:string[]}={};

      words.forEach(word=>{
          const sortedWord=word.split('').sort().join('');
          if(!anagramsMap[sortedWord]) anagramsMap[sortedWord]=[];
          anagramsMap[sortedWord].push(word);
      });

      return Object.values(anagramsMap);
}

console.log(groupAnagrams(["eat" ,"tea" ,"tan" ,"ate" ,"nat" ,"bat"])); 
//Output:[["eat","tea","ate"],["tan","nat"],["bat"]]
