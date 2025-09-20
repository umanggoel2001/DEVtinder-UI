import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';  
import { addUser } from '../utils/userSlice';

const Signup = () => {
  const[firstName , setFirstName] = React.useState("");
  const[lastName , setLastName] = React.useState("");
  const[emailId , setEmail] = React.useState("");
  const[password , setPassword] = React.useState("");
  const[gender , setGenderName] = React.useState("");
  const[photo , setPhoto] = React.useState("");
  const[about , setAbout] = React.useState("");
  const[error , setError] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async()=>{
    try{
      const res = await axios.post('http://localhost:3000/signup',{
        firstName,
        lastName,
        email:emailId,
        password,
        gender,
        photo,
        about
    },  { withCredentials: true })
  console.log(res.data);
  dispatch(addUser(res.data));
  return navigate("/profile");
  
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
    <h2 className="card-title justify-center">SIGN UP</h2>
    {/* input for email */}
    <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
  <input type="email" value={emailId} className="text-neutral" placeholder="E-mail address" onChange={(e) => {setEmail(e.target.value);
    setError(null);
  }} required />
</label>
{/* <div class="validator-hint hidden ">Enter valid email address</div> */}

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
    className="text-neutral"
    placeholder=" Enter Password"
    minlength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
    onChange={(e)=>{{
      setError(null);
       setPassword(e.target.value) }
    }}
  />
</label>
{/* for firstname */}
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
    type="text"
    value={firstName}
    required
    className="text-neutral"
    placeholder=" Enter First Name"
    onChange={(e)=>{{
      setError(null);
       setFirstName(e.target.value) 
    }
    }}
  />
</label>

{/* lastname */}
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
    type="text"
    value={lastName}
    required
    className="text-neutral"
    placeholder=" Enter Last Name"
    onChange={(e)=>{{
      setError(null);
       setLastName(e.target.value) }
    }}
  />
</label>

{/* gender */}

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
    type="text"
    value={gender}
    required
    className="text-neutral"
    placeholder=" Enter gender"
    onChange={(e)=>{{
      setError(null);
       setGenderName(e.target.value) }
    }}
  />
</label>
{/* photoURL */}
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
    type="text"
    value={photo}
    required
    className="text-neutral"
    placeholder=" Enter Photo URL"
    onChange={(e)=>{{
      setError(null);
       setPhoto(e.target.value) }
    }}
  />
</label>
<p className="validator-hint hidden">
  Must be more than 8 characters, including
  <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
</p>

{error &&<p>{error}</p>}
<div>
  <button className="btn btn-secondary w-full" onClick={()=>signup()}>Sign Up</button>
  
</div>

</div>
    </div>
    </div>
  )
}

export default Signup