# Array 

## Issues that I faced
#### 1. Find first duplicate ####
  Thoughts that did not work : tried to walk through the array, use the first element to check if there is a same one in the rest of 
  the array, then use the second one to do the same thing. If find the same one, return the element, which will be the first
  duplicated one. The issue is that it is time consuming. Not pass the O(n) time complexity and O(1) additional space complexity.

  Solutions that works : Use `Set()`. Set lets you store **unique** values of any type. In the Set, if we add a value that already in the set object, 
  it will refuse to put it in the object. So, we can check if the set object already has the value. If it does, then we find the
  first duplicate element of the Array.

  Set Methods : `Set.add(value), Set.prototype.has(value), Set.prototype.add(value)`

  `Map()` works for this questions as well. The difference is Map is a key-value pair. We should use `Map.set(key, value)` to add 
  element to the map object.

#### 2. Find the first non-repeating char in a string ####
  - Turn the string into array : str.split('')
  - Nested for loops, walk through the array and check the apperance times. If more than once, break. If just once, return the 
  element. Else return '_', means non-repeating char does not exsit.

  *We can also use `indexOf()` to find a the non-repeating one.* If the indexOf() == lastIndexOf(), that means this element only
  shows one time in the array. `arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])`

#### 3. Rotate 2D-array 90 degree ####
We should filp the matrix first by diagonal, then mirror it. 
