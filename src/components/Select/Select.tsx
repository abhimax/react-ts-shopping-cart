import { FC, useEffect, useState } from "react";
import { ISelectProps } from "./Select.d";

const Select: FC<ISelectProps> = ({ itemList, onShopSelect, shopName, error }) => {
    const [value, setValue] = useState("DEFAULT");
    const [selectError, setError] = useState(false);

    useEffect(() => {
        setError(error)
    }, [error])

    useEffect(() => {
        if (!shopName.trim()) {
            setValue("DEFAULT");
        }
    }, [shopName]);

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        if(value.trim()) {
            setError(false)
        }
        const data = itemList.find((el) => el.id === value);
        setValue(data?.id || "DEFAULT");
        onShopSelect(data?.name || "");
    };

    return (
        <div>
            <select
                onChange={selectChange}
                value={value}
                className="form-select custom-arrow"
            >
                <option value="DEFAULT" disabled>
                    Select shop
                </option>
                {itemList.map((item, key) => {
                    return (
                        <option key={key} value={item.id}>
                            {item.name}
                        </option>
                    );
                })}
            </select>
            { selectError && (
                <span className="error">
                    Please Select Shop before you adding Product.
                </span>
            )}
        </div>
    );
};
export default Select;
