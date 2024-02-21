import React from "react";
import { Component } from "react";
import UserClass from "./UserClass";
import UserFun from "./UserFun";

class About extends Component{

 constructor(props){
        super(props)

        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent didmount call");
    }
    render() {
        console.log("Parent render");

        return (
            <div>
                <h1>About</h1>
                <UserFun name={"hello Neeraj"}/>
                <UserClass name={"Hello By ClassComponents"} location={"Udaipur"} />
            </div>
        )
    }
}



export default About;