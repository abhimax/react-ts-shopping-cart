import { FC } from "react";
import Item from "./Item";
import store from "../../store/index";
import { IItemProps } from "./Item.d";
import { useSelector } from "react-redux";

type RootState = ReturnType<typeof store.getState>;

const ListItem: FC = () => {
    const products = useSelector<RootState, IItemProps[]>(
        (state) => state.product.products
    );

    return (
        <div className="item-list-wrapper">
            {products.length
                ? products.map((el) => (
                      <Item
                          key={el.id}
                          id={el.id}
                          name={el.name}
                          shop={el.shop}
                      />
                  ))
                : ""}
        </div>
    );
};

export default ListItem;
