import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    // Tanstack Queary
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const token = localStorage.getItem('accessToken'); // ✅ correct key
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    // handle making admin 
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // Handle delete users
    const handleDeleteUser = user => {
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
                axiosSecure.delete(`/users/${user._id}`)
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
            <h3 className="text-center text-lg text-yellow-600 mb-2">---All Users---</h3>
            <h1 className="text-3xl font-semibold text-center mb-6 uppercase">Manage all Users</h1>
            {/* Orders Summary */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                <h2 className="text-xl font-bold uppercase">Total Users: {users.length}</h2>
            </div>

            {/* Cart Table */}
            <div className="border-2 border-blue-400 rounded-lg overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-yellow-700 text-white">
                        <tr>
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3 uppercase">Name</th>
                            <th className="px-4 py-3 uppercase">Email</th>
                            <th className="px-4 py-3 uppercase">Role</th>
                            <th className="px-4 py-3 uppercase">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className="border-b">
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3 font-semibold">{user.name}</td>
                                <td className="px-4 py-3">{user.email}</td>
                                <td className="px-4 py-3">
                                    {user.role === 'admin' ? 'Admin' :
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn bg-amber-600 hover:bg-sky-400 text-white p-2 rounded"><FaUsers />
                                        </button>
                                    }
                                </td>
                                <td className="px-4 py-3">
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn bg-red-600 hover:bg-sky-400 text-white p-2 rounded">
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

export default AllUsers;