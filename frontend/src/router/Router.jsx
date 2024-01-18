import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home/Home'
import Add from '../components/addpage/Add'
import Prod from "../pages/Paths/Prod";
import Spec from "../pages/Paths/Spec";
import Test from "../pages/Paths/Test";
import Blogg from "../pages/Paths/Blogg";
import Contact from "../pages/Paths/Contact";
import Abot from '../pages/Paths/Abot'
import Basket from "../pages/Paths/Basket";
import Wishlist from "../pages/Paths/Wishlist";
import DetailProd from "../pages/Paths/DetailProd";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/add",
        element: <Add />
    },

    {
        path: "/products",
        element: <Prod />
    },

    {
        path: "/about",
        element: <Abot />
    },

    {
        path: "/special",
        element: <Spec />
    },

    {
        path: "/testimonials",
        element: <Test />
    },
    {
        path: "/blog",
        element: <Blogg />
    },

    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/basket",
        element: <Basket/>
    },
    {
        path: "/wishlist",
        element: <Wishlist/>
    },
    {
        path: "/detail/:id",
        element: <DetailProd/>
    },
 



]);

export default router