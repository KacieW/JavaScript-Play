# Difference among slice, substr and substring

## slice
str.slice(startIndex, endIndex), slice out the str from the startIndex to the endIndex.
- startIndex
  - startIndex is - : start counting from right of the string. 
  - startIndex is > string.length : return "". 
- endIndex
  - endIndex is - : counting from the right side of the string. 
  - endIndex is > string.length : is equal to string.length.
- endIndex < startIndex : return ""
```js
var s = "abcdefg";
s.slice(-5,-2) //"cde"
s.slice(10,15) //""

s.slice(2,10) //"cdefg"
s.slice(5,2) //""
s.slice(-5,2) //""
```

## substr
str.substr(start, length), return a sub string from start and **the length is equal to the length.**
- start
  - start<0 : count from the rightside of the str.
  - start<0 && abs(start) >str.length : 0 is used as the start index.
- length
  - length ==0||length<0 : return ""
```js
s.substr(10) //""
s.substr(-3, 5) //"efg", length is out of the scope of the str.length, take is as the last index of the str
s.substr(-5,3) //"cde"
s.substr(-15, 3) //"abc"
s.substr(3,0)//""
s.substr(-3,-2);//""
```

## substring
str.substring(startIndex, endIndex), it return a sub string from the startIndex to the **endIndex**
- startIndex
  - startIndex<0 : start from index 0.
  - startIndex>str.length : it treats as the str.length
- endIndex
  - endIndex<0 : start from index 0.
  - endIndex>str.length : it treats as the str.length 
- startIndex == endIndex: return ""
- startIndex> endIndex : **swap them.**
```js
s.substring(-3,4) //"abcd"
s.substring(-3,-1); //""
s.substring(10,20) //""
s.substring(4,-10) //"abcd", it swap as well
s.substring(4,15) //"efg"
s.substring(6,1) //"bcdef"
```
