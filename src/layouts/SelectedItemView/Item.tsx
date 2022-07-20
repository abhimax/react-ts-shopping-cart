import { FC } from "react";
import { Button } from "../../components/Button";
import { IItemProps } from "./Item.d";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/products/actions";

const Item: FC<IItemProps> = ({ id, name, shop }) => {
    const dispatch = useDispatch();

    const onsubmit = (id: string) => {
        dispatch(deleteProduct(id));
    };

    return (
        <div className="item-wrapper">
            <div className="item-name">{name}</div>
            <div className="shop-name">{shop}</div>
            <div className="item-action">
                <Button className="list-button" onClick={() => onsubmit(id)}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default Item;
