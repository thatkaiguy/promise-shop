'use strict';

function attachTitle (arg) {
  return 'DR. ' + arg;
}

var resolve = Promise.resolve('MANHATTAN');

resolve.then(attachTitle)
  .then(console.log);
