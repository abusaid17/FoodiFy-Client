import { Helmet } from "@dr.pogodin/react-helmet";
import SectionTitle from "../../Home/SectionTitle/SectionTitle";
import useMenu from "../../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import menuImg from "../../../../assets/menu/banner3.jpg";
import dessertImg from '../../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../../assets/menu/soup-bg.jpg';
import MenuCover from "../MenuCover/MenuCover";

const Menu = () => {
    const [menu, loading] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet>
                <title>FoodiFy | Menu</title>
            </Helmet>
            {/* Main Menu Cover */}
            <MenuCover image={menuImg} title={'OUR MENU'}
                description='Explore our delicious selection crafted with love and quality ingredients.'
            />

            {/* Today’s Offer Section */}
            <SectionTitle subHeading={"--- Don't Miss ---"} Heading={"TODAY'S OFFER"} />
            <MenuCategory items={offered} />

            {/* Dessert Section */}
            <MenuCategory items={dessert} title="dessert" image={dessertImg}
                description="Indulge in our sweet and delightful desserts, perfect for every occasion."
            />

            {/* Pizza Section */}
            <MenuCategory items={pizza} title="pizza" image={pizzaImg}
                description="Hot, cheesy, and freshly baked pizzas made to satisfy your cravings."
            />

            {/* Salad Section */}
            <MenuCategory items={salad} title="salad" image={saladImg}
                description="Fresh and healthy salads packed with nutrients and flavor."
            />

            {/* Soup Section */}
            <MenuCategory items={soup} title="soup" image={soupImg}
                description="Warm, comforting, and rich soups to make your meal complete."
            />
        </div>
    );
};

export default Menu;
