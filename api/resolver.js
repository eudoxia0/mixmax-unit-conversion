var units = require('node-units');


// The API that returns the in-email representation.
module.exports = function(req, res) {
  var term = req.query.text.trim();

  var html;
  if (term.length > 0) {
    // Good conversion
    html = term;
  } else {
    // Bad conversion
    html = '';
  }

  res.json({
    body: html,
    raw: true
  });
};
