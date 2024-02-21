import UserClass from "./UserClass";
import UserFun from "./UserFun";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <UserFun name={"hello Neeraj"}/>
            <UserClass name={"Hello By ClassComponents"} location={"Udaipur"} />
        </div>
    )
}

export default About;