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
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/api/user/${id}`);
    loadUsers();
  };

  // Background style
  const backgroundStyle = {
  backgroundImage: "url('/assets/background.jpg')", // replace with your image path
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "transparent", // <-- use this
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: -1,
  opacity: 0.5, 
};


  return (
    <div>
      {/* Full screen background */}
      <div style={backgroundStyle}></div>

      {/* Main content */}
      <div className="container py-5" style={{ position: "relative", zIndex: 1 }}>
        <h1 className="mb-4 text-center text-black bold">
          VIEW USERS FROM HERE
        </h1>
        {/*Interactive Bootstrap table with hover and striped rows */}
        <table className="table shadow table-hover table-striped table-bordered bg-light">
          <thead className="table-dark">
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
            {users.map((user, index) => (
              <tr key={index} className="align-middle">
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="mx-2 btn btn-outline-primary"
                    to={`/viewuser/${user.id}`}
                  >
                    <strong>View</strong>
                  </Link>
                  <Link
                    className="mx-2 btn btn-primary"
                    to={`/edituser/${user.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="mx-2 btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
