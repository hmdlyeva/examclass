import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home/Home'
import Add from '../components/addpage/Add'
import Prod from "../pages/Paths/Prod";
import Spec from "../pages/Paths/Spec";
import Test from "../pages/Paths/Test";
import Blogg from "../pages/Paths/Blogg";
import Contact from "../pages/Paths/Contact";
import Abot from '../pages/Paths/Abot'

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
    }


]);

export default router