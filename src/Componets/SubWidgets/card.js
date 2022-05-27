import "../../styles/style.css"
const Cards = (props) => {
    return (
        <>
            {/* "status_cards bg-perple" */}
            <div className={props.classCard} >
                <h4 className="sm-title">{props.title}</h4>
                <div className="flex">
                    <h2>{props.count}</h2>
                    {/* <i className="ti-harddrive"></i> */}
                    <i className={props.iconName}></i>
                </div>
                {/* <p><span><i className="mdi mdi-trending-up"></i>8.5%</span> Up From Yesterday</p> */}
                <p><span><i className={props.trendingClass}></i>{props.percentage}</span> Up From Yesterday</p>
            </div>

        </>
    );

}
export default Cards;