import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    return (
        <div>
            <h1>Hey this was an error!!!</h1>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}
export default Error;