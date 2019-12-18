
//Convert Celsius to Fahrenheit
const convertToF=(celsius)=> celsius*9/5+32;

//Reverse a String
const reverseString =(str)=> str.split('').reverse().join('');

//Factorialize a Number
const factorialize =(num)=> num==0? 1: num*factorialize(num-1);

//Find the Longest Word in a String
const findLongestWordLength=(str)=> {
  let longestString =0;
  return str.split(' ').reduce((longestString, word)=>{
    return (longestString>word.length? longestString:word.length);
  });
}

// Basic Algorithm Scripting: Return Largest Numbers in Arrays
const largestOfFour=(arr)=> {
  let longest ='';
  // You can do this!
  const res = arr.map((x)=>x.toString()).reduce((longest, number)=>{
    return (longest.length > number.length? longest: number);
  });
  return res.split(',').map(x=>Number(x));
}

// Confirm the Ending
const confirmEnding=(str, target)=> {

  let target_array = target.split('');
  let str_array = str.split('');
  let newArr = str.slice(str_array.length-target_array.length, str_array.length);
  return target == newArr? true: false;
};

//Repeat a String
const repeatStringNumTimes=(str, num)=> {
  // repeat after me
  if(num<=0){
    return '';
  }else if(num==1){
    return str;
  }else{
    return str+repeatStringNumTimes(str, num-1);
  }

};

// Truncate a String
const truncateString = (str, num)=> {
  // Clear out that junk in your trunk
  if(num<=0){
    return 'Error';
  }else if(num<str.length){
  return str.slice(0,num)+'...';
  }else{
    return str;
  }
}

// Finders Keepers
const findElement=(arr, func)=> {
  let num = 0;
  for(let i =0; i<arr.length;i++){
    if(func(arr[i])){
      return arr[i];
    }
  }
  return undefined;
}

// Boo who;Check if a value is classified as a boolean primitive. Return true or false.
const booWho=(bool)=> typeof bool === "boolean";

// Title Case a Sentence
const titleCase=(str)=> {
  const arr = str.split(' ');
  let new_arr=[];
  for (let i = 0; i < arr.length; i++) {
    new_arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].substring(1).toLowerCase();
  }
  console.log(new_arr);
  return new_arr.join(' ');
}
