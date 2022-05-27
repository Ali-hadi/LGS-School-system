import { useState } from "react";
import Input from "../../input";


const Steptwo = (props) =>{
    const[name, setName] = useState(['']);
    const[lname, setLname] = useState(['']);
    const[student, setStudent] = useState(['']);
    const[studentid, setId] = useState(['']);
    const[fees, setFees] = useState(['']);
    const[discounts, setDiscount] = useState(['']);



    return(

        <>
           <Input 
            class="input_types"
            onChange={(e) => setName(e.target.value)}
            value={name}
           />
           <Input 
            class="input_types"
            onChange={(e) => setLname(e.target.value)}
            value={lname}
           />
           <Input 
            class="input_types"
            onChange={(e) => setStudent(e.target.value)}
            value={student}
           />
           <Input 
            class="input_types"
            onChange={(e) => setId(e.target.value)}
            value={studentid}
           />
           <Input 
            class="input_types"
            onChange={(e) => setFees(e.target.value)}
            value={fees}
           />
           <Input 
            class="input_types"
            onChange={(e) => setDiscount(e.target.value)}
            value={discounts}
           />
           
        </>

    )

} 
export default Steptwo;