/* eslint-disable no-unused-vars */
class VM {
  constructor(inventory) {
    this.inventory = inventory;
  }
  sale(itemID) {
    const item = this.inventory[itemID];
    if (item.stock) {
      item.stock--;
      return `1 ${item.name} - Thank you and come again!`;
    } else if (item.stock === 0) {
      return `${item.name} is out of stock :( Come back soon!`;
    } else {
      return `${itemID} is not a valid item ID, please try again!`;
    }
  }
  stockTotal() {
    const total = Object.keys(this.inventory).reduce((start, key) => {
      return start + this.inventory[key].stock;
    }, 0);

    return total ? `${total} item(s)` : 'Out of Stock';
  }
}
