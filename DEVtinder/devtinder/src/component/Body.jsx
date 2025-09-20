import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet , useNavigate } from "react-router-dom";
import Footer from './Footer';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { BASE_URL } from "../utils/constant";
import { addUser } from '../utils/userSlice';
const Body = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUser = async () => {
    try{
      const user = await axios.get(BASE_URL + '/profile/view', { withCredentials: true });
      dispatch(addUser(user.data));
    }
    catch(err){
       if (err.status == 401) {
        navigate("/login");
      }
      navigate("/login");
      console.log("error", err);
    }
  }

  useEffect(() => {
    if(!user){
       fetchUser();
    }
   
  }, []);
  return (
  <div className="flex flex-col min-h-screen">
  <NavBar />
  
  {/* Main content area grows to fill space */}
  <main className="flex-grow">
    <Outlet />
  </main>
  
  {/* Footer stays at bottom */}
  <Footer />
</div>
  )
}

export default Body