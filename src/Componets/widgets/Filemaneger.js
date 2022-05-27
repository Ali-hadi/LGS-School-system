import Tree from "../SubWidgets/tree";
import { Link } from "react-router-dom";
const Filemaneger = () => {

    const Arry = [
        {
            id: 1,
            title: "Parent Element",
            date: "20/05/2022",
            icon: "fa fa-facebook",
            badge: 8,
            children: [
                {
                    id: 1,
                    title: "Child Element",
                    date: "20/05/2022",
                    badge: 8,
                    children: [
                        {
                            id: 1,
                            title: "Child Element",
                            date: "20/05/2022",
                        },
                        {
                            id: 2,
                            title: "Child Element",
                            date: "20/05/2022",
                            children: [
                                {
                                    id: 1,
                                    title: "Child Element",
                                    date: "20/05/2022",
                                    children: [
                                        {
                                            id: 1,
                                            title: "Child Element",
                                            date: "20/05/2022",
                                        },
                                        {
                                            id: 2,
                                            title: "Child Element",
                                            date: "20/05/2022",
                                            children: [
                                                {
                                                    id: 1,
                                                    title: "Child Element",
                                                    date: "20/05/2022",
                                                    children: [
                                                        {
                                                            id: 1,
                                                            title: "Child Element",
                                                            date: "20/05/2022",
                                                        },
                                                        {
                                                            id: 2,
                                                            title: "Child Element",
                                                            date: "20/05/2022",
                                                            
                                                            
                                                        }
                                                    ]
                                                },
                                            ],
                                            
                                        }
                                    ]
                                },
                            ],
                        }
                    ]
                },
            ]
        },
    ]



    return (
        <>
            <h5 className="c-title mb20">File</h5>
            <div className="row">
                <div className="col-md-4">

                    <div className="box_layout">
                        <h5>Categories</h5>

                        <ul className="tabs_system">
                            <Tree data={Arry}/>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="assets_layout">
                        <h6>Documents</h6>
                        <ul className="flexs">
                            <li>
                                <div className="file-box">
                                    <Link to="/" className="downloadIcons">
                                        <i className="dripicons-download"></i>
                                    </Link>
                                    <div className="proDetail">
                                        <i className="mdi mdi-file-video"></i>
                                        <h6>Admin_Panel</h6>
                                        <small>21 May 2020</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="file-box">
                                    <Link to="/" className="downloadIcons">
                                        <i className="dripicons-download"></i>
                                    </Link>
                                    <div className="proDetail">
                                        <i className="mdi mdi-file-video"></i>
                                        <h6>Admin_Panel</h6>
                                        <small>21 May 2020</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="file-box">
                                    <Link to="/" className="downloadIcons">
                                        <i className="dripicons-download"></i>
                                    </Link>
                                    <div className="proDetail">
                                        <i className="mdi mdi-file-video"></i>
                                        <h6>Admin_Panel</h6>
                                        <small>21 May 2020</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="file-box">
                                    <Link to="/" className="downloadIcons">
                                        <i className="dripicons-download"></i>
                                    </Link>
                                    <div className="proDetail">
                                        <i className="mdi mdi-file-video"></i>
                                        <h6>Admin_Panel</h6>
                                        <small>21 May 2020</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="file-box">
                                    <Link to="/" className="downloadIcons">
                                        <i className="dripicons-download"></i>
                                    </Link>
                                    <div className="proDetail">
                                        <i className="mdi mdi-file-video"></i>
                                        <h6>Admin_Panel</h6>
                                        <small>21 May 2020</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="file-box">
                                    <Link to="/" className="downloadIcons">
                                        <i className="dripicons-download"></i>
                                    </Link>
                                    <div className="proDetail">
                                        <i className="mdi mdi-file-video"></i>
                                        <h6>Admin_Panel</h6>
                                        <small>21 May 2020</small>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className="assets_layout">
                        <h6>Documents</h6>
                        <ul className="flexs">
                            <li>
                                <div className="file-box">
                                    <Link to="/" className="downloadIcons">
                                        <i className="dripicons-download"></i>
                                    </Link>
                                    <div className="proDetail">
                                        <i className="mdi mdi-file-video"></i>
                                        <h6>Admin_Panel</h6>
                                        <small>21 May 2020</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="file-box">
                                    <Link to="/" className="downloadIcons">
                                        <i className="dripicons-download"></i>
                                    </Link>
                                    <div className="proDetail">
                                        <i className="mdi mdi-file-video"></i>
                                        <h6>Admin_Panel</h6>
                                        <small>21 May 2020</small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="file-box">
                                    <Link to="/" className="downloadIcons">
                                        <i className="dripicons-download"></i>
                                    </Link>
                                    <div className="proDetail">
                                        <i className="mdi mdi-file-video"></i>
                                        <h6>Admin_Panel</h6>
                                        <small>21 May 2020</small>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div >

        </>
    );
}
export default Filemaneger;
