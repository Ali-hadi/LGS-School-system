/* eslint-disable no-mixed-operators */
import { useState } from "react";
import InputMask from "react-input-mask";
const Input = (props) => {
    const [newState, setState] = useState();
    const Arr = {
        value: "",
        mask: '9999-9999-9999-9999',
    }
const onChange = (event) => {
    let value = event.target.value;
    let newState = {
        mask: '9999-9999-9999-9999',
        value: value
    };
    if (/^3[47]/.test(value)) {
        newState.mask = '9999-999999-99999';
    }
    setState(newState);
}
return (
    // size="4" maxlength="3"
    <>

        <div className={'custom-field' && props.cls || "custom-field"}>
            {
                "" 
                && <InputMask {...Arr} onChange={onChange} id={props.fieldname} value={newState.value} autoComplete="off" required disabled={props.disabled} name={props.name} placeholder={props.fieldname}/> ||
                <input autoComplete="off" required type={props.type} onChange={props.onChange} disabled={props.disabled} name={props.name} id={props.fieldname} value={props.value} placeholder={props.fieldname} />
            }
            <label htmlFor={props.fieldname}>{props.span}{props.fieldname}</label>
        </div>
    </>


)

}
export default Input;




