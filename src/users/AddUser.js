import axios from "axios";
import React, { useState } from "react";

export default function AddUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });//keep on adding the new Object
  };

  /*create users and send those details to the database and show it*/
  const onSubmit  =async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/api/user/adduser",user)

  }
  return (
    <div className="container">
      <h1>ADD USERS FROM HERE</h1>
      <div className="row">
        <div className="shadow col-md-6 offset-md-3 border rounded p-4 mt-2">
         <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-lable">
              <strong>Full Name</strong>
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Name here"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-lable ">
              <strong>User Name</strong>
            </label>
            <input
              type={"text"}
              className="form-control "
              placeholder="Enter Your User Name Here"
              name="name"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-lable">
              <strong>Email</strong>
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Valid Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary ">
            Add User
          </button>

          <button type="submit" className="btn btn-danger mx-2">
            Cancel User
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}
