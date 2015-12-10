#!/usr/bin/env node

'use strict';
var spawn = require('child_process').spawn;
var fs = require('fs');
var osenv = require('osenv');

var home = osenv.home();
var configFileLocation = home + '/.httpies';

try {
  var args = fs.readFileSync(configFileLocation).toString().split('\n');
  if (args[args.length - 1] === '') args = args.slice(0, -1);
} catch (e) {
  console.error(configFileLocation + ' not found');
  process.exit(1);
}

var input = process.argv.slice(2).concat(args);

spawn('http', input, {stdio: 'inherit'}).on('exit', process.exit);