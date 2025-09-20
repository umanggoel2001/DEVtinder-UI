import React from 'react'
import Card from './Card'
import axios from 'axios'
import { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { addFeed } from '../utils/feedSlice'
import { useDispatch , useSelector } from 'react-redux';
const Feed = () => {
   const feed = useSelector((store)=> store.feed);
  const dispatcher = useDispatch();
  const getfeed = async () =>{
    if (Array.isArray(feed) && feed.length > 0) return;
    const users = await axios.get(BASE_URL + "/user/feed", { withCredentials: true });
    console.log("feed", users.data);
    dispatcher(addFeed(users.data));
   
   
    
  }
  useEffect(() => {
    // if (!Array.isArray(feed) || feed.length === 0) {
      getfeed();
    // }
  }, [])




  return (
  <div className='flex justify-center items-center'>
    {Array.isArray(feed) && feed.length > 0 ? (
      
      
        <Card user={feed[0]} />
      
    ) : (
      <p>No feed items found.</p>
    )}
  </div>
  )
}

export { Feed };
