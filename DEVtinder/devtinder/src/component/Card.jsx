import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { removeFeed } from '../utils/feedSlice';
const Card = (user) => {
    const dispatcher = useDispatch();
    const{firstName , lastName , _id ,photo ,about} = user.user;
    console.log(user.user.photo);
    
   const sendStatus = async(status , id)=>{
    //api call to send status
    const res = await axios.post(BASE_URL+"/request/send/"+status+"/"+id, {} , {withCredentials : true});
    console.log("call",res.data.data);
    
    dispatcher(removeFeed(id));
    }
    
  return (
    <div><div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={photo}
      alt="Photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName} {lastName}</h2>
    <p>{about}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>sendStatus("ignored" , _id)}>Ignore</button>
      <button className="btn btn-secondary" onClick={()=>sendStatus("interested" , _id)}>Interested</button>
    </div>
  </div>
</div></div>
  )
}

export default Card