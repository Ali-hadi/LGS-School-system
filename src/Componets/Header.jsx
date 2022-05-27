import "../styles/style.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Head = () => {
    const [changeState, updateState] = useState(
        {
            width: "400",
        }
    );
    function handleControlls(){
        updateState({
            width: "0"
        })
        console.log(updateState);
    }
    
    
    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <div className="flex_box">
                        
                            <div className="logo">
                                <h1><Link to="/"><img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo here" /></Link></h1>
                                <span>NGS School System</span>
                            </div>
                            <div className="toggle_button">
                                <button type="button" style={{changeState}}onClick={handleControlls}><i className="fa fa-bars" aria-hidden="true"></i></button>
                            </div>
                        
                        <div className="rtl_sec">
                            <div className="nofiy">
                                <button><i className="fa fa-bell-o"></i><span>40</span></button>

                                {/* <div className="slimscroll notification-list">
                                    <Link to="/" className="dropdown-item notify-item active">
                                        <div className="notify-icon bg-success"><i className="mdi mdi-cart-outline"></i></div>
                                        <p className="notify-details">Your order is placed<small className="text-muted">Dummy text of the printing and typesetting industry.</small></p>
                                    </Link>

                                    <Link to="/" className="dropdown-item notify-item">
                                        <div className="notify-icon bg-warning"><i className="mdi mdi-message"></i></div>
                                        <p className="notify-details">New Message received<small className="text-muted">You have 87 unread messages</small></p>
                                    </Link>
                                </div> */}
                            </div>
                            <div className="profile_setting">
                                <button className="profile_btn">
                                    <img src="https://via.placeholder.com/128x128" alt="user img" />
                                    <span>Shahzad Ali</span>
                                </button>
                                {/* <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#"><i className="dripicons-user text-muted mr-2"></i> Profile</Link>
                                    <a className="dropdown-item" href="#"><i className="dripicons-wallet text-muted mr-2"></i> My Wallet</Link>
                                    <a className="dropdown-item" href="#"><i className="dripicons-gear text-muted mr-2"></i> Settings</Link>
                                    <a className="dropdown-item" href="#"><i className="dripicons-lock text-muted mr-2"></i> Lock screen</Link>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#"><i className="dripicons-exit text-muted mr-2"></i> Logout</Link>
                                </div> */}
                            </div>
                        </div>    
                    </div>
                </div>
            </header>
        </>
    );


}
export default Head;