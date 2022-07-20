import { FC } from "react";
import AddItemView from "../../layouts/AddItemView/AddItemView";
import { SelectedItemView } from "../../layouts/SelectedItemView";

const ShoppingCart: FC = () => {
    return (
        <div className="cart-wrapper">
            <h2 className="section-title">Add to cart</h2>
            <AddItemView />
            <SelectedItemView />
        </div>
    );
};

export default ShoppingCart;
