# Chekc Palindrome
Given the string, check if it is a palindrome. 注意：不是在string中找到palindrome，而是判断这个string是否是palindrome

## Round 1
把string平均分两半，如果对应的string不一样，就不是panlidrome
```javascript
function checkPalindrome(str) {
    if(str.length==1){
        return true;
    }
    for(var i=0;i<str.length/2;i++){
        if(str[i]!==str[str.length-i-1]){
            return false;
        }
    }
    return true;
}

```

## Round 2
就是把整个str倒过来写一遍，如果一样，就是palindrome，:joy:
```javascript
if(str = str.split('').reverse().join('')) return true.
