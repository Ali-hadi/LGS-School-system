
import { Link } from "react-router-dom";

const Sidemenu = () => {
  
    

    return (
        <div className="side_wraper">
            
            <div className="sidebar">
                <nav>
                    <ul className="left-sidenav">
                        <li ><Link to="/statistics" ><i className="ti-dashboard"></i>Deshboard</Link>
                            {/* <ul className="children">
                                <li><Link to="/pagetwo">Dashboard</Link></li>
                                <li><Link to="/pagetwo">Clients</Link></li>
                                <li><Link to="/pagetwo">Calendar</Link></li>
                                <li><Link to="/pageone">team</Link></li>
                            </ul> */}
                        </li>
                        <li className="active"><Link to="/filemaneger"><i className="ti-book"></i>File Maneger <span className="badge">New</span></Link></li>
                        <li><Link to="/table"><i className="ti-briefcase"></i>table</Link></li>
                        <li><Link to="/students"><i className="ti-bar-chart"></i>Student</Link></li>
                        <li><Link to="/Steps"><i className="ti-bar-chart"></i>Steps</Link></li>
                        <li><Link to="/pagetwo"><i className="ti-bar-chart"></i>Tab one</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        
    );
}
export default Sidemenu;