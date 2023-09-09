import { useEffect, useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
const Edit=()=>{
    let [name,setName]=useState(" ")
    let [age,setAge]=useState(" ")
    let [company,setCompany]=useState(" ")
    let [salary,setSalary]=useState(" ")
    let {abc}=useParams()
    let navigator=useNavigate()


    let nameData=(e)=>{setName(e.target.value)}
    let ageData=(e)=>{setAge(e.target.value)}
    let companyData=(e)=>{setCompany(e.target.value)}
    let salaryData=(e)=>{setSalary(e.target.value)}

    useEffect(()=>{
        axios.get(`http://localhost:3000/user/${abc}`)
        .then((resp)=>{
            setName(resp.data.name)
            setAge(resp.data.age)
            setCompany(resp.data.company)
            setSalary(resp.data.salary)
        })
        .catch(()=>{
            console.log("erroR");
        })
    },[])
    


    let submit=(e)=>{
        e.preventDefault()
        let payload={name,age,company,salary}
        axios.put(`http://localhost:3000/user/${abc}`,payload)
        .then(()=>{
            console.log("got the Data");
        })
        .catch(()=>{
            console.log("erroR");
        })
        navigator("/user")
    }
    return(
        <div id={style.create}>
            <div id={style.myform}>
                <h5>Update</h5>
                <label htmlFor="">Name:</label>
                <input type="text" value={name} onChange={nameData}/>
                <label htmlFor="">Age:</label>
                <input type="number" value={age} onChange={ageData}/>
                <label htmlFor="">Company:</label>
                <input type="text" value={company} onChange={companyData}/>
                <label htmlFor="">Salary:</label>
                <input type="text" value={salary} onChange={salaryData}/><br />
                <button onClick={submit}>Update</button>
            </div>
        </div>
    )
}
export default Edit 