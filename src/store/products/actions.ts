import { ADD, DELETE } from "./actionType";
import { AddAction, DeleteAction } from "./interface";
import { v4 as uuid } from "uuid";

export const addProduct = (name: string, shop: string): AddAction => ({
    type: ADD,
    payload: { id: uuid(), name, shop },
});

export const deleteProduct = (id: string): DeleteAction => ({
    type: DELETE,
    payload: { id },
});
