import { ShopCommand, ShopItem } from './command-shop.model';
import { ShopService } from './command-shop.service';

export class AddToCartCommand implements ShopCommand {
  constructor(private shopItem: ShopItem, private shopService: ShopService) {}

  execute() {
    this.shopService.addToCart(this.shopItem);
  }

  undo() {
    this.shopService.removeFromCart(this.shopItem);
  }
}

export class RemoveFromCartCommand implements ShopCommand {
  constructor(private shopItem: ShopItem, private shopService: ShopService) {}

  execute() {
    this.shopService.removeFromCart(this.shopItem);
  }

  undo() {
    this.shopService.addToCart(this.shopItem);
  }
}
