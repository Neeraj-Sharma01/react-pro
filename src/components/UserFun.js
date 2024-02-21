import { useState } from "react";

const UserFun = (props) => {
    const [count] = useState(0)
    const [count1] = useState(1)
    return (
        <div>
           <h3>count={count}</h3>
           <h3>count1={count1}</h3>
           
            <h1>User By </h1>
            <h2>{props.name}</h2>
        </div>
    )
}

export default UserFun;