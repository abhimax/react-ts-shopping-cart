import { FC } from "react";
import { IInputProps } from "./Input.d";

const Input: FC<IInputProps> = ({
    value,
    name,
    placeholder,
    type,
    onChange,
    error,
    ...rest
}) => {
    return (
        <div>
            <input
                type={type}
                value={value}
                name={name}
                className="form-input"
                placeholder={placeholder}
                onChange={onChange}
                {...rest}
            />
            {error && (
                <span className="error">
                    Please Add Product Name before you adding Product.
                </span>
            )}
        </div>
    );
};
export default Input;
