import React from "react";
import  ReactDOM  from "react-dom/client";

//Normal React to create ReactElement
// const testing = React.createElement("h1",{id:"heading"},"Hello World")

//use JSX to Create React element


//use Multiple line code in react
const testing = React.createElement("div",{id:"container"},[React.createElement("h1",{id:"container"},"Hello React 🚀"),React.createElement("div",{id:"container"},"Hello Neeraj 😊")])

//same code create in JSX
//it is ReactElement through JSX
const heading = (<div id="container">
        <h1>Hello React 🚀</h1>
        <h2>Hello Neeraj 😎</h2>
</div>)

//create React Component

const Heading = () => {
   return <h1>Testing 🚀</h1>
}


const Heading1 = () => (
    <div id="container">
    <Heading/> {/* it is call component composition */}
     {/* when we use {} so we can use js in jsx so heading we pass as js object inside jsx */}
    
    <h1>Hello Neeraj in React World 🚀</h1>
    <h1>Testing to OtherMethod 🚀😎</h1>
    </div>
)

const title = (
    <div id="Container">
        <h1>Hello Element 🚀</h1>
        <Heading1/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);

