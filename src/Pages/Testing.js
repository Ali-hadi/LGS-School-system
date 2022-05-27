import { useState } from "react";
import axios from "axios";
const Testing = () =>{

    const[name, setName] = useState(['']);
    const[fname, setFname] = useState(['']);
    const[lname, setLname] = useState(['']);
    const[studentclass, setStudentclass] = useState(['']);

    
    function Submitform(event){
        event.preventDefault();
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: [{
                name: `${name}`,
                fname: `${fname}`,
                lname: `${lname}`,
                studentclass: `${studentclass}`,
            }]
          });
    }
    
    

    return(
        <>
            
            <form onSubmit={Submitform}>
                <div className="input">
                    <input type="text" value={name} onChange={ (e)=> setName(e.target.value)} placeholder="name"/>
                </div>
                <div className="input">
                    <input type="text" value={fname} onChange={ (e)=> setFname(e.target.value)} placeholder="student name"/>
                </div>
                <div className="input">
                    <input type="text" value={lname} onChange={ (e)=> setLname(e.target.value)} placeholder="Student age"/>
                </div>
                <div className="input">
                    <input type="text" value={studentclass} onChange={ (e)=> setStudentclass(e.target.value)} placeholder="Student class"/>
                </div>
                <div className="">
                    <button type="submit" >send details </button>
                </div>

            </form>
        </>
    )
}
export default Testing;