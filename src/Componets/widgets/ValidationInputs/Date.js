/* eslint-disable no-mixed-operators */
import { useState } from "react";
import InputMask from "react-input-mask";
const CNIC = (props) => {
    const [newState, setState] = useState(['']);
    const Arr = {
        value: "",
        mask: 'xxxxx-xxxxxxx-x',
    }
const onChange = (event) => {
    let value = event.target.value;
    let newState = {
        mask: 'xxxxx-xxxxxxx-x',
        value: value
    };
    if (/^3[47]/.test(value)) {
        newState.mask = 'xxxxx-xxxxxxx-x';
    }
    setState(newState);
}
return (
    // size="4" maxlength="3"
    <>

        <div className={'custom-field' && props.cls || "custom-field"}>
            {
                <InputMask {...Arr} onChange={onChange} id={props.fieldname} value={newState.value} autoComplete="off" required disabled={props.disabled} name={props.name} placeholder={props.fieldname}/> 
            }
            <label htmlFor={props.fieldname}>{props.span}{props.fieldname}</label>
        </div>
    </>


)

}
export default CNIC;




