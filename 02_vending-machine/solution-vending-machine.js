/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class VM {
    constructor(inv) { this.inventory = inv; }
    sale(itemID) {
        if (this.inventory[itemID].stock !== 0) {
            this.inventory[itemID].stock--;
            return `1 ${this.inventory[itemID].name} - Thank you and come again!`;
        }
        return `Out of Stock`;
    }
    stockTotal() {
        let total = Object.keys(this.inventory)
        .reduce((acc, id) => acc + this.inventory[id].stock, 0)
        return (total === 0) ? `Out of Stock` : `${total} item(s)`;
    }
}
/* this.inventory is an object. I wonder if you meant to say "not an array" */
/* this.inventory is not an object and is not iterable.
 * the `stockTotal` method can be implemented using a for-of loop:
                        * let total = 0;
                        * for (let id of Object.keys(this.inventory)) {
                        *   total += this.inventory[id].stock
                        * }
 * .reduce uses less code and that is why it's required by the specs.
 *
 * Is there a way to make this.inventory directly iterable using a for-of loop? */

 /* There are many ways to iterate over this.inventory:
  *
  * for (let key in this.inventory) {
  * 	// have to do a .hasOwnProperty check in here.
  * }
  *
  * for (let key of Object.keys(this.inventory)) {
  *
  * }
  *
  * for (let val of Object.values(this.inventory)) {
  *
  * }
  *
  * for (let [key, val] of Object.entries(this.inventory)) {
  *     // this syntax is using array destructuring. For every entry in the object,
  *     // we get an array where the first element is the key, and the second element is the value.
  *     // We are just destructuring that array to name the variables.
  * }
  *
  * Object.entries(this.inventory).forEach(([key, val]) => {
  *
  * })
  *
  * Object.keys(this.inventory).forEach(key => {
  * 	let val = this.inventory[key];
  * })
  *
  * Object.values(this.inventory).forEach(val => {
  *
  * })
  *
  * Just pick the one that you like the best. */
