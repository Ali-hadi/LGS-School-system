import Cards from "../SubWidgets/card";

const Statistics = () => {
    const Arry = [
        {
            class: "status_cards bg-perple",
            title: "Students",
            count: "200k",
            iconName: "ti-harddrive",
            trendingClass: "mdi mdi-trending-up",
            percentage: "8.5%",
        },
        {
            class: "status_cards bg-red",
            title: "Students",
            count: "200k",
            iconName: "ti-harddrive",
            trendingClass: "mdi mdi-trending-up",
            percentage: "8.5%",
        },
        {
            class: "status_cards bg-skyblue",
            title: "Students",
            count: "200k",
            iconName: "dripicons-blog",
            trendingClass: "mdi mdi-trending-down rd",
            percentage: "8.5%",
        },
        {
            class: "status_cards bg-yellow",
            title: "Students",
            count: "200k",
            iconName: "dripicons-duplicate",
            trendingClass: "mdi mdi-trending-up",
            percentage: "8.5%",
        },
        {
            class: "status_cards bg-green",
            title: "Students",
            count: "200k",
            iconName: "dripicons-graduation",
            trendingClass: "mdi mdi-trending-up",
            percentage: "8.5%",
        },
        {
            class: "status_cards bg-perple",
            title: "Students",
            count: "200k",
            iconName: "ti-harddrive",
            trendingClass: "mdi mdi-trending-up",
            percentage: "8.5%",
        },
        {
            class: "status_cards bg-red",
            title: "Students",
            count: "200k",
            iconName: "ti-harddrive",
            trendingClass: "mdi mdi-trending-up",
            percentage: "8.5%",
        },
        {
            class: "status_cards bg-skyblue",
            title: "Students",
            count: "200k",
            iconName: "dripicons-blog",
            trendingClass: "mdi mdi-trending-down rd",
            percentage: "8.5%",
        },
    ]
    return (
        <>
            <div className="deshboard_status">
                {
                    Arry.map((val,index) =>
                        <Cards
                            key={index}
                            id={index}
                            count={val.count}
                            classCard={val.class}
                            title={val.title }
                            iconName={ val.iconName}
                            trendingClass={val.trendingClass}
                            percentage={val.percentage}
                        />
                    )
                }

            </div>
        </>
    );

}
export default Statistics;