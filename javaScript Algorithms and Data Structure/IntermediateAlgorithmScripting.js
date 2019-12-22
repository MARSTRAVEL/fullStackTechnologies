// Sum All Numbers in a Range
const sumAll=(arr)=> {
 let sortedArray =  arr.sort(function(a, b){
    return a-b;
  });
  let i =sortedArray[0], sum=0;

  while(i<=sortedArray[1]){
    sum += i;
    i++;
  }

    return 1;
}
//Diff Two Arrays
const diffArray=(arr1, arr2)=> {
  var newArr = [];
  newArr = arr1.concat(arr2);
  return newArr.filter(ele=> !arr1.includes(ele)||!arr2.includes(ele));
}

//Seek and Destroy
const destroyer=(arr)=> {

  var args = Array.from(arguments).slice(1);

  return arr.filter(function(ele) {
    return !args.includes(ele);
  });
}

// Wherefore art thou
const whatIsInAName=(collection, source)=> {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var keys = Object.keys(source);

  // filter the collection
  let res =  collection.filter(function(obj) {
    for (var i = 0; i < keys.length; i++) {
      if (!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]]) {
        return false;
      }
    }
    return true;
  });
return res;
}

//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet"});

// Spinal Tap Case
const spinalCase=(str)=> {
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\s+|_+/g, "-").toLowerCase();
    return str;
}
//spinalCase('thisIsSpinalTap');

const translatePigLatin=(str)=> {
  const res = str.match(/[aeiou]+/);
  if (res) {
  if(res.index==0){
    return str.concat('way');
  }else{
    return str.slice(res.index).concat(str.slice(0,res.index)).concat('ay');
    //console.log(str.slice(0,res.index));
  }
  }else {
    return str.concat('ay');
  }
}
//translatePigLatin("hello");

const myReplace=(str, before, after)=> {
    const index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}

//myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
const pairElement=(str)=> {
  let resultArray = [];
  const newStrArray = str.split('');
  for (let i = 0; i < newStrArray.length; i++) {
      switch (newStrArray[i]) {
        case 'A':
          resultArray.push(['A', 'T']);
        break;
        case 'T':
            resultArray.push(['T', 'A']);
        break;
        case 'G':
          resultArray.push(['G', 'C']);
          break;
        case 'C':
          resultArray.push(['C', 'G']);
          break;
      }
  }
  return resultArray;
}

//pairElement("GCG");
