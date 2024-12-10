import { ShopItem } from './command-shop.model';

export class ShopService {
  cartItems: ShopItem[] = [];

  shopItems: ShopItem[] = [
    {
      id: '1',
      cost: 12.33,
      name: 'Egg',
    },
    {
      id: '2',
      cost: 20.31,
      name: 'Chicken',
    },
    {
      id: '3',
      cost: 16.23,
      name: 'Fish',
    },
    {
      id: '4',
      cost: 5.6,
      name: 'Bread',
    },
  ];

  constructor() {}

  addToCart(shopItem: ShopItem) {
    this.cartItems = [...this.cartItems, shopItem];
  }

  removeFromCart(shopItem: ShopItem) {
    this.cartItems = this.cartItems.filter((i) => i !== shopItem);
  }
}
