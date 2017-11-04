# Array 

## Challenge
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
  We should filp the matrix first by diagonal, then mirror it. Which means the orignal arr[n][0], should be put in newArr[0][n], the orignal arr[n][1], should be put in newArr[1][n]...

  First : create a 2D-array 
  ```javascript
  var newArr = [];
    for(var i=0; i<leng;i++){
      newArr[i] = []; //make the newArr a two-dimensional array
      for(var j=0; j<leng; j++){
        newArr[i][j]= 'somthing';
      }
    }
  ```
  Then, assign the `newArr[i][j]` equal to `orignalArr[leng-j-1][i]`
  
#### 4. Sudoku ####
It was easy to check the rows and column with any duplicated number. But I was forgot to and stuck at checking numbers in the square. I used Map() to sovle this question, beacuse Map() requires a unique key-value pair.

- In the nested for loops, Check rows first. If the Map contains the value. If not, add it to Map.
- Same step for columns.
- Check the 3x3 square. It should not contain the same value more than once. 
```javascript
var a = i-i%3; //a : 0,0,0,3,3,3,6,6,6...
var b = j-j%3;
for(var x = a; x<a+3; x++){
  for(var y =b; y<b+3; y++){
    if((grid[x][y])!=='.'){
      if(mySet3.has(grid[x][y])){
        return false;
      }else{
        mySet3.add(grid[x][y]);
      }
    }
  }
}
```
#### 5. cryptarithm ####
A given array with 3 words. A solution array that contains letter-number pairs. Cal if the sum of first 2 words equal the thrid
one or not. If the cryp word start 0, return false.

- Turn the solution array to a Map with key and value pair.
- Find the key that the value is equals to 0.
- Check if any words start with the 0 key. Return false if yes. *The edge case that I didn't consider was the length of the solution array is 1, and the value of the key is 0.*
- Turn each word into Array using `.split('')`, and concat the values of each letter using `.forEach()`. *`forEach()` do not return anything.*
- Turn each string of number to real number, then check if the sum of the first two equals the third one.







