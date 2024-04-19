import { createBrowserRouter } from "react-router-dom";
import Index from "../Pages/Index";


 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
    }   
])