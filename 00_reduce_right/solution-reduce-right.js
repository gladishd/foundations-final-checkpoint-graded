/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
const reduceRight = (arr, acc, fn) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        acc = fn(acc, arr[i]);
    }
    return acc;
}

/* For this exercise, I am iterating 
 * backward through the array arr, 
 * updating the value of acc (which is 
 * initially defined as an argument), 
 * and doing this with the reducing 
 * function fn(), which updates the 
 * accumulator based on the current 
 * value at arr[i].  
 * 
 * The accumulator can be a string, 
 * a number, an array [], or any object {}. 
 *  
 * fn() must be customized to either push, 
 * add, subtract, or do any operation with 
 * its two arguments as a way of using 
 * arr[i] to update acc.  
 * 
 * Whether it is creating new values at certain indices/keys, 
 * adding onto a numeric sum, or concatenating/adding onto a string, 
 * fn() is called for each element of the array.  
 * It is responsible for the vast majority of the reduction in reduceRight(). 
 * 
 * In reduceRight(), where is the value of acc stored?  
 * reduceRight() takes three parameters.  If we initialize acc to say, 0, 
 * is this the same as declaring it to be 0 within the scope of the function?  
 * 
 * For example, is 
            * const reduceRight = (arr, acc, fn) => {
            *   for (let i = arr.length - 1; i >= 0; i--) {
            *       acc = fn(acc, arr[i]);
            *   }
            *   return acc;
            * } 
            * const reducedResult = reduceRight(
            *   ['o', 'l', 'l', 'e', 'h'],
            *   '',
            *   (prev, curr) => prev + curr
            * );
 * the same as 
            * const reduceRight = (fn) => {
            *   let arr = ['o', 'l', 'l', 'e', 'h'];
            *   let acc = '';
            *   for (let i = arr.length - 1; i >= 0; i--) {
            *       acc = fn(acc, arr[i]);
            *   }
            *   return acc;
            * }
            * const reducedResult = reduceRight((prev, curr) => prev + curr);
 * 
 * since we're just initializing the variables in a different place?  */
