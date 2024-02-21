import {useRouteError} from "react-router-dom"
const Error = () => {
  let err = useRouteError();
  console.log(err);
    return(
        <div>
            <h2>Oops Somthing Went Wrong🚀 !!</h2>
            <h4>Not Found 🐱‍🏍</h4>
            <h4>{err.status}</h4>
            <h4>{err.statusText}</h4>
        </div>
    )
}

export default Error;