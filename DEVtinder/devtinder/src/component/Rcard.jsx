import React, { use } from 'react'
import { BASE_URL } from '../utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeRequest } from '../utils/requestsSlice';
const Rcard = ({user}) => {
  
    
  const { fromUserId } = user;
  const { firstName, lastName ,_id,about , photo} = fromUserId;
  console.log(fromUserId);
  
 const dispatcher = useDispatch();
 const res = useSelector((store)=> store.requests);
 const reviewRequest = async(status,id)=>{

        try{
        //call api to review request
        const response = await axios.post(BASE_URL+'/request/review/'+status+'/' + id,{}, { withCredentials: true });
       
        dispatcher(removeRequest(id));
            console.log("Requestttttt", res);
            
        
        }
        catch(err){
            console.log("error", err);
        }

    }
  return (
    <div><div className="card bg-base-100 w-96 shadow-sm">
<div className="card bg-base-100 w-96 shadow-sm">
        <div className="flex flex-row items-center gap-4">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={photo} />
            </div>
          </div>
           <div className="card-body">
    <h2 className="card-title">{firstName} {lastName}</h2>
    <p>{about}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=> reviewRequest("accepted",_id)}>Accept</button>
      <button className="btn btn-secondary" onClick={()=>reviewRequest("rejected",_id)}>Reject</button>
    </div>
  </div>
        </div>
      </div>


 
</div></div>
  )
}

export default Rcard