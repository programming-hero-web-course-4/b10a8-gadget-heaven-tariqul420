import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root.jsx";
import Home from "../Pages/Home.jsx";
import Page404 from "../Components/Others/Page404.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Page404 />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])

export default router