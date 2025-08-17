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
    console.log(result.data); /*To print the result*/
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
