const find = require('lodash/find');
const remove = require('lodash/remove');

module.exports.Cart = class {
  items = [];

  add(item) {
    const itemToCheck = { product: item.product };

    if (find(this.items, itemToCheck)) {
      remove(this.items, itemToCheck);
    }

    this.items.push(item);
  }

  remove(product) {
    remove(this.items, { product });
  }

  getTotal() {
    return this.items.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0,
    );
  }

  summary() {
    const total = this.getTotal();
    const items = this.items;

    return {
      total,
      items,
    };
  }

  checkout() {
    const { total, items } = this.summary();

    this.items = [];
    return {
      total,
      items,
    };
  }
};
