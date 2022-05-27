/* eslint-disable no-mixed-operators */
import { useState } from "react";
import InputMask from "react-input-mask";
const Phonenovalidate = (props) => {
    const [newState, setState] = useState(['']);
    const Arr = {
        value: "",
        mask: 'x xxx xxxxxxx',
    }
const onChange = (event) => {
    let value = event.target.value;
    let newState = {
        mask: 'x xxx xxxxxxx',
        value: value
    };
    if (/^3[47]/.test(value)) {
        newState.mask = 'x xxx xxxxxxx';
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
export default Phonenovalidate;




