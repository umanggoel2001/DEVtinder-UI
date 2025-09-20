import React, { use, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux';
import { addConnecetions } from '../utils/connectionSlice';
import ConnectionCard from './ConnectionCard';
const Connections = () => {
    const connections = useSelector((store)=> store.connections);
    const dispatcher = useDispatch();

const getConnections = async () =>{
    
    //  if (Array.isArray(connections) && connections.length > 0) return;
    try{
        const connections = await axios.get(BASE_URL+'/user/connections', { withCredentials: true });  
        console.log("connections", connections.data.data[0]);
        dispatcher(addConnecetions(connections.data.data));
        
    }catch(err){
        console.log("error", err);
    }
}

useEffect(() => {
   getConnections();
}, []);

if(!connections) return <div>Loading...</div>;
if(connections.length === 0) return <div>No connections found.</div>;
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-6 text-center drop-shadow-lg tracking-wide">
        My Connections
      </h1>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', flexWrap: 'wrap'
       }}>
        {Array.isArray(connections) && connections.length > 0 ? (
          connections.map((user, idx) => (
            <ConnectionCard key={user.id || idx} user={user} />
          ))
        ) : (
          <p>No connections found.</p>
        )}
      </div>
    </div>
  )
}

export default Connections