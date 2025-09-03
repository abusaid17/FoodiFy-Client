import { FaTrashAlt, FaEdit } from "react-icons/fa";
import useMenu from "../../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router";

const ManageItems = () => {
    const [menu, loading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (item) => {
        console.log("Trying to delete:", item._id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to remove this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log('inside delete menu item : ', res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    loading(<progress className="progress w-56"></progress>)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been Removed`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }
        });
    }
    const handleEdit = (item) => {

    }
    return (
        <div className="p-6">
            <h3 className="text-center text-xl text-yellow-600 mb-2">---Hurry Up!---</h3>
            <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6 uppercase">
                Manage All Items
            </h1>

            <h2 className="text-lg font-semibold mb-4">
                Total items : { }
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto">
                {/* Table */}

                <table className="w-full border-collapse min-w-[600px]">
                    <thead>
                        <tr className="bg-yellow-700 text-white text-left">
                            <th className="p-3">#</th>
                            <th className="p-3">Item Image</th>
                            <th className="p-3">Item Name</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Action</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id} className="border-b hover:bg-gray-50 transition">
                                <td className="p-3 font-medium">{index + 1}</td>
                                <td className="p-3"> <img src={`${item.image}`} className="w-18 h-16 object-cover rounded-md" /></td>
                                <td className="p-3">{item.name}</td>
                                <td className="p-3 text-orange-500 font-semibold">$ {item.price}</td>
                                <td className="p-3">
                                    <Link to={`/dashboard/updateItem/${item._id}`}><button onClick={() => handleEdit(item)} className="btn text-xl bg-yellow-600 hover:bg-yellow-700 text-white p-2 rounded" >
                                        <FaEdit /> </button></Link>
                                </td>
                                <td className="p-3">
                                    <button onClick={() => handleDelete(item)} className="btn text-xl bg-red-600 hover:bg-red-700 text-white p-2 rounded"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;