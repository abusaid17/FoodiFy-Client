import { FaTrashAlt } from "react-icons/fa";
import useCarts from "../../../../Hooks/useCarts";
import Swal from "sweetalert2";
import useAxios from "../../../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCarts()
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    const axiosSecure = useAxios();
    const handleDelete = (id) => {
        // setCart(cart.filter((item) => item.id !== id));
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };

    return (
        <div>
            <h3 className="text-center text-lg text-yellow-600 mb-2">---My Cart---</h3>
            <h1 className="text-3xl font-bold text-center mb-6">WANNA ADD MORE?</h1>

            {/* Orders Summary */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                <h2 className="text-xl font-bold">TOTAL ORDERS: {cart.length}</h2>
                <h2 className="text-xl font-bold">TOTAL PRICE: ${totalPrice.toFixed(2)}</h2>
                <button className="bg-yellow-700 text-white px-4 py-2 rounded-lg">PAY</button>
            </div>

            {/* Cart Table */}
            <div className="border-2 border-blue-400 rounded-lg overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-yellow-700 text-white">
                        <tr>
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">ITEM IMAGE</th>
                            <th className="px-4 py-3">ITEM NAME</th>
                            <th className="px-4 py-3">PRICE</th>
                            <th className="px-4 py-3">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={item._id} className="border-b">
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3">
                                    <div className="w-24 h-16 bg-gray-300 rounded">
                                        <img src={item.image} alt="" />
                                    </div>
                                </td>
                                <td className="px-4 py-3">{item.name}</td>
                                <td className="px-4 py-3">${item.price.toFixed(2)}</td>
                                <td className="px-4 py-3">
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="bg-red-600 hover:bg-sky-400 text-white p-2 rounded"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
