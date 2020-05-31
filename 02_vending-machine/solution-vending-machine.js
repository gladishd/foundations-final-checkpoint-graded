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
/* this.inventory is not an object and is not iterable.  
 * the `stockTotal` method can be implemented using a for-of loop:
                        * let total = 0;
                        * for (let id of Object.keys(this.inventory)) {
                        *   total += this.inventory[id].stock 
                        * }
 * .reduce uses less code and that is why it's required by the specs.  
 * 
 * Is there a way to make this.inventory directly iterable using a for-of loop? */
