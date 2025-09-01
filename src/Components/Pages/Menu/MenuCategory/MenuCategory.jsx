import { Link } from "react-router";
import MenuCover from "../MenuCover/MenuCover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items, title, image, description }) => {

    return (
        <div>
            {
                title && <MenuCover image={image} title={title} description={description}></MenuCover>}
            <div className="grid md:grid-cols-2 sm:grid-cols-1 space-x-10 my-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>
            <Link to={`/orderfood/${title}`}>
                <div className="text-center mb-4">
                    <button className="btn btn-outline border-4 border-b-yellow-600 uppercase text-center">ORDER YOUR FAVOURITE FOOD</button>
                </div></Link>
        </div>
    );
};

export default MenuCategory;