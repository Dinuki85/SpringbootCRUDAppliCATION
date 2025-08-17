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
        {/*Adding Bootstrap table */}
        <table className="table border table-hover  shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
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
            </tr>
            ))
        }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
