import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaHome, FaCartPlus, FaSwatchbook, FaUsers } from "react-icons/fa";
import { RiSecurePaymentLine, RiShoppingBag4Fill } from "react-icons/ri";
import { MdReviews } from "react-icons/md";
import { LuBookImage, LuSquareMenu } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import useCarts from "../../Hooks/useCarts";
import { MdFoodBank } from "react-icons/md";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
    // const [csrt] = useCarts();
    const [isAdmin, isAdminLoading] = useAdmin();
    // if (isAdminLoading) return <progress className="progress w-56"></progress>;


    const dashBoardOptions = (
        <>
            {isAdmin ? (
                <>
                    <NavLink to="/dashboard/adminHome"><li className="flex gap-2 items-center"><FaHome /> Admin Home</li></NavLink>
                    <NavLink to="/dashboard/addItems"><li className="flex gap-2 items-center"><MdFoodBank /> Add Items</li></NavLink>
                    <NavLink to="/dashboard/manageItems"><li className="flex gap-2 items-center"><RiSecurePaymentLine /> Manage Items</li></NavLink>
                    <NavLink to="/dashboard/manageBooking"><li className="flex gap-2 items-center"><FaSwatchbook /> Manage Booking</li></NavLink>
                    <NavLink to="/dashboard/users"><li className="flex gap-2 items-center"><FaUsers /> All Users</li></NavLink>
                </>
            ) : (
                <>
                    <NavLink to="/dashboard/userHome"><li className="flex gap-2 items-center"><FaHome /> User Home</li></NavLink>
                    <NavLink to="/dashboard/reservation"><li className="flex gap-2 items-center"><FaCalendar /> Reservation</li></NavLink>
                    <NavLink to="/dashboard/payment"><li className="flex gap-2 items-center"><RiSecurePaymentLine /> Payment History</li></NavLink>
                    <NavLink to="/dashboard/mycart">
                        <li className="flex gap-2 items-center">
                            <FaCartPlus /> My Cart
                            {/* <span className="ml-2 bg-red-600 px-2 py-0.5 rounded-full text-sm">
                                {cart?.length || 0}
                            </span> */}
                        </li>
                    </NavLink>
                    <NavLink to="/dashboard/review"><li className="flex gap-2 items-center"><MdReviews /> Add Review</li></NavLink>
                    <NavLink to="/dashboard/booking"><li className="flex gap-2 items-center"><LuBookImage /> My Booking</li></NavLink>
                </>
            )}

            {/* Divider */}
            <div className="border-t border-white/30 my-4"></div>

            {/* Common Links */}
            <NavLink to="/"><li className="flex gap-2 items-center"><AiFillHome /> Home</li></NavLink>
            <NavLink to="/menu"><li className="flex gap-2 items-center"><LuSquareMenu /> Menu</li></NavLink>
            <NavLink to="/orderfood/salad"><li className="flex gap-2 items-center"><RiShoppingBag4Fill /> Shop</li></NavLink>
            <NavLink to="/contact"><li className="flex gap-2 items-center"><IoMdMail /> Contact</li></NavLink>
        </>
    );


    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
            {/* Mobile Dropdown Sidebar */}
            <div className="lg:hidden p-4 bg-yellow-800 text-white flex justify-between items-center">
                <h2 className="text-xl font-bold">FoodiFy Restaurant</h2>
                <details className="w-full">
                    <summary className="cursor-pointer px-3 py-2 bg-yellow-700 rounded-lg">
                        ☰ Menu
                    </summary>
                    <ul className="mt-2 w-full bg-yellow-800 text-white p-4 rounded-lg space-y-3">
                        {dashBoardOptions}
                    </ul>
                </details>

            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:flex w-68 bg-yellow-800 text-white flex-col p-6">
                <h2 className="text-2xl font-bold mb-8">FoodiFy Restaurant</h2>
                <ul className="flex flex-col gap-4 text-lg">
                    {dashBoardOptions}
                </ul>
            </div>

            {/* Main Content via Outlet */}
            <div className="flex-1 p-6">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
