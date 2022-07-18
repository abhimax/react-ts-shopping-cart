import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string; 
    name: string; 
    placeholder: string; 
    type: string;
    onChange: () => void;

}

export { IInputProps }