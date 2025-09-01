// import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import useMenu from "../../../../Hooks/useMenu";
import ShowPopularMenu from "../ShowPopularMenu/ShowPopularMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section>
            <SectionTitle
                subHeading={"--- Popular Items ---"}
                Heading={"OUR POPULAR MENU"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 space-x-10 my-10">
                {
                    popular.map(item => <ShowPopularMenu
                        key={item._id}
                        item={item}
                    >
                    </ShowPopularMenu>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;