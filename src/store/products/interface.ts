import { ADD, DELETE } from "./actionType";

export interface AddAction {
    type: typeof ADD;
    payload: {
        id: string,
        name: string;
        shop: string;
    };
}

export interface DeleteAction {
    type: typeof DELETE;
    payload: {
        id: string;
    }
}

export interface ProductsState {
    products: Array<{
        id: string,
        name: string;
        shop: string;
    }>;
}
