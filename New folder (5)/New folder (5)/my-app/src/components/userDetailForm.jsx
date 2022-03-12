import React, { useEffect, useRef, useState } from "react";
import { Table } from "./table";

export const Form = ()=>{

    const [ref, setRef] = useState("");

    const [form, setForm] = useState("");

    const [users, setUsers] = useState([]);

    const [remove, setRemove] = useState();

    const handleForm = (e) =>{
    const {name, value } = e.target;
        setForm({
            ...form,
            [name]:value,
        })
        
    }

    const handleRemove = (key) =>{
        setRemove(key);
        updateUserList();
        console.log("key is", key)
    }

    const updateUserList = (e) =>{
      
       
        if(!e || e=="defaultValue"){
            fetch(`http://localhost:3001/users`).then((d) => d.json()).then((res)=>
            setUsers(res.filter(function(e){
                return e.id!==remove})));
        }
        else{
            if(e=="asc"){
                fetch(`http://localhost:3001/users`).then((d) => d.json()).then((res)=>{

                    const asc = res.map((product) => product).sort((a, b) => a.age - b.age)
                 //   console.log(asc);
                    setUsers( asc);
                }
                );
            }

            if(e=="dsc"){
                fetch(`http://localhost:3001/users`).then((d) => d.json()).then((res)=>{

                    const asc = res.map((product) => product).sort((a, b) => b.age - a.age)
                 //   console.log(asc);
                    setUsers( asc);
                }
                );
            }

        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("inside maiiiin ", form)
       
        e.target.reset();


        console.log("inside data send ",form)
       
        fetch("http://localhost:3001/users",{
            
            method:"POST",
            body:JSON.stringify(form),
            headers:{
                "content-type":"application/json",
            }
        }).then(()=>{
            updateUserList();
            console.log("inside data send ",form)
        })

    }

     const selectFilter = (e) =>{
       
        const val =e.target.value;
     //   console.log("value",val )
        updateUserList(val);

    }
    
   useEffect(()=>{
        console.log("inside effect")
        updateUserList();
    },[])
    

    return(
        <>
       
        <form onSubmit={handleSubmit}>
            <input type='text' name="userName" placeholder="Name" onChange={handleForm}/>
            <br />
            <input type='number' name="age" placeholder="Age" onChange={handleForm}/>
            <br />
            <input type='text' name="address" placeholder="Address" onChange={handleForm}/>
            <br />
            <input type='text' name="department" placeholder="Department" onChange={handleForm}/>
            <br />
            <input type='text' name="salary" placeholder="Salary" onChange={handleForm}/>
            <br />
            <input type='checkbox' name="marital" placeholder="Marital status" onChange={handleForm}/>
            <br />

            <input type='submit' value='submit'/>
        </form>

       

        <div>
           
            <select name="sort" id="" onChange={selectFilter}>
                <option value="defaultValue" selected >Sort </option>
                <option value="asc" >Ascending </option>
                <option value="dsc">Decending </option>
            </select>
        </div>
       <Table users={users} handleRemove={handleRemove}/>

       
        </>
    )
}