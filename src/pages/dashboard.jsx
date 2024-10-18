import { Outlet } from "react-router";
import Header from "../componenets/header";
import Footer from "../componenets/footer";


export default function Dashboard() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
};