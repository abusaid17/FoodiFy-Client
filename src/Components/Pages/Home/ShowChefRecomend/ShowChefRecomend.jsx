
const ShowChefRecomend = ({ item }) => {
    const { name, image, } = item;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions">
                    <button className="btn btn-outline border-4 border-b-yellow-600 uppercase">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ShowChefRecomend;