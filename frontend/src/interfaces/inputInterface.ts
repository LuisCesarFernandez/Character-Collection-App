import type React from "react";

export interface InputInterface {
    type?:React.HTMLInputTypeAttribute,
    step?:string,
    name:string,
    value:string | number,
    placeholder:string,
    onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void,
}