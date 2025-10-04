import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Catalog from "../pages/Catalog/Catalog.jsx";
import Blog from "../pages/Blog/Blog.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="blog" element={<Blog />} />
        </Routes>
    );
}

export default AppRoutes;