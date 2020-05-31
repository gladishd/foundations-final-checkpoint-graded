/* eslint-disable no-unused-vars */
const alternate = (fn) => {
    let returnSomething = false;
    return function() {
        returnSomething = !returnSomething;
        if (returnSomething) { return fn(); }
        return;
    }
}
/* alternate() is designed to return either the 
 * return value of fn() if returnSomething === true, 
 * or undefined if returnSomething === false.  
 * 
 * Each time it is called, the value of the 
 * encapsulated boolean is flipped; although it's 
 * only accessible within the scope of the alternate() 
 * function, we know that it exists and is either true 
 * or false.  
 * 
 * My only question is, 
 * const obj1 = alternate(() => 'hey');
 * Can we access the current value of returnSomething for obj1? */

const twice = (fn) => {
    let nCalls = 0;
    return function() {
        nCalls++;
        if (nCalls > 2) { return 0; }
        return fn();
    }
}
/* twice() is based on alternate(), and returns 0 
 * if it has been called more than twice. */