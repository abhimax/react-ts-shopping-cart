import { FC } from "react";
import {IButtonProps} from "./Button.d";

const Button: FC<IButtonProps> = ({children,onClick, ...rest}) =>{
    return <button onClick={onClick} {...rest}>{children}</button>
}
export default Button;