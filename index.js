/**
 * Expose `Index`
 */

module.exports = Index;

/**
 * Initialize `Index`
 *
 * @param {Array} arr
 * @api public
 */

function Index(arr) {
  if(!(this instanceof Index)) return new Index(arr);
  this.index = '';
  if(arr) this.add(arr);
}

/**
 * Add a term
 *
 * @param {Mixed} arr
 * @return {Index}
 * @api public
 */

Index.prototype.add = function(arr) {
  arr = (typeof arr == 'string') ? [ arr ] : arr;
  var index = [];
  for (var i = 0, len = arr.length; i < len; i++)
    index[index.length] = arr[i].toLowerCase();
  this.index += index.join('');
  return this;
};

/**
 * Search for a term
 *
 * @param {String} str
 * @return {Boolean} result
 * @api public
 */

Index.prototype.search = function(str) {
  str = str.replace(/\s/g, '').toLowerCase();
  if(~this.index.indexOf(str)) return true;
  return false;
};
