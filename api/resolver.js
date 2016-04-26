var key = require('./key');
var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');
var units = require('node-units');


// The API that returns the in-email representation.
module.exports = function(req, res) {
  var term = req.query.text.trim();

  var result;
  try {
    result = units.convert(term);
  } catch(e) {
    // Conversion error
    result = null;
  }

  var html;
  if (result) {
    html = '<span>' + result.toFixed(2) + '</span>';
  } else {
    html = '<span>Invalid conversion</span>';
  }

  res.json({
    body: html
  });
};
