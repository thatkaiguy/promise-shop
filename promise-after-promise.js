'use strict';

first().then(function (value) {
  return second(value);
}).then(function(value) {
  console.log(value);
});
