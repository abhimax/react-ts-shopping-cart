import { SelectHTMLAttributes } from "react";
import { IItem } from "../../models/IItem";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    itemList: IItem[];
}

export { ISelectProps }