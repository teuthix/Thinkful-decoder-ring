// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    /* 
    for each letter in the input, find the letter in the alphabet
    then find the corresponding letter in the substitution alphabet (indexOf?)
    */
   if(!alphabet) return false;
   if(alphabet.length < 25) return false;
   //how to find repeat characters in the alphabet
   //
   for(let i = 0; i<26; i++){
     let temp = [];
    for(let j = 0; j<26; j++){ 
      if(alphabet[i] === alphabet[j]){
        temp.push(alphabet[i]);
        if(temp.length>1){
          return false;
        };
      };
    };
  };
    
    let lowercase = "";
    const origAlphabet = "abcdefghijklmnopqrstuvqxyz";
    
    for(let i=0; i<input.length; i++){
      const chara = input[i];
      lowercase += chara.toLowerCase();
    }; //"the test title"

    let result = "";
    if(encode === true){
      for(let i=0; i<lowercase.length; i++){
        for(let j=0; j<alphabet.length; j++){
          if(lowercase[i] === origAlphabet[j]){
              const location = origAlphabet.search(lowercase[i]);
              result += alphabet[location];
            };
          };
          if(lowercase[i] === " "){
            result += " ";
          };
        };
      };
      if(encode === false){
        for(let i=0; i<lowercase.length; i++){
          for(let j=0; j<alphabet.length; j++){
            if(lowercase[i] === alphabet[j]){
              result += origAlphabet[j];
            };
          };
          if(lowercase[i] === " "){
            result += " "
          };
        };
      };
      return result;




    /*
    const origAlphabet = "abcdefghijklmnopqrstuvqxyz";
    let result = "";
    for (let i=0; i<lowercase.length; i++){
      for (let j=0; j<alphabet.length; j++){
        if(lowercase[i] === origAlphabet[j]){
          //const targetLetter = origAlphabet.search(lowercase[i]);
          result += alphabet[j];
        } else{
          result += lowercase[i];
          break;
        };
      };
    };
   return result;
    */
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
