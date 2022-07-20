import { SelectHTMLAttributes } from "react";
import { IItem } from "../../models/IItem";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    itemList: IItem[];
    shopName: string;
    onShopSelect: (value: string) => void;
    error: boolean;
}

export { ISelectProps };
