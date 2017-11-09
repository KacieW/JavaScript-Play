# Sort an array partially. 
For example, a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be [-1, 150, 160, 170, -1, -1, 180, 190]. Just sort
it ignore -1. We can first get all the numbers greater than -1 to a new sorted array. Then find each element is not -1 in the 
original array to replace it with the ones from the new sorted array.

## Definition of Array.map()
```js
var new_array = arr.map(function callback(currentValue, index, array) {
    // Return element for new_array
}[, thisArg])
```
- The `currentValue, index, array` in the callback function are all from the original array. 
- `thisArg` is the context passed into the map callback function. it is some thing that want the callback function to work on. 
```js
var myArr = [150, 160, 170, 180, 190];
a.map(function(x, index, arr){
  console.log(x, index, arr);
  //-1, 0, [-1, 150, 190, 170, -1, -1, 160, 180]
  //150, 1, [-1, 150, 190, 170, -1, -1, 160, 180]
  //190, 2, [-1, 150, 190, 170, -1, -1, 160, 180]
  //170, 3, [-1, 150, 190, 170, -1, -1, 160, 180]
  
  console.log(x, index, myArr);
  //-1, 0, [150, 160, 170, 180, 190]
  //150, 1, [150, 160, 170, 180, 190]
  //190, 2, [150, 160, 170, 180, 190] and so on
}, myArr);
``` 
So I will replacing all the ones `!=-1` in the `arr`, with the elements in `myArr` that I passed in as a `thisArg`. With the help
of a flag variable, we can track the correct element by the index.
```js
var flag = 0;
var d = a.map(function(s, index){
    if(s==-1){
        flag++;
    }else{
        s = arr[index-flag];//replace s with the 对应的 element from the arr 数组 that I passed in
    }
    return s;
}, arr);
return d; //[-1, 150, 160, 170, -1, -1, 180, 190]
```


## Map works on string and elements, 以一种别扭的方式...
```js
Array.prototype.map.call('Hello', function(x){
    return x;
});
//it is the same as 'Hello'.split("");
```
```js
Array.prototype.map.call(element, function(obj){
    return obj.value;
});
//Same as Array.from(element)
```
