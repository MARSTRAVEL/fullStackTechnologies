const palindrome_my=(str)=> {
const regrex = /[a-z0-9]/gi;
  const result = str.match(regrex);
  let left =0;
  let right = result.length-1;
    for (let i = 0; i < Math.round(result.length/2); i++) {
      if(result[left].toLowerCase()!==result[right].toLowerCase()){
        return false;
      }
      left ++;
      right --;
    }
  return true;
}
