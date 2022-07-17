import { FC, useState } from "react";
import { Select } from "../../components/Select";
import shopList from "../../data/shop.json";
import { IItem } from "../../models/IItem";

interface IStates {
    shops: IItem[];
  }
const AddItemView: FC = () => {
    const [itemList, setProductsData] = useState<Array<IItem>>(shopList);
  return (
    <div>
        Add to cart
        <Select itemList={itemList}/>
    </div>
  );
};

export default AddItemView;