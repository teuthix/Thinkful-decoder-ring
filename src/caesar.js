// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift > 25 || shift < -25){
      return false;
    };

    //make input all lowercase
    let lowercase = "";
    for(let i=0; i<input.length; i++){
      const chara = input[i];
      lowercase += chara.toLowerCase();
    }; //"the test title"

    /*
    if i put the coding into a separate function,
    I think i can use the same code to decode by multiplying shift by -1
    */
   if(encode === false){
    shift = shift * (-1);
   }
   const result = shifting(lowercase, shift, encode = true);

   return result;
  };

  function shifting(title, shiftNumber, encode = true){
    //for each letter, shift down the alphabet however many letters as indicated by shift
    let shiftedString = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(let i=0; i<title.length; i++){
      for(let j=0; j<alphabet.length; j++){
        if(shiftNumber > 0){
          if(title[i] === "x"){
            shiftedString += "a";
            break;
          };
          if(title[i] === "y"){
            shiftedString += "b";
            break;
          };
          if(title[i] === "z"){
            shiftedString += "c";
            break;
          };
        };
        if(shiftNumber < 0){
          if(title[i] === "a"){
            shiftedString += "x";
            break;
          };
          if(title[i] === "b"){
            shiftedString += "y";
            break;
          };
          if(title[i] === "c"){
            shiftedString += "z";
            break;
          };
        };
          if(title[i] === alphabet[j]) {
            shiftedString += alphabet[j + shiftNumber];
          };
          if(title[i] === " "){
            shiftedString += title[i];
            break;
          };
          if(title[i] === "."){
            shiftedString += title[i];
            break;
          };
        };
      
    };
    return shiftedString;
  };
  
return {
  caesar,
};
})();

module.exports = { caesar: caesarModule.caesar };
