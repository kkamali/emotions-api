var browserify = require("browserify-middleware");
var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname + "/client")));

app.get('./client/assets/js/bundle.js', browserify('./client/assets/js/script.js'));

app.listen(3000, function(){
  console.log("listening");
});
