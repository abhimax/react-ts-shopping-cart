import { ADD, DELETE } from "./actionType";
import { AddAction, ProductsState } from "./interface";

const initialState = {
    products: [],
};

function productReducer(
    state: ProductsState = initialState,
    action: AddAction
) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                products: [
                    ...state.products,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        shop: action.payload.shop,
                    },
                ],
            };
        case DELETE:
            state.products = state.products.filter(
                (el) => el.id !== action.payload.id
            );
            return { ...state };
        default:
            return state;
    }
}

export default productReducer;
