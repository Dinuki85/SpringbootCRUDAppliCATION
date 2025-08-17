import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <div className="container ">
      <div className="py-5">
          <h1 className='text-center bold'>VIEW USERS FROM HERE</h1>
        {/*Adding Bootstrap table */}
        <table className="table border table-hover  shadow">
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
                 <tr>
              <th scope="row" key={index}>{index+1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-outline-primary mx-2"><strong>View</strong></button>
                <button className="btn btn-primary mx-2">Update</button>
                <button className="btn btn-danger mx-2">Delete</button>

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
