import Footer from "./Footer";
import Head from "../Componets/Header";
import Sidemenu from "../Componets/SideWidget";


const combineElement = ({children}) =>{

    return(
        <>
            <Head/>
            <Sidemenu/>

            <div className="wapper_content">
                <div className="flex">
                    <img className="background_image" src={process.env.PUBLIC_URL + '/logo.png'} alt="img here"/>
                </div>
                <div className="element_group">
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )

}
export default combineElement;