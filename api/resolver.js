var key = require('./key');
var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');
var units = require('node-units');


// The API that returns the in-email representation.
module.exports = function(req, res) {
  var term = req.query.text.trim();

  var html;
  try {
    const result = units.convert(term);
    html = '<span>' + result.toFixed(2) + '</span>';
  } catch(e) {
    // Conversion error
    html = '<span>Invalid conversion: ' + e.message + '</span>';
  }

  res.json({
    body: html
  });
};
