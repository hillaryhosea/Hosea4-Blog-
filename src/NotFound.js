import { Link } from "react-router-dom"

const NotFound = ()=>{
    return (
        <div>
            <h2>Sorry!</h2>
            <p>Error! Page can not be found</p>
            <Link to='/' >Back to home Page..</Link>
        </div>
    )
}

export default NotFound;