import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../../../Hooks/useAuth";
import useAxios from "../../../../Hooks/useAxiosSecure";
import useCarts from "../../../../Hooks/useCarts";

const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxios();
    const [, refetch] = useCarts()

    const handleAddtoCart = (food) => {
        console.log(food);
        if (user && user.email) {
            //  post data on to backend
            const cartItem = {
                menuID: _id,
                email: user.email,
                name,
                image,
                price,
            }
            axiosSecure.post('/carts', cartItem)
                .then((res) => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: `${name} Added to Cart!`,
                            icon: "success",
                            timer: 1500,
                            showConfirmButton: false
                        });
                        // Update the cart item count (REFATCH)
                        refetch();
                    }
                })
                .catch((err) => {
                    console.error("Error adding to cart:", err.response?.data || err.message);
                });


        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please Login for add to cart food",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    // navigate('/login', { state: { form: location } })
                    navigate('/login', { state: { from: location } })
                }
            });
        }

    }

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
                <p className="absolute right-12 top-12 p-1 rounded-xl bg-amber-600 text-white font-semibold">$ {price}</p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className="text-left">{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddtoCart(item)} className="btn btn-outline border-4 border-b-yellow-600 uppercase text-center">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;