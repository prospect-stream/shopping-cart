import items from './items.json';
import { Item, ShoppingCart } from './types';

const shoppingCart: ShoppingCart = {
  items: []
};


export const getItems = async (): Promise<Item[]> => {
  return items;
}

export const getShoppingCart = async (): Promise<ShoppingCart> => {
  return shoppingCart;
}

export const addItemToShoppingCart = async (item: Item): Promise<void> => {
  shoppingCart.items.push(item);
}