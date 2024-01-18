import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from '../pages/Home/Home'
import Add from '../components/addpage/Add'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/add",
        element: <Add />
    },


]);

export default router