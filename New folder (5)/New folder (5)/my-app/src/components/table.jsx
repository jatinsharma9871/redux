import { TableItem } from "./tableItem"

export const Table = ({users,handleRemove}) =>{
  
    return(
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>age</th>
                            <th>Address</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Marital Status</th>
                        </tr>
                    </thead>
                    <tbody>{ <TableItem users={users} handleRemove={handleRemove}/>}</tbody>
                </table>
            </div>

        </>

    )
   
}