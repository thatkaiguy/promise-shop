'use strict';

function parsePromised (thing) {
  return new Promise(function (fulfill, reject) {
    try {
      var json = JSON.parse(thing);
      fulfill(json);
    } catch (e) {
      reject(e);
    }
  });
}

parsePromised(process.argv[2]).catch(console.log);
