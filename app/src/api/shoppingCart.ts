import { useCallback, useEffect, useState } from "react";
import { Item, ShoppingCart } from "./types";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>();
  
  useEffect(() => {
    fetch('http://localhost:3000/shopping-cart').then(res => res.json()).then(setShoppingCart);
  }, []);

  return shoppingCart;
}

export const useAddItemToShoppingCart = () => {
  const [inProgress, setInProgress] = useState(false);

  const c = useCallback(async (item: Item) => {
    setInProgress(true);
    try {
      await fetch('http://localhost:3000/shopping-cart/items', {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: item.id })
      });
    } finally {
      setInProgress(false);
    }
  }, []);

  return [c, inProgress] as const;
}