const { Cart } = require('./Cart');

describe('Cart', () => {
  let cart;
  const product = {
    title: 'Adidas Running Shoes',
    price: 35388, // 353.88 | R$ 353,88
  };

  const product2 = {
    title: 'Adidas Running Shoes womans',
    price: 41872, // 353.88 | R$ 353,88
  };

  beforeEach(() => {
    cart = new Cart();
  });

  describe('getTotal()', () => {
    it('should return 0 when getTotal() is executed in a newly created cart', () => {
      expect(cart.getTotal()).toEqual(0);
    });

    it('should multiply the quantity and price and receive the total amount', () => {
      const item = {
        product,
        quantity: 2, // 70776
      };

      cart.add(item);

      expect(cart.getTotal()).toEqual(70776);
    });

    it('should ensure no more than on product exists at a cart', () => {
      cart.add({ product, quantity: 2 });
      cart.add({ product, quantity: 1 });

      expect(cart.getTotal()).toEqual(35388);
    });

    it('should update total when a product gets included and then removed', () => {
      cart.add({ product, quantity: 2 });
      cart.add({ product: product2, quantity: 1 });

      cart.remove(product);

      expect(cart.getTotal()).toEqual(41872);
    });
  });
});
