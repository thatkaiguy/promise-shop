'use strict';

function alwaysThrows () {
  throw new Error('OH NOES');
}

function iterate (num) {
  console.log(num);
  return ++num;
}

Promise.resolve(1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.catch(console.log);
