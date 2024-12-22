import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function MainLayout() {
    return (
    <>
        <div className="h-screen">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    </>
    );
}

export default MainLayout;
