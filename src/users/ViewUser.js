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

    useEffect(()=>{

        loadUser();

    },[]);

    const loadUser=async ()=>{
        const result =await axios.get(`http://localhost:8080/api/user/${id}`)
        setUser(result.data);
    }
  return (
    <div className="container">
      <h1>VIEW USERS DETAILS </h1>
      <div className="row">
        <div className="shadow col-md-6 offset-md-3 border rounded p-4 mt-2">
            <div className="card">
                <div className="card-header">
                    Use id details:
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Full Name:</b>
                        </li>
                        <li className="list-group-item">
                            <b>User Name:</b>
                        </li>
                        <li className="list-group-item">
                            <b>User Email:</b>
                        </li>
                    </ul>
                </div>
            </div>

            <Link className="btn btn-outline my-2 " to={"/"}>Back To Home</Link>

        </div>
      
      
      </div>
    </div>
  );
}
