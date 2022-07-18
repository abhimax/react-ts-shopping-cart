import { FC } from "react";
import { Button } from "../../components/Button";
import {IItemProps} from "./Item.d";

const Item: FC<IItemProps> = ({name, shop, onClick}) => {
  return (
        <div className="item-wrapper">
            <div className="item-name">{name}</div>
            <div className="shop-name">{shop}</div>
            <div className="item-action">
            <Button className="list-button" onClick={onClick}>Delete</Button>
            </div>
        </div>
  );
};

export default Item;