'use strict';

let count = 1;

function myFunc(){
  if(count == 7){
    clearInterval(interval);
  }else{
    console.log(`${count++}`);
  }
}

var interval = setInterval(myFunc, 1000);
