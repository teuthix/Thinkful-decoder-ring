// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  
  function polybius(input, encode = true) {
    /*
    split the string of numbers into two digits each (array?)
    for each number, first look for the first number row, 
    then select go the number of boxes over equal to the second number */

    const polySquare = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "i", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"]
    ];
    
    
    if(encode === false){
      return decode(input, polySquare);
    } else{
        //ignores capital letters
        let lowercase = "";
        for(let i=0; i<input.length; i++){
          const chara = input[i];
          lowercase += chara.toLowerCase();
        }; //"the test tjtle" "just title"
        
        //when encoding, translates letters i AND j to 42
        const inputTwo =lowercase.replaceAll("j", "i"); //"the test title" "iust title"
        
        /* 
        access the array in each object
        if the array contains the letter we're working with, return it
        push the number key of the array to the string
        then push the position of the letter to the string
        */
       let result = "";
       
       for(let i=0; i<inputTwo.length; i++){
         if(inputTwo[i] === " "){
           result += " ";
          } else if(inputTwo[i] === "."){
            result += ".";
          } else {
            let digit = firstDig(inputTwo[i], polySquare); // ["a", "b", "c", "d", "e"]
            const firstDigit = digit.indexOf(inputTwo[i]) + 1;
            const  secondDigit = polySquare.indexOf(digit) + 1;
            result = result + firstDigit.toString() + secondDigit.toString();
          };
        };
        return result;
      };
    };
    
    //finds array in the polySquare that contains the letter
    function firstDig(letter, polySquare){
      return polySquare.find((array) => array.find((element) => element === letter));
    };
    
    
    //function to handle decoding
    function decode(input){
      const polySquare = [
        ["a", "b", "c", "d", "e"],
        ["f", "g", "h", "i", "k"],
        ["l", "m", "n", "o", "p"],
        ["q", "r", "s", "t", "u"],
        ["v", "w", "x", "y", "z"]
      ];
      
      //split into 2 digit sections
      if(input.includes(" ")){ //if there is a space, pass into here to split the string by each space
        const splitArray = input.split(" ");
        let joinArray = [];

        //below will check each word to see if the number of digits is odd
        //if odd, it will return false, if no odd numbered strings/words, it will continue to decode
        let integerTest = []; 
        for(let i=0; i<splitArray.length; i++){
          if(Number.isInteger(splitArray[i].length / 2)){
            integerTest.push(Number.isInteger(splitArray[i].length / 2)) 
          }else {
            return false};
        };
        
        //this will go through each value in the array
        splitArray.forEach((eachItem) => {
          let result = "";
          for(let i=0; i<eachItem.length; i+=2){
            const letter = eachItem.substring(i,i+2); //23
            const secondDigit = letter[1] -1;
            const firstDigit = letter[0] -1;
            
            const findArray = polySquare[secondDigit]; //use second digit to find which array
            const rightLetter = findArray[firstDigit]; //use first digit to find which value in the array
            
            result += rightLetter; //adds letter found to the result string
          };
          return joinArray.push(result); //adds the result after each letter has been found to the joinArray array
        });
        const joined = joinArray.join(" "); //joins each string in the array with a " "
        return joined.replace("i", "(i/j)"); //replaces each instance of "i" since 42 can be "i" or "j"
        
      } else{ //this else handles one word/no space strings
        
        let result = "";
        for(let i=0; i<input.length; i+=2){
          const letter = input.substring(i,i+2); //23
          const secondDigit = letter[1] -1;
          const firstDigit = letter[0] -1;
          
          const findArray = polySquare[secondDigit];
          const rightLetter = findArray[firstDigit];
          
        result += rightLetter;
      };
      return result.replace("i", "(i/j)")
    };
  };
  
  
   return {
     polybius,
    };
  })();
  
  
  module.exports = { polybius: polybiusModule.polybius };
