import { ProductModule } from "../products/ProductModule";

export class CartProductModel {
    cart_item_id: string;
    user_id: string;
    product: ProductModule;
    quantity: number;
    price: number;
    created_at: number;

  
    constructor(user_id: string, quantity: number, price: number, product: ProductModule) {
      this.cart_item_id = '';
      this.user_id = user_id;
      this.quantity = quantity;
      this.product = product;
      this.price = price;
      this.created_at = 1707523200;
    }
}