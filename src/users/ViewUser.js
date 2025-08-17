import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
    const [user,setUser] =useState({
        name:"",
        username:"",
        email:""
    });

    const {id} =useParams();

   useEffect(() => {
  const fetchUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/user/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  fetchUser();
}, [id]); // depends only on id

  return (
    <div className="container">
      <h1>VIEW USERS DETAILS </h1>
      <div className="row">
        <div className="p-4 mt-2 border rounded shadow col-md-6 offset-md-3">
            <div className="card">
                <div className="card-header">
                    Use id details:{user.id}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Full Name:</b>
                            {user.name}
                        </li>
                        <li className="list-group-item">
                            <b>User Name:</b>
                            {user.username}
                        </li>
                        <li className="list-group-item">
                            <b>User Email:</b>
                            {user.email}
                        </li>
                    </ul>
                </div>
            </div>

            <Link className="my-2 btn btn-outline-primary " to={"/"}>Back To Home</Link>

        </div>
      
      
      </div>
    </div>
  );
}
