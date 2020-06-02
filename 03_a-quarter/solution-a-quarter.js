/* eslint-disable no-unused-vars */
const aQuarter = (fn) => {
    let count = 0;
    return function(...args) {
        count++;
        if (count % 4 === 0) {
            return fn(...args);
        }
        return 'something went wrong :/';
    }
}

/* aQuarter() implements the type of
 * encapsulation from 01_alternate_and_twice;
 * Within the scope of aQuarter(),
 * I initialize count to 0,
 * increment count by 1 each time an aQuarter() object is called,
 * and either run fn() if count is divisible by 4, or
 * return 'something went wrong :/'.
 *
 * This means that it's going to increment count
 * exactly three times before it first calls fn().
 * The value of count keeps incrementing, and modular
 * division evaluates it to either 0, 1, 2, or 3.
 *
 * fn(a, b) satisfies all specs except for the extra credit.
 * So I am using the rest operator to represent any number of arguments.
 *
 * In function(...args), the arguments are converted to an array ex. [arg1, arg2, arg3].
 * Without this, we get TypeError: Found non-callable @@iterator.
 *
 * Then, return fn(...args) uses the spread operator
 * to expand the array into its individual arguments.
 *
 * My question is, exactly what data type does the rest parameter see
 * during its invocation, that is, within function(...args)?
 *
 * That is, multiplier(1,2,3,4,5,6,7,8,9,10,11) has eleven arguments.
 * What is the data type for these eleven arguments, such that ...args coerces them to an array?
 * I know this question seems kind of vague and I want you to know that I am just wondering
 * exactly how the rest parameter works to allow any number of arguments.  We could also
 * just talk about this over chat and I will do some research into this as well.  */

 /* I'm not quite sure what you mean by your question, but the type of args is an array.
  * It is an instance of Array, so it has access to all of the Array.prototype methods.
  * Each element of args is a number.
  *
  * However, you could also do something like this:
  * function(num1, num2, ...args) {
  * 	console.log(num1); // logs 1 (number)
  * 	console.log(num2); // logs 2 (number)
  * 	console.log(args); // logs [3,4,5,6,7,8,9,10,11] (number array)
  * }
  * rest literally just means "The rest of the arguments in an array"
  * */
