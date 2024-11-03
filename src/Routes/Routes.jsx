import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root.jsx";
import Home from "../Pages/Home.jsx";
import Page404 from "../Components/Others/Page404.jsx";
import Statistics from "../Pages/Statistics.jsx";
import Dashboard from "../Pages/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Page404 />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/statistics",
                element: <Statistics/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
        ]
    }
])

export default router