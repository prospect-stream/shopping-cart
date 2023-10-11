import { useAddItemToShoppingCart } from "../api/shoppingCart";
import { Item } from "../api/types";

export type ItemBoxProps = {
  item: Item
}

export const ItemBox = ({ item }: ItemBoxProps) => {
  const [addItemToShoppingCart, inProgress] = useAddItemToShoppingCart();

  return (
    <div style={{ border: '1px solid black', height: '350px', flex: '1 1 300px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{height: '50px'}}>{item.title}</h3>
        <div>
          <img src={item.image} style={{ maxHeight: '150px', aspectRatio: '1 / 1'}} />
        </div>
        <p>${item.price}</p>
        <button disabled={inProgress} onClick={() => addItemToShoppingCart(item)}>Add to cart</button>
      </div>
    </div>
  )
}
