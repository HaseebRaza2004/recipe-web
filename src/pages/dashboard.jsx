import { Outlet } from "react-router";
import Header from "../componenets/header";


export default function Dashboard() {
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
};