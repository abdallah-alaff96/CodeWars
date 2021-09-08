'use strict';

// =------------=-=-=-=-=-----------------------------------------------------
// regex examples (regex lab):

// regex1:
const parag = 'boacn';
const var2 = /[^abc]/g; // returns all (all: because of "g") characters except abc
const found = parag.match(var2);
// console.log(found);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// regex2:
function getCount(str) {
  const regex2 = /[aeiou]/g;
  return str.match(regex2) ? str.match(regex2).length : 0;
}
// console.log(getCount('abracadabra')); // 5
// console.log(getCount('my pyx')); // 5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// regex3:
const strr = '2000 11 11 10003 22 123 1234000 44444444 9999';
// const regexx = /[0-9]+/g; //["2000", "11", "11", "10003", "22", "123", "1234000", "44444444", "9999"]
const regexx = /[0-9]*/g; //["2000", "", "11", "", "11", "", "10003", "", "22", "", "123", "", "1234000", "", "44444444", "", "9999", ""]

let ans = strr.match(regexx);
// console.log(ans);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// =------------=-=-=-=-=-----------------------------------------------------

// function removeChar(str) {

// }

let removeChar = str => str.slice(1, str.length - 1);

// console.log(removeChar('Abdallah'));

function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}
// console.log(boolToWord('ture'));

// =------------=-=-=-=-=-----------------------------------------------------
// --------- Array.diff (6kyu)

// Solution1 - using filter & includes
// function arrayDiff(a, b) {
//   return a.filter(aElm => !b.includes(aElm));
// }

// Solution2 - using filter & indexOf
// note: indexOf(elm) will return -1 if this "elm" is not exist
function arrayDiff(a, b) {
  return a.filter(x => b.indexOf(x) == -1);
}

const arr1 = [1, 2, 3];
const arr2 = [1, 2];
// console.log(arrayDiff(arr1, arr2));

// =------------=-=-=-=-=----------------------------------------------------
// Create Phone Number (6kyu)
function NumSegment(start, end, numbers) {
  return numbers.slice(start, end).join('');
}

