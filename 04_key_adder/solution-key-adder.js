/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
function keyAdder() {
    let total = 0;
    for (let val of Object.values(this)) {
        if (typeof(val) === 'number') { total += val; }
    }
    return total;
}

/* The special thing about this function,
 * is that it's invoked using the .call() method.
 * .call()'s first parameter asks for the value of `this`.
 * What this means firstly is that we have to be
 * able to refer to the correct value of `this`.
 *
 * Using an arrow function will cause the value of `this`
 * to be the global object, where it is declared.
 * So I am using the traditional function syntax in
 * order that *this* is equal to the value of `this`
 * provided by .call().
 *
 * Otherwise, it sums over the window object's values
 * and we get values like 4494 instead of 36.  */

 /* I'm glad that you remembered to use a normal function here. You're right. An arrow function screws this up */