'use strict';

var promise = new Promise(function (fulfill, reject) {
      setTimeout(fulfill.bind(this,'FULFILLED!'), 300);
 });

promise.then(function (data) {
  console.log(data);
});
