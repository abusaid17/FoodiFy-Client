import { Outlet } from "react-router";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Pages/Home/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="my-4">
                <Outlet>
                </Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;