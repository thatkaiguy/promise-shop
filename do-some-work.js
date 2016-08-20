var HTTP = require("q-io/http");

HTTP.read('http://localhost:7000')
.then(function (data) {
    return HTTP.read('http://localhost:7001/' + data.toString());
}).then(function (data) {
  console.log(JSON.parse(data.toString()));
});
