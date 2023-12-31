export interface CartItem {
  item: string;
  quantity: number;
  price: number;
}

export interface Descriptor {
  orderId: string;
  items: Array<CartItem>;
}
