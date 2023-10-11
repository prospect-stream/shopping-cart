import { useShoppingCart } from "./api/shoppingCart"

export const ShoppingCart = () => {
  const shoppingCart = useShoppingCart();

  if (!shoppingCart) {
    return <>Loading...</>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Shopping cart</h1>
      <table>
        <thead>
          <tr>
            <th style={{textAlign: 'left'}}>Item id</th>
            <th style={{textAlign: 'left'}}>Title</th>
            <th style={{textAlign: 'left'}}>Price</th>
          </tr>
        </thead>
        <tbody>
          {shoppingCart.items.map(item => (
            <tr key={item.id}>
              <td style={{textAlign: 'left'}}>{item.id}</td>
              <td style={{textAlign: 'left'}}>{item.title}</td>
              <td style={{textAlign: 'left'}}>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}