const find = require('lodash/find');
const remove = require('lodash/remove');
const Money = require('dinero.js');

Money.defaultCurrency = 'BRL';
Money.defaultPrecision = 2;

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
    return this.items.reduce((acc, item) => {
      return acc.add(Money({ amount: item.quantity * item.product.price }));
    }, Money({ amount: 0 }));
  }

  summary() {
    const total = this.getTotal().getAmount();
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
