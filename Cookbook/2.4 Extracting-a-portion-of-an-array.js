//element is a primitive data type, it is copied by value, so the change to the new array won't reflected in the old one.
var arr = ["car", "bus", "bike", "truck"];
var sub = arr.slice(1, 3);
console.log(sub[0]);
sub[0]="apple";
console.log(sub[0]);//apple
console.log(arr[1]);//bus


//if the elements are objects, both array will point to the same object, change one will affect the other as well. The values are copied by reference.
var oldarr = [['apple', 'pear'], ['banana', 'lime'], ['orange', 'grape', 'berry']];
var newarr = oldarr.slice(1, 2);
console.log(newarr[0]);
newarr[0][0]="cat";
console.log(newarr[0]);//["cat", "lime"]
console.log(oldarr[1]);//["cat", "lime"]
