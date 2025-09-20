import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
// import RequestCard from './RequestCard';
import Rcard from './Rcard';
import { addRequests } from '../utils/requestsSlice';
import { BASE_URL } from '../utils/constant'
const Requests = () => {
    const requests = useSelector((store)=> store.requests);
    const dispatcher = useDispatch();
    const getRequests = async () =>{
        //fetch requests from backend
        try{
            const requests = await axios.get(BASE_URL+'/user/requests/recieved', { withCredentials: true });
            // console.log("requests", requests.data)
            // console.log("passingrequests", requests.data.connectionsRequest);
            
            dispatcher(addRequests(requests.data.connectionsRequest));
            
            
        }catch(err){
            console.log("error", err);
        }
    }

    useEffect(() => {
        getRequests();
    }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-6 text-center drop-shadow-lg tracking-wide">
        My Requests
      </h1>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        { Array.isArray(requests) && requests.length > 0 ? (
          requests.map((user, idx) => {
           return <Rcard key={user.fromUserId._id || idx} user={user} />
})
        ) : (
          <p>No connections found.</p>
        )}
      </div>
    </div>
  )
}

export default Requests 