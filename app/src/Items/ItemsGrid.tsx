import { useItems } from "../api/items";
import { ItemBox } from "./ItemBox";


export const ItemsGrid = () => {
  const items = useItems();

  console.log(items);

  if (!items) {
    return <>Loading...</>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Items</h1>
      <div style={{ flex: '1', display: 'flex', flexWrap: 'wrap' }}>
        {items.map(item => (
          <ItemBox key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
