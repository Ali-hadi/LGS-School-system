/* eslint-disable no-sequences */
import React, { useEffect, useState } from "react";
import axios from "axios";

// import { v4 as uuid } from 'uuid';
import Input from "../ValidationInputs/input";
import EmailValidate from "../ValidationInputs/Email";
import Phonenovalidate from "../ValidationInputs/Phone";
import CNIC from "../ValidationInputs/Date";
// import Multistep from "react-multistep";
// import Stepone from "./Substeps/Step1";
// import Steptwo from "./Substeps/Step2";


import Webcam from "react-webcam";

function Steps() {

    // const steps = [
    //     { name: 'StepOne', component: <Stepone /> },
    //     { name: 'StepTwo', component: <Steptwo /> },
    //     // { name: 'StepThree', component: <h1>step 3</h1> },
    //     // { name: 'StepFour', component: <h1>step 4</h1> }
    // ];

    // eslint-disable-next-line no-unused-vars
    const [exdate, setExdate] = useState(['']);
    const [sfname, setSfname] = useState(['']);
    const [slname, setSlname] = useState(['']);
    const [semail, setSemail] = useState(['']);
    const [sbform, setSbform] = useState(['']);
    const [sdob, setSdob] = useState(['']);
    const [pcnic, setPcnic] = useState(['']);
    const [pmail, setPmail] = useState(['']);
    const [pcontactno, setPcontactno] = useState(['']);
    const [occopation, setOccopation] = useState(['']);
    const [bcity, setBcity] = useState(['']);
    const [barea, setBarea] = useState(['']);
    const [relaship, setRelaship] = useState(['']);
    const [address, setAddress] = useState(['']);
    const [stest, setStest] = useState('yes');
    const [stesttype, setStesttype] = useState(['']);
    const [cplan, setCplan] = useState(['']);
    const [sessions, setSessions] = useState(['']);
    const [remarks, setRemarks] = useState(['']);

    // const [uploadImage, setUploadImage] = useState(['']);
    const [gender, setGender] = useState("male");

    const [time, setTime] = useState(['']);
    const [date, setDate] = useState(['']);

    const [count, setCount] = useState(0);

    


    




    const [photoSrc, setphotoSrc] = React.useState(null);
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        const formData = new FormData();
        formData.append('file', photoSrc);
        const snapSrc = webcamRef.current.getScreenshot();
        setphotoSrc(snapSrc);
    }, [photoSrc]);


    const Incriment = () => setCount(count + 1);




    function Submitform(e) {
        e.preventDefault();
        axios({

            method: 'Post',
            url: '/note',
            data: {
                photoSrc: `${photoSrc}`,
                sfname: `${sfname}`,
                slname: `${slname}`,
                semail: `${semail}`,
                sbform: `${sbform}`,
                sdob: `${sdob}`,
                pmail: `${pmail}`,
                pcontactno: `${pcontactno}`,
                occopation: `${occopation}`,
                pcnic: `${pcnic}`,
                bcity: `${bcity}`,
                barea: `${barea}`,
                relaship: `${relaship}`,
                address: `${address}`,
                gender: `${gender}`,
                stest: `${stest}`,
                stesttype: `${stesttype}`,
                sessions: `${sessions}`,
                remarks: `${remarks}`,
                date: `${Currentdate} ${current}`
            },
            headers: { "Content-Type": "multipart/form-data" },

        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });



    }




    // let unique_id = uuid();
    let currentDate = new Date();
    let current = currentDate.toLocaleTimeString();
    let Currentdate = currentDate.toLocaleDateString();


    useEffect(() => {
        setTimeout(() => {
            setTime(current);
        }, 1000);

    });

    


    


    



    return (
        <form className="form_style" onSubmit={Submitform}>
            <div className="heading mb20">
                <h4>Student Registration</h4>

            </div>
            {/* <Multistep activeStep={1} showNavigation={false} ><Multistep />     */}
            <div className="row">
                <div className="col-9">
                    <div className="flex">
                        <Input
                            className="idGenerate disabled"
                            fieldname="Registration ID"
                            value={count}
                            disabled={true}
                            type="text"
                        />
                        <Input
                            className="idGenerate"
                            onChange={(e) => setDate(e.target.value)}
                            value={`${Currentdate} ${time}`}
                            fieldname="Registration Date & Time"
                            type="text"
                        />
                        <Input
                            onChange={(e) => setExdate(e.target.value)}
                            value={exdate}
                            fieldname="Exp.date"
                            type="date"
                        />

                        <Input
                            onChange={(e) => setSfname(e.target.value)}
                            value={sfname}
                            fieldname="Student First Name"
                        />
                        <Input
                            onChange={(e) => setSlname(e.target.value)}
                            value={slname}
                            fieldname="Student last Name"
                        />
                        
                        <Input
                            onChange={(e) => setSemail(e.target.value)}
                            value={semail}
                            fieldname="Student Email@"
                            type="date"
                        />
                        <CNIC
                            
                            fieldname="Student CNIC/B-form"
                        />
                        <Input

                            onChange={(e) => setSdob(e.target.value)}
                            value={sdob}
                            fieldname="Date of birth"
                            type="date"
                        />

                        <Input
                            onChange={(e) => setSemail(e.target.value)}
                            value={semail}
                            fieldname="@Email"
                            type="text"
                        />
                        <Phonenovalidate

                           
                            fieldname="Phone Number"
                        />

                        <CNIC
                            
                            fieldname="Parent CNIC"
                        />
                        <Input

                            onChange={(e) => setOccopation(e.target.value)}
                            value={occopation}
                            fieldname="occupation"
                        />
                        <Input

                            onChange={(e) => setBcity(e.target.value)}
                            value={bcity}
                            fieldname="Branch City"
                        />

                        <Input

                            onChange={(e) => setBarea(e.target.value)}
                            value={barea}
                            fieldname="Branch area"
                        />
                        <Input

                            onChange={(e) => setRelaship(e.target.value)}
                            value={relaship}
                            fieldname="Relationship"
                        />
                        <Input

                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                            fieldname="address"
                        />

                        <Input

                            onChange={(e) => setStesttype(e.target.value)}
                            value={stesttype}
                            fieldname="entry test type"
                        />
                        <Input

                            onChange={(e) => setCplan(e.target.value)}
                            value={cplan}
                            fieldname="class plan"
                        />
                        <Input

                            onChange={(e) => setSessions(e.target.value)}
                            value={sessions}
                            fieldname="session"
                        />
                        <Input

                            onChange={(e) => setRemarks(e.target.value)}
                            value={remarks}
                            fieldname="meta information"
                        />
                    </div>
                </div>
                <div className="col-3">
                    <div className="element_pr">
                        <div className="webCam">
                            <Webcam
                                audio={false}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                            />
                            <button className="btn_capture" onClick={capture}>Capture</button>
                            {photoSrc && (
                                <img className="photo_snap" src={photoSrc} alt="img here" />
                            )}
                        </div>
                        <div className="flex">
                            <div className="selections">
                                <h6>Gender *</h6>
                                <div className="flex">
                                    <div className="radio_btns">
                                        <Input
                                            cls="radio-box"
                                            onChange={(event) => setGender(event.target.value)}
                                            checked={gender === 'male'}
                                            value="male"
                                            fieldname={`Male`}
                                            type="radio"
                                            span={<span></span>}
                                            name="gender"
                                        />
                                    </div>
                                    <div className="radio_btns">
                                        <Input
                                            cls="radio-box"
                                            onChange={(event) => setGender(event.target.value)}
                                            checked={gender === 'female'}
                                            value="female"
                                            fieldname={`Female`}
                                            type="radio"
                                            span={<span></span>}
                                            name="gender"

                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="selections">
                                <h6>take entry test *</h6>
                                <div className="flex">
                                    <div className="radio_btns">
                                        <Input
                                            cls="radio-box"
                                            onChange={(e) => setStest(e.target.value)}
                                            value="yes"
                                            checked={stest === 'yes'}
                                            fieldname={`yes`}
                                            type="radio"
                                            span={<span></span>}
                                            name="abc"
                                        />
                                    </div>
                                    <div className="radio_btns">
                                        <Input
                                            cls="radio-box"
                                            onChange={(e) => setStest(e.target.value)}
                                            value="No"
                                            checked={stest === 'no'}
                                            fieldname={`No`}
                                            type="radio"
                                            span={<span></span>}
                                            name="abc"

                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <button className="btn-normal" onClick={reset} type="submit">Reset</button> */}
            <button className="btn-normal" onClick={Incriment}>submit</button>
            {/* <button className="btn-normal style2 rtl" type="submit">Next</button> */}

        </form>
    );
}
export default Steps;