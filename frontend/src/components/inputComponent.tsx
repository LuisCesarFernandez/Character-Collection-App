import type { InputInterface } from "../interfaces/inputInterface";
import '../styles/FormStyle.css'

export const InputComponent = ({type, step, name, value, placeholder, onChange}:InputInterface) => {
    return(
    <input type={type} step={step} name={name} placeholder={placeholder} value={value} onChange={onChange} className="input-component">
    </input>
    )
}