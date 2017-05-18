'use strict';

// function show(name){
//   return function(sname){
//     console.log("Hello " + name + ' ' + sname);
//   }
// }
//
// var a = show('valod');
//
//   a('vardanyan');

// function q(arr){
//   if(arr instanceof Array){
//
//   }else{
//     console.log('Sxal e');
//   }
// }
//
// q(['d', 'hello', 'bye', 'go']);

const speak = function(arr){
  const newArr = [];
  for (const i of arr) {
    newArr.push(i.toUpperCase())
  }
  return newArr;
}

const res = speak(['hello','world']);
console.log(res);
