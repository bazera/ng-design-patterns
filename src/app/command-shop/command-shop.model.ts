export interface ShopItem {
  id: string;
  cost: number;
  name: string;
}

export interface ShopCommand {
  execute(): void;
  undo(): void;
}
