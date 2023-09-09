import { useEffect, useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { Link } from "react-router-dom"
const User=()=>{

    let [data,setData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/user")
        .then((response)=>{
            console.log("Got the Data");
            setData(response.data)
        })
        .catch(()=>{
            console.log("error");
        })
    },[])


    let deleteData=(x)=>{
        axios.delete(`http://localhost:3000/user/${x}`)
        window.location.assign("/user")
    }


    return(
        <div id={style.data}>
            {data.map((x)=>{
                return(
                    <div id={style.subdata}>
                        <table>
                            <tr>
                                <td>ID:</td>
                                <td>{x.id}</td>
                            </tr>
                            <tr>
                                <td>Name:</td>
                                <td>{x.name}</td>
                            </tr>
                            <tr>
                                <td>Age:</td>
                                <td>{x.age}</td>
                            </tr>
                            <tr>
                                <td>Company:</td>
                                <td>{x.company}</td>
                            </tr>
                            <tr>
                                <td>Salary:</td>
                                <td>{x.salary}</td>
                            </tr>
                            <tr>
                                <td><button><Link to={`/edit/${x.id}`}>Edit</Link></button></td>
                                <td><button onClick={()=>deleteData(x.id)}>Delete</button></td>
                            </tr>
                    </table>
                    </div>
                )
            })}
        </div>
    )

}
export default User