
import HeaderLayout from "./headerLayout.tsx";
import {Outlet} from "react-router-dom";
const Layout = () => {
    return (
        <div>
            <HeaderLayout/>
            <Outlet/>
        </div>
    );
};

export default Layout;