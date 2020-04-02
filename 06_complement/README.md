### Complement

#### Total Points: 5.00

<hr>

### Description:


**complement** - Create the function `complement` that  **returns a function** that itself returns the logical opposite of the function passed in as an argument.

```js
function returnTrue() {
  return true;
}

const returnFalse = complement(returnTrue);
returnFalse() // RETURN VALUE: false; // complement returned a function that returns the logical opposite of the function passed to complement.
```

```js
function greaterThanFive(num) {
  return num > 5;
}

const lessThanFive = complement(greaterThanFive);
lessThanFive(10); // RETURN VALUE: false 

// greaterThanFive would have returned true, however  since greaterThanFive was passed into complement, the function returned from complement returns the logical opposite of greaterThanFive.
```

**Tip:** Pay close attention to the arguments that need to be passed to the function passed into complement.

<hr>
<br>

**remove** - Create the function `remove` that accepts an array and function argument.  

The `remove` function removes every element from the array that is the logical opposite of the function argument's return value. In the example below, the `greaterThanTen` function returns all numbers great than 10. The array returned from `remove` returns all numbers less than or equal to ten becuase the `remove` function returns the logial opposite of the function passed to `remove`.

**You should use the `complement` function on the input function (the function passed as an argument) to create a new function that returns the logical opposite of the input function.**

Instead of using a traditional `for` loop, use [Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```js

function greaterThanTen(num){
  return num > 10;
}

const arrayOfValues = remove([1, 4, 10, 12, 14], greaterThanTen);
// arrayOfValues = [1, 4, 10] // all numbers that are the logical opposite of the greaterThanTen function (numbers less than 10).

function isVowel(letter) {
  return 'aeiou'.includes(letter);
}

const arrayOfConsonants = remove(['l', 'k', 'e', 'o', 'm', 's', 'o', 'a', 'c'], isVowel);
// arrayOfConsonants = ['l', 'k', 'm', 's', 'c'] // all the consonants were returned since they are the logical opposite of the isVowel function.


```
