import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signupActions } from "../redux/actions/auth.actions";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupFormValidation = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };
    dispatch(signupActions(user)).then((res) => {
      console.log("\n\n res : ", res);
      if (res && res.status === 201) {
        history.push("/signin");
      }
    });
  };

  return (
    <div className="container form-container">
      <h3 className="text-center text-primary">SignUp Here</h3>
      <form onSubmit={signupFormValidation}>
        <label>UserName:</label>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter name"
            className="form-control"
          ></input>
        </div>
        <label>Email:</label>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter @email "
            className="form-control"
          ></input>
        </div>
        <label>Password:</label>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
            className="form-control"
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
      </form>
      <span>
        Already have Account ? <Link to="/signin">Signin</Link>
      </span>
    </div>
  );
};

export default Signup;
