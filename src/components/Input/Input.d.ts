import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    name: string;
    placeholder: string;
    type: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    error: boolean;
}

export { IInputProps };
