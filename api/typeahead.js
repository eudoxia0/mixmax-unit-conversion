var key = require('./key');
var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');


// The Type Ahead API.
module.exports = function(req, res) {
  res.json([{
      title: '<i>(no results)</i>',
      text: ''
  }]);
};
