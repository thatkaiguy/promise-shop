'use strict';

function all (promise1, promise2) {
  var counter = 0;

  return new Promise(function (fulfill, reject) {
    var results = [];

    promise1.then(function (val) {
      counter++;
      results[0] = val;
      if (counter == 2) { return fulfill(results); }
    });
    promise2.then(function (val) {
      counter++;
      results[1] = val;
      if (counter == 2) { return fulfill(results); }
    });
  });
}

all(getPromise1(), getPromise2())
.then(console.log);
