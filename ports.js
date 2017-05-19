'use strict';

const upper = (str) => {

  return str.toUpperCase();

}

const lower = (str) => {

  return str.toLowerCase();

}

const show = (str) => {

  for(var i = 0; i < 10; i++){

      str += str + ' ';

  }

  return str;

}

module.exports = {
  upper,
  low: lower,
  show
}
