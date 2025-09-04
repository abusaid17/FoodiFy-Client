import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../../../Hooks/useCarts";
import useAuth from "../../../../Hooks/useAuth";
import useAdmin from "../../../../Hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    // load cart data from backend and load from useCart Hooks
    const [cart, isLoading] = useCarts()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Log Out Successfully",
                    icon: "success",
                    draggable: true
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    const navOptions = <>
        <li className="text-lg font-semibold"><NavLink to="/">Home</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to="/menu">Our Menu</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to="/orderfood/salad">Order Food</NavLink></li>
        {
            user && isAdmin &&
            <li className="text-lg font-semibold"><NavLink to="/dashboard/adminHome">Dashboard</NavLink></li>
        }
        {
            user && !isAdmin &&
            <li className="text-lg font-semibold"><NavLink to="/dashboard/userHome">Dashboard</NavLink></li>
        }
    </>
    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="navbar bg-orange-200 shadow-lg max-w-7xl mx-auto px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">FoodiFy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-3">
                    <Link to='/dashboard/cart'>
                        <div className="card flex flex-row gap-2 text-xl">
                            <FaShoppingCart></FaShoppingCart> <div className="badge badge-sm badge-secondary font-semibold">{cart.length}
                                {/* {
                            isLoading ? (
                                <progress className="progress w-12 h-2 progress-error"></progress>
                            ) 
                            : (
                                cart.length
                            )} */}
                            </div>

                        </div></Link>
                    {user ? (
                        <>
                            {/* <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                                    <span className="text-center">{user.displayName}</span>
                                </div>
                            </div> */}
                            <button onClick={handleLogOut} className="btn btn-error text-lg">Log Out</button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login">
                                <button className="btn btn-accent text-lg">Login</button>
                            </NavLink>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;