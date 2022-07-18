import { FC } from "react";
import {IInputProps} from "./Input.d";

const Input: FC<IInputProps> = ({value, name, placeholder, type, onChange, ...rest}) =>{
    return <input
    type={type}
    value={value}
    name={name}
    className="form-input"
    placeholder={placeholder}
    onChange={onChange}
    {...rest}
  />
}
export default Input;