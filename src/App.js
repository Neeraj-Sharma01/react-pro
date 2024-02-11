import React from "react";
import  ReactDOM  from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";

// const styleCard = {
//     backgroundColor : "#f0f0f0"
// }




//not use key as a index (not acceptable) use unique id(best practice)

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

