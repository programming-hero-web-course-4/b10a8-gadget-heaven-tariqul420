import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root.jsx";
import Home from "../Pages/Home.jsx";
import Page404 from "../Components/Others/Page404.jsx";
import Statistics from "../Pages/Statistics.jsx";
import Dashboard from "../Pages/Dashboard.jsx";
import GadgetCards from "../Components/Home/GadgetCards.jsx";
import ProductDetails from "../Pages/ProductDetails.jsx";
import About from "../Pages/About.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Page404 />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <GadgetCards />,
                        loader: () => fetch("../gadgets.json")
                    },
                    {
                        path: '/category/:category',
                        element: <GadgetCards />,
                        loader: () => fetch("../gadgets.json")
                    }
                ]
            },
            {
                path: "/statistics",
                element: <Statistics />,
                loader: () => fetch("../gadgets.json")
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/product/:productId",
                element: <ProductDetails />,
                loader: () => fetch("../gadgets.json")
            },
        ]
    }
])

export default router