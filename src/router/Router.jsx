import { Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import MainLayout from "../layout/MainLayout";

function Router() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="products" element={<ProductPage />} />
            </Route>
        </Routes>
    );
}

export default Router;
