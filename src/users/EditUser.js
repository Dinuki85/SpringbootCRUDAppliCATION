import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const {id}=useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); //keep on adding the new Object
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/user/${id}`);
        setUser(result.data);
      } catch (error) {
        console.error("Error loading user:", error);
      }
    };
      loadUser();
  }, [id]); //
  /*create users and send those details to the database and show it*/
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/user/${id}`, user);

    /*After adding users again navigate to the home page */
    navigate("/");
  };

  
  return (
    <div className="container">
      <h1>EDIT THE USERS</h1>
      <div className="row">
        <div className="p-4 mt-2 border rounded shadow col-md-6 offset-md-3">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-lable">
                <strong>Full Name</strong>
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Full Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-lable ">
                <strong>User Name</strong>
              </label>
              <input
                type={"text"}
                className="form-control "
                placeholder="Enter Your User Name "
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-lable">
                <strong>E-mail</strong>
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
             Update User
            </button>

            <Link className="mx-2 btn btn-danger" to="/">
              Cancel User
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
