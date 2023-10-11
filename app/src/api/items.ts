import { useEffect, useState } from "react";
import { Item } from "./types";

export const useItems = () => {
  const [items, setItems] = useState<Item[]>();

  useEffect(() => {
    fetch('http://localhost:3000/items').then(res => res.json()).then(setItems);
  }, []);

  return items;
}
