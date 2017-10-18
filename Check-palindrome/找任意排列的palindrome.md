# Permutation palindrome
Write an efficient function that checks whether any permutation of an input string is a palindrome. string的任意排列是否是palindrome，要求是
O(n) time

## Get的技能
当初步的解决方法时间复杂度很高的时候，一定要优先考虑Object，或者使用data structure。这里使用的是Set(). 因为可以任意排列字母，只要每个字母出现的次数为
偶数，或者只有一个字母是奇数，可以个说这个字符串是palindrome。

例如：asdsd-> sdads，是回文。 cdesec ->d和s分别出现一次，这个字符就不是回文。

We could use a set, adding and removing characters as we look through the input string, so the **Set always only holds the characters that 
appear an odd number of times**. 这个思路跟[找到第一个重复的数字](https://github.com/KacieW/JavaScript-Play/tree/master/find-first-duplicate-number)很类似
```javascript
  function hasPalindromePermutation(theString) {

    // track characters we've seen an odd number of times
    var unpairedCharacters = new Set();

    for (var i = 0; i < theString.length; i++) {
        var char = theString[i];

        if (unpairedCharacters.has(char)) {
            unpairedCharacters.delete(char);
        } else {
            unpairedCharacters.add(char);
        }
    }

    // the string has a palindrome permutation if it
    // has one or zero characters without a pair
    return unpairedCharacters.size <= 1;
}
```
