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
    html = '<span>' + e + '</span>';
  }

  res.json({
    body: html,
    raw: true
  });
};
