var coffeeImport = require('coffee-import');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  return coffeeImport(source);
}
