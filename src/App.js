import React from "react";
import  ReactDOM  from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import  Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestaurentMenu from "./components/RestaurentMenu";

// const styleCard = {
//     backgroundColor : "#f0f0f0"
// }




//not use key as a index (not acceptable) use unique id(best practice)

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet />
        </div>
    )
}

const approute = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/menu/:rid",
                element:<RestaurentMenu/>
            }
        ],
        errorElement:<Error/>
    },
   
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approute}/>);

