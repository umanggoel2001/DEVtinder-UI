import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from '../utils/userSlice';
const Login = () => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const [emailId, setEmail] = useState("Umang@goel.com");
    const [password, setPassword] = useState("Umang@goel123");
    const navigate = useNavigate();
    const onLogin = async()=>{
        try{
            // console.log(emailId , password);
            
            const res=  await axios.post('http://localhost:3000/login',{
                email:emailId,
                password,
        
                },  { withCredentials: true })
                if(res.status === 200){
                    dispatch(addUser(res.data)); 
                    return navigate("/");
                }
                else{
                    console.log("Login failed");
                    alert("Login failed");
                }
        }
        catch(err){
            setError(err?.response?.data || "Something went wrong");
            console.log("error", err);
            
        }

        
    }
  return (
    <div className='flex justify-center my-6'>
        <div className="card bg-primary text-primary-content w-96">
  <div className="card-body">
    <h2 className="card-title justify-center">LOGIN</h2>
    {/* input for email */}
    <label class="input validator">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="neutral"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" value={emailId} class="text-neutral" placeholder="E-mail address" onChange={(e) => setEmail(e.target.value)} required />
</label>
<div class="validator-hint hidden ">Enter valid email address</div>

{/* input for password */}

<label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="neutral"
      stroke="currentColor"
    >
      <path
        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      ></path>
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </g>
  </svg>
  <input
    type="password"
    value={password}
    required
    class="text-neutral"
    placeholder=" Enter Password"
    minlength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
    onChange={(e)=>{
       setPassword(e.target.value) 
    }}
  />
</label>


<p className="validator-hint hidden">
  Must be more than 8 characters, including
  <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
</p>

<p>{error}</p>
<div>
  <button className="btn btn-secondary w-full" onClick={onLogin}>Login</button>
  
</div>
 <button
    className="btn btn-outline w-full"
    onClick={() => navigate("/signup")}
  >
    Sign Up
  </button>
</div>
    </div>
    </div>
  )
}

export default Login