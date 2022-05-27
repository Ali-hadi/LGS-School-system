import Multistep from "react-multistep";
function Pageone() {

    const steps = [
        {name: 'StepOne', component: <h1>step 1</h1>},
        {name: 'StepTwo', component: <h1>step 2</h1>},
        {name: 'StepThree', component: <h1>step 3</h1>},
        {name: 'StepFour', component: <h1>step 4</h1>}
      ];
    

    return (
        <div>
            <Multistep activeStep={1} showNavigation={true} steps={steps}>

            </Multistep>
            
         

        </div>
    );
}
export default Pageone;