/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 
 


 
function romanToDecimal(roman){
  const number = {
    'M' : 1000,
    
    'D'  : 500,
    
    'C'  : 100,
      
    'L'  : 50,
    
    'X'  : 10,
    
    'V' : 5,
    
    'I' : 1
  }
  
  let result = 0;
  let i = 0;
  while(i < roman.length){
      if(number[roman[i]] < number[roman[i+1]]){
        result +=(number[roman[i+1]]) - (number[roman[i]])
          i+=2;
         

      }
          
      else{
          result += number[roman[i]];
          i++
         }


  }
  return result;
}



       

module.exports = romanToDecimal;
