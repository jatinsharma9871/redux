
export const TableItem = ({users,handleRemove}) =>{
  
    return(
        <>
            {users.map((e, i)=>(

                <tr key={i}>
                    <td>{e.userName}</td>
                    <td>{e.age}</td>
                    <td>{e.address}</td>
                    <td>{e.department}</td>
                    <td>{e.salary}</td>
                    <td></td>
                    <button onClick={()=>{handleRemove(i)}}>Delete</button>
                </tr>
                
            )) }
            
        </>

    )
   
}