
const ShowPopularMenu = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex items-center space-x-4 space-y-4">
            <img style={{ borderRadius: '200px 200px 0px 200px' }} src={image} alt="" className="w-[100px]" />
            <div>
                <h3 className="uppercase font-semibold text-lg">{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-amber-500 font-semibold">{price}</p>
        </div>
    );
};

export default ShowPopularMenu;