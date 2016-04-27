var units = require('node-units');


// The Type Ahead API.
module.exports = function(req, res) {
  var term = req.query.text.trim();

  var title, html;
  try {
    const result = units.convert(term);
    title = 'Result: ' + result.toFixed(2);
    text = result.toFixed(2);
  } catch(e) {
    // Conversion error
    title = 'Syntax: [value] [from unit] to [to_unit]';
    text = '';
  }

  res.json([{
    title: title,
    text: text
  }]);
};
