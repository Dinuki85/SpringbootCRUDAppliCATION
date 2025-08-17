import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  /*Create Object for storing the user information */
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  /*Connecting with the backend */
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/user/getusers");
    setUsers(result.data); /*To print the result from the database*/
  };

  //For deleting the users
  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:8080/api/user/${id}`)
    loadUsers();
  }
  return (
    <div className="container ">
      <div className="py-5">
          <h1 className='text-center bold'>VIEW USERS FROM HERE</h1>
        {/*Adding Bootstrap table */}
        <table className="table border shadow table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Full Name</th>
              <th scope="col">User Name</th>
              <th scope="col">User Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {/*Map the details that need to displayed in the table */}
            {users.map((user,index) =>(
                 <tr  key={index}>
              <th scope="row">{index+1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link className="mx-2 btn btn-outline-primary" to={`/viewuser/${user.id}`}><strong>View</strong></Link>
                <Link className="mx-2 btn btn-primary" to={`/edituser/${user.id}`}>
                Update
                </Link>
                <button className="mx-2 btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</button>

              </td>
            </tr>
            ))
        }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
