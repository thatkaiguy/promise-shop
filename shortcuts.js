'use strict';

var resolve = Promise.resolve('resolveddddd');
var reject = Promise.reject(new Error('reject errorrrr'));

var promise = new Promise(function (fulfill, reject) {
  reject(new Error('blah'));
});

resolve.then(function (result) {
  console.log('result: ', result);
  return reject;
}).catch(function (err) {
  console.log('err: ', err.message);
});
