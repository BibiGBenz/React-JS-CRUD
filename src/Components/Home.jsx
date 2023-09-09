import { Link } from "react-router-dom"
import style from "./home.module.css"
const Home=()=>{
    return(
        <div id={style.home}>
            <Link to="/createuser">Create-User</Link>
            <Link to="/user">User</Link>
        </div>
    )
}
export default Home