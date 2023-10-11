import { ItemsGrid } from "./Items";
import { ShoppingCart } from "./ShoppingCart";

export const App = () => {
  return (
    <div style={{ display: 'flex', gap: "30px" }}>
      <div style={{ flex: 2 }}>
        <ItemsGrid />
      </div>
      <div style={{ flex: 1 }}>
        <ShoppingCart />
      </div>
    </div>
  )
}
