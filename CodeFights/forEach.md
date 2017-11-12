`Arr.forEach()`, we can check if any element in the arr is satisfy with the condition, but we can't break or make it stop during
the process. Because `forEach()` **doesnt return things**. All the manipulation we can do with `.forEach()` is inside of it.

Also, if we need to do something like find the difference between two adjucent element in the array, better to use for loop.
because we can't control the index change inside of `.map()`, `.forEach()` and similar methods.
