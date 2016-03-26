#!/usr/bin/env node
var fs = require('fs');
var ini = require('ini');

var args = process.argv.slice(2);
var file = args[0];
var field = args[1];


fs.readFile(file, 'utf-8', function gotFile(err, buffer) {
  if (err) return console.log(err);
  var data = ini.parse(buffer);
  process.stdout.write(data[field]);
});

