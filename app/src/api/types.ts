export type ShoppingCart = {
  items: Item[]
}

export type Item = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
  price: number;
}
