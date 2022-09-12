/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  //here we check if str includes or matches other string and replaces it with an empty string.
  while(str.includes('[]')|| str.includes('{}')|| str.includes('()') ){
    str = str.replace('[]','');
    str = str.replace('{}','');
    str = str.replace('()','');

  }
//comparing the string length to ensure that all characters has been replaced
  if(str.length === 0){
    return 'valid'
  }else{
    return 'invalid'
  }

    
    
  
    
}
module.exports= isValid;

console.log(isValid("{[]{"));
    console.log(isValid("]][[[][][][]]["));
    console.log(isValid("[][[[[][][[[]]]]]]"));
    console.log(isValid("[]"));


