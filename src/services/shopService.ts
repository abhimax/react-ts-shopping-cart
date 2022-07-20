import { IItem } from "../models/IItem";

export const getShopList = async (): Promise<[IItem]> => {
    let data: any = [];
    try {
        data = await fetch("/data/shop.json");
    } catch (error) {
        console.log(error);
    }
    return data.json();
};
