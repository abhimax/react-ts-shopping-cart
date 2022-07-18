import { FC } from "react";
import { Select } from "../../components/Select";
import AddItemView from "../../layouts/AddItemView/AddItemView";

const ShoppingCart: FC = () => {
  return (
    <div className="cart-wrapper">
      <h2 className="section-title">Add to cart</h2>
      <AddItemView/>
    </div>
  );
};

export default ShoppingCart;