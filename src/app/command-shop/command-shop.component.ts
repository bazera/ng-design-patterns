import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShopCommand, ShopItem } from './command-shop.model';
import { ShopService } from './command-shop.service';
import {
  AddToCartCommand,
  RemoveFromCartCommand,
} from './command-shop.commands';

@Component({
  selector: 'app-command-shop',
  imports: [],
  providers: [ShopService],
  templateUrl: './command-shop.component.html',
  styleUrl: './command-shop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandShopComponent {
  commandHistory: ShopCommand[] = [];
  undoneCommands: ShopCommand[] = [];

  constructor(public shopService: ShopService) {}

  addToCart(shopItem: ShopItem) {
    const command = new AddToCartCommand(shopItem, this.shopService);
    command.execute();
    this.commandHistory.push(command);
  }

  removeFromCart(shopItem: ShopItem) {
    const command = new RemoveFromCartCommand(shopItem, this.shopService);
    command.execute();
    this.commandHistory.push(command);
  }

  undo() {
    const command = this.commandHistory.pop();
    if (command) {
      command.undo();
      this.undoneCommands.push(command);
    }
  }

  redo() {
    const command = this.undoneCommands.pop();
    if (command) {
      command.execute();
      this.commandHistory.push(command);
    }
  }

  sumCartCost() {
    return Math.floor(
      this.shopService.cartItems.reduce((acc, curr) => (acc += curr.cost), 0)
    );
  }
}
