import FoodCard from "../../OrderFood/FoodCard/FoodCard";

const OrderTabPannel = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mx-auto'>
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTabPannel;