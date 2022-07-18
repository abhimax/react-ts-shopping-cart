import { FC } from "react";
import Item from "./Item";


const ListItem: FC = () => {
  return (
        <div className="item-list-wrapper">
            <Item name="name1" shop="shop1" onClick={()=>{console.log("Clicked!")}}/>
            <Item name="name2" shop="shop2" onClick={()=>{console.log("Clicked!")}}/>
            <Item name="name2" shop="shop2" onClick={()=>{console.log("Clicked!")}}/>
        </div>
  );
};

export default ListItem;