function createPhoneNumber(numbers) {
  const arg1 = NumSegment(0, 3, numbers);
  const arg2 = NumSegment(3, 6, numbers);
  const arg3 = NumSegment(6, 10, numbers);
  return `(${arg1}) ${arg2}-${arg3}`;
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"
// =------------=-=-=-=-=----------------------------------------------------

// The Supermarket Queue (6kyu)
function queueTime(customers, n) {
  let tillers = new Array(n).fill(0);

  customers.forEach(cust => {
    let outputIndex = tillers.indexOf(Math.min(...tillers));
    tillers[outputIndex] += cust;
  });
  return Math.max(...tillers);
}

// console.log(queueTime([], 1));
// console.log(queueTime([1, 2, 3, 4], 1));
// console.log(queueTime([2, 2, 3, 3, 4, 4], 2));
// console.log(queueTime([1, 2, 3, 4, 5], 100));
// console.log(queueTime([2, 3, 10], 2));
// should return 12

// =------------=-=-=-=-=----------------------------------------------------

// Who likes it?
function likes(names) {
  const arrlength = names.length;
  // if no one
  if (arrlength === 0) return 'no one likes this';
  if (arrlength === 1) return `${names[0]} likes this`;
  if (arrlength === 2) return `${names[0]} and ${names[1]} like this`;
  if (arrlength === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (arrlength > 3)
    return `${names[0]}, ${names[1]} and ${arrlength - 2} others like this`;
}

// solution2 : Clever solution with replace
// function likes (names) {
//   var templates = [
//     'no one likes this',
//     '{name} likes this',
//     '{name} and {name} like this',
//     '{name}, {name} and {name} like this',
//     '{name}, {name} and {n} others like this'
//   ];
//   var idx = Math.min(names.length, 4);

//   return templates[idx].replace(/{name}|{n}/g, function (val) {
//     return val === '{name}' ? names.shift() : names.length;
//   });
// }

// console.log(likes([]));
// console.log(likes(['Peter']));
// console.log(likes(['Jacob', 'Alex']));
// console.log(likes(['Max', 'John', 'Mark']));
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

// =------------=-=-=-=-=----------------------------------------------------

// function spinWords(string) {
//   let eachWord = string.split(' ');
//   eachWord.forEach((elm, i) => {
//     if (elm.length >= 5) {
//       eachWord[i] = elm.split('').reverse().join('');
//     }
//   });
//   return eachWord.join(' ');
// }

// Solution 2 by map - best one
function spinWords(words) {
  return words
    .split(' ')
    .map(word => (word.length > 4 ? word.split('').reverse().join('') : word))
    .join(' ');
}

// Solution 3 with replace:
// function spinWords(string){
//   return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
// }

spinWords('Hey fellow warriors');

// console.log(spinWords('Hey fellow warriors'));
// console.log(spinWords('This is a test'));
// console.log(spinWords('This is another test'));

// =------------=-=-=-=-=----------------------------------------------------
// Highest Scoring Word - 6kyu

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toLowerCase().split('');
// ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function high(x) {
  const xArr = x.split(' ');
  // console.log(xArr);
  const numberedArr = x.split(' ').map(eachWord => {
    const letterArr = eachWord.split('').map(eachLetter => {
      return alphabet.indexOf(eachLetter) + 1;
    });
    return letterArr.reduce((a, b) => a + b);
  });
  const numberedIndex = numberedArr.indexOf(Math.max(...numberedArr));
  console.log(xArr[numberedIndex]);
  return xArr[numberedIndex];
}
// high('man i need a taxi up to ubud'); // 'taxi'
// high('what time are we climbing up the volcano'); // volcano
// high('take me to semynak'); //'semynak'
// high('aa b'); // 'aa'
// high('b aa'); //'b');
// high('bb d'); // 'bb');
// high('d bb'); //'d');
// high('aaa b'); // 'aaa');

// =------------=-=-=-=-=----------------------------------------------------

// Sum of two lowest positive integers - 7kyu

// My soultion
function getSmallestNumbers(nums) {
  return Number(nums.splice(nums.indexOf(Math.min(...nums)), 1).toString());
}
function sumTwoSmallestNumbers(numbers) {
  const smallest = getSmallestNumbers(numbers);
  const smaller2 = getSmallestNumbers(numbers);
  return smallest + smaller2;
}

// Solution 2
// const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);

// Solution 3
// function sumTwoSmallestNumbers(numbers) {
//   var [a, b, c] = numbers.sort((a, b, c) => a - b - c);
//   console.log(a, b, c);
//   return a + b + c;
// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); //, 13 ;
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); //, 6
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); //, 10 ,
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); //, 24 ;
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); //, 16 ,

// =------------=-=-=-=-=----------------------------------------------------

// Vowel Count - 7kyu

const regex = /[aeiou]/g;
function getCount(str) {
  return str.match(regex) ? str.match(regex).length : 0;
}

// solution2 :
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

// console.log(getCount('abracadabra')); // 5
// console.log(getCount('my pyx')); // 5

// =------------=-=-=-=-=----------------------------------------------------

// Multiples of 3 or 5
// function solution(number) {
//   let finalArr = [];
//   const numArr = Array.from({ length: number - 1 }, (elm, i) => i + 1);
//   // guard clause
//   if (numArr.some(elm => elm < 0)) return 0;

//   numArr.filter(elm => {
//     elm % 3 === 0 || elm % 5 === 0 ? finalArr.push(elm) : 0;
//   });
//   return finalArr.reduce((accum, elm) => accum + elm);
// }

// solution 2
function solution(n) {
  return n <= 0
    ? 0
    : Array.from({ length: n }, (_, i) =>
        i % 3 == 0 || i % 5 == 0 ? i : 0
      ).reduce((x, y) => x + y);
}

// console.log(solution(10));
// console.log(solution(20));
// console.log(solution(30));

// =------------=-=-=-=-=----------------------------------------------------
// Directions Reduction - 5kyu

function dirReduc(arr) {
  let string = arr.join('');
  const regex = /NORTHSOUTH|SOUTHNORTH|WESTEAST|EASTWEST/g;
  while (regex.test(string)) {
    string = string.replace(regex, '');
  }
  return string.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}

// console.log(
//   dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
// ); // ["WEST"])
// console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST'])); // ["NORTH", "WEST", "SOUTH", "EAST"])
// console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'])); // []

// =------------=-=-=-=-=----------------------------------------------------
// Regex validate PIN code - 7 kyu
// function validatePIN(pin) {
//   const falsyRegEx = /[^0-9]/g;

//   return (pin.length !== 6 && pin.length !== 4) || pin.match(falsyRegEx)
//     ? false
//     : true;
// }

// solution2
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}
// console.log(validatePIN('1234'));
// console.log(validatePIN('12345'));
// console.log(validatePIN('123456'));
// console.log(validatePIN('1239938345'));
// console.log(validatePIN('1234.0'));
// console.log(validatePIN('-1.233'));
// console.log(validatePIN('4889x2'));

// var stri = '1, 100, 1000, 100000?, 100000000000000';
// var patt1 = /\d{4,}/g;
// var result = stri.match(patt1);

var strp = 'Is this all there a  is all';
var patt1 = /is(?= all)/g;
var result = strp.match(patt1);
// console.log(result);

// =------------=-=-=-=-=----------------------------------------------------
// Calculating with Functions - 5kyu

// function zero(rightNum) {
//   return rightNum ? parseInt(eval(0 + rightNum)) : 0;
// }
// function one(rightNum) {
//   return rightNum ? parseInt(eval(1 + rightNum)) : 1;
// }
// function two(rightNum) {
//   return rightNum ? parseInt(eval(2 + rightNum)) : 2;
// }
// function three(rightNum) {
//   return rightNum ? parseInt(eval(3 + rightNum)) : 3;
// }
// function four(rightNum) {
//   return rightNum ? parseInt(eval(4 + rightNum)) : 4;
// }
// function five(rightNum) {
//   return rightNum ? parseInt(eval(5 + rightNum)) : 5;
// }
// function six(rightNum) {
//   return rightNum ? parseInt(eval(6 + rightNum)) : 6;
// }
// function seven(rightNum) {
//   return rightNum ? parseInt(eval(7 + rightNum)) : 7;
// }
// function eight(rightNum) {
//   return rightNum ? parseInt(eval(8 + rightNum)) : 8;
// }
// function nine(rightNum) {
//   return rightNum ? parseInt(eval(9 + rightNum)) : 9;
// }

// function plus(leftNum) {
//   return `+ ${leftNum}`;
// }
// function minus(leftNum) {
//   return `- ${leftNum}`;
// }
// function times(leftNum) {
//   return `* ${leftNum}`;
// }
// function dividedBy(leftNum) {
//   return `/ ${leftNum}`;
// }

// solution 2 - function returning function
var n = function (digit) {
  return function (op) {
    return op ? op(digit) : digit;
  };
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) {
  return function (l) {
    return l + r;
  };
}
function minus(r) {
  return function (l) {
    return l - r;
  };
}
function times(r) {
  return function (l) {
    return l * r;
  };
}
function dividedBy(r) {
  return function (l) {
    return l / r;
  };
}

// console.log(seven(times(five()))); // 35);
// console.log(four(plus(nine()))); // 13);
// console.log(eight(minus(three()))); //, 5);
// console.log(six(dividedBy(two()))); //, 3);

// function returning function imp example
const addTax = rate => value => value + value * rate;
const addRate = addTax(0.2);
// console.log(addRate(200));

// =------------=-=-=-=-=----------------------------------------------------
// Maximum subarray sum - 5kyu
// var maxSequence = function (arr) {
//   let summation = 0;
//   let sumArr = [];
//   if (arr.length === 0 || arr.every(elm => elm <0)) return 0;
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       summation += arr[j];
//       sumArr.push(summation);
//     }
//     summation = 0;
//   }
//   return Math.max(...sumArr);
// };

var maxSequence = function (arr) {
  let summation = 0;
  let sumArr = [];
  if (arr.length === 0 || arr.every(elm => elm < 0)) return 0;
  arr.map((_, i) => {
    for (let j = i; j < arr.length; j++) {
      summation += arr[j];
      sumArr.push(summation);
    }
    summation = 0;
  });
  return Math.max(...sumArr);
};

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //, 6)
// console.log(maxSequence([-2, -5, -4])); //, 6)
// console.log(maxSequence([])); //, 6)

// =------------=-=-=-=-=----------------------------------------------------
// Moving Zeros To The End - 5 kyu

// var moveZeros = function (arr) {
//   arr.map(_ => arr.push(...arr.splice(arr.indexOf(0), 1)));
//   return arr;
// };

// solution2 -
var moveZeros = function (arr) {
  return arr.filter(elm => elm !== 0).concat(arr.filter(elm => elm === 0));
};

// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
// console.log(moveZeros([1, 2, 'a', 0, 1, 0, 1, 0, 3, 0, 1, 'b']));

// =------------=-=-=-=-=----------------------------------------------------

//Weight for weight
function orderWeight(strng) {
  const regex = /[0-9]+/g;
  // guard phase
  if (strng.match(regex) == null) return '';

  let finalArr = [];
  let old = strng.match(regex).sort(); // ["103", "123", "4444", "99", "2000"]

  // to get the weight of each weight => [4, 6, 16, 18, 2]
  let oldMod = strng
    .match(regex)
    .sort() // sort() must be added to "oldMod" & "old"
    .map(elm => elm.split('').reduce((acc, elm) => eval(`${acc}+${elm}`), 0));

  // shallow copy created
  let sortOldMod = [...oldMod].sort((a, b) => a - b);

  while (oldMod.length > 0) {
    // index swap
    let oldIndex = oldMod.indexOf(Math.min(...oldMod)); //4
    let newIndex = sortOldMod.indexOf(Math.min(...oldMod)); //0

    // add to finalArr
    finalArr[newIndex] = old[oldIndex];

    // remove elements
    oldMod.splice(oldIndex, 1);
    old.splice(oldIndex, 1);
    // change element in "sortOldMod" array to avoid affecting the index sequence
    sortOldMod.splice(newIndex, 1, 'removed');
  }
  return finalArr.join(' ');
}

// console.log(orderWeight('2000 11 11 10003 22 123 1234000 44444444 9999')); // '11 11 2000 10003 22 123 1234000 44444444 9999'
// console.log(orderWeight('103 123 4444 99 2000')); // '2000 103 123 4444 99');
// console.log(
//   orderWeight(' 30  141   181 138 147 179 180611 197 225190  134931    126838')
// );
// console.log(
//   orderWeight(
//     '410875 181 446534 197 225190 138 134931 3 180611 179 357220 30 367655 81 359262 141 126838 147 389588 33 41'
//   )
// );
// console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123')); //'11 11 2000 10003 22 123 1234000 44444444 9999'
// console.log(orderWeight(' '));
// =------------=-=-=-=-=----------------------------------------------------

// Scramblies - 5kyu
function scramble(str1, str2) {
  const regex = new RegExp(`[${str1}]`, 'g');
  const str1Arr = str2.match(regex);
  if (str1Arr == '' || str2 == '' || str1Arr == false || str2 == false)
    return false;
  else if (str1Arr.length == str2.length) return true;
  return false;
}

// solution2
// function scramble(str1, str2) {
//   const count = {}
//   str2.split('').forEach((c) => {
//     count[c] = count[c] ? (count[c] += 1) : 1
//   })
//   str1.split('').forEach((c) => {
//     count[c] && count[c]--
//   })
//   return Object.keys(count).every((key) => count[key] === 0)
// }

// console.log(scramble('', '')); //,false);
// console.log(scramble('krqodlw', 'world')); //,true);
// console.log(scramble('krqodl', 'world')); //,flase);
// console.log(scramble('cedewaraaossoqqyt', 'codewars')); //,true);
// console.log(scramble('katas', 'steak')); //,false);
// console.log(scramble('scriptjava', 'javascript')); //,true);
// console.log(scramble('scriptingjava', 'javascript')); //,true);
// console.log(scramble('scriptsjava', 'javascripts')); //,true);
// console.log(scramble('jscripts', 'javascript')); //,false);
// console.log(scramble('aabbcamaomsccdd', 'commas')); //,true);

// =------------=-=-=-=-=----------------------------------------------------
