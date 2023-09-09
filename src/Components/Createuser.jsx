import { useState } from "react"
import style from "./home.module.css"
import axios from "axios"
const Createuser=()=>{
    let [name,setName]=useState(" ")
    let [age,setAge]=useState(" ")
    let [company,setCompany]=useState(" ")
    let [salary,setSalary]=useState(" ")


    let nameData=(e)=>{setName(e.target.value)}
    let ageData=(e)=>{setAge(e.target.value)}
    let companyData=(e)=>{setCompany(e.target.value)}
    let salaryData=(e)=>{setSalary(e.target.value)}

    


    let submit=()=>{
        let payload={name,age,company,salary}
        axios.post("http://localhost:3000/user",payload)
        .then(()=>{
            console.log("got the Data");
        })
        .catch(()=>{
            console.log("erroR");
        })
    }
    return(
        <div id={style.create}>
            <div id={style.myform}>
                <label htmlFor="">Name:</label>
                <input type="text" value={name} onChange={nameData}/>
                <label htmlFor="">Age:</label>
                <input type="number" value={age} onChange={ageData}/>
                <label htmlFor="">Company:</label>
                <input type="text" value={company} onChange={companyData}/>
                <label htmlFor="">Salary:</label>
                <input type="text" value={salary} onChange={salaryData}/><br />
                <button onClick={submit}>Register</button>
            </div>
        </div>
    )
}
export default Createuser