import { FC, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import shopList from "../../data/shop.json";
import { IItem } from "../../models/IItem";

interface IStates {
    shops: IItem[];
  }
const AddItemView: FC = () => {
    const [itemList, setProductsData] = useState<Array<IItem>>(shopList);
  return (
        <div className="add-item-wrapper">
            <Input type="text" name="name" placeholder="Name" onChange={()=>{}} />
        <Select itemList={itemList}/>
        <Button className="form-button" onClick={function (): void {
                  throw new Error("Function not implemented.");
              } }>Add</Button>
        </div>
  );
};

export default AddItemView;