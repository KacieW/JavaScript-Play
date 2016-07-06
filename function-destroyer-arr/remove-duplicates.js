//Compare two Javascript Arrays and remove Duplicates

function destroyer(arr) {
  // Remove all the values
  var restArr = Array.prototype.slice.call(arguments, 1);

  arr = arr.filter(function(val) {
  return restArr.indexOf(val) == -1;
  });

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
