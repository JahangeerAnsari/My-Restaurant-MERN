import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {signinpActions} from '../redux/actions/auth.actions'
const Signin = () => {
        const dispatch = useDispatch();
        const history = useHistory();               
       const [email,setEmail] = useState("")
       const [password,setPassword] = useState("")

       const signinFormValidation = (e) =>{
          e.preventDefault();
         
           const user ={
              
               email,
              password
          }
           dispatch(signinpActions(user)).then((res) =>{
             if(res.status === 200){
              //  history.push('/dashboard')
              window.location = "/dashboard"
             }
           })
           
       }
     
  return (
    <div className="container form-container">
      <h3 className="text-center text-primary">Signin Here</h3>
      <form onSubmit={signinFormValidation}>
        
        <label>Email:</label>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
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
            onChange = {(e) => setPassword(e.target.value)}
            placeholder="enter password"
            className="form-control"
          ></input>
        </div>
        
        <button type="submit" className="btn btn-primary">
          Signin
        </button>
        
      </form>
      
    </div>
  );
};

export default Signin;
