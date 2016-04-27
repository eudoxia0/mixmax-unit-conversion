// The Type Ahead API.
module.exports = function(req, res) {
  res.json([{
    title: '<i>(no results)</i>',
    text: ''
  }]);
};
