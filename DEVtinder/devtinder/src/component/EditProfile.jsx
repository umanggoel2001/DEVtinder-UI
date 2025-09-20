import React, { useState, useEffect } from 'react'
import Card from './Card';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import Toast from './toast';
const EditProfile = ({user}) => {
    const [firstName , setFirstName] = useState(user.firstName);
    const [lastName , setLastName] = useState(user.lastName);
    const [gender , setGender] = useState(user.gender);
    const [error, setError] = useState('');
    const[photo ,setPhoto] = useState(user.photo);
    const[about , setAbout] = useState(user.about);
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();
    // const user = useSelector((store) => store.user);
    const saveProfile = async() =>{
        try {
            const res = await axios.patch(BASE_URL+'/profile/edit',{firstName,lastName,gender,photo,about},{ withCredentials: true });
            dispatch(addUser(res.data.data));
            console.log("after",res.data.data);
            
            setShowToast(true);
        } catch (error) {
            setError(error?.response?.data);
        }
    }

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

  return (
   
<div className='flex justify-center '>
         <div className="card card-dash bg-base-100 w-96">
  <div className="card-body">
    <h2 className="card-title">Edit Profile</h2>
    
    <fieldset className="fieldset">  
        <legend>First Name</legend>
  <input type="text" className="input" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
</fieldset>

 <fieldset className="fieldset">  
    <legend>Last Name</legend>
  <input type="text" className="input" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
</fieldset>

 <fieldset className="fieldset">    
    <legend>Gender</legend>
  <input type="text" className="input" value={gender} onChange={(e)=>setGender(e.target.value)}  />
</fieldset>
 <fieldset className="fieldset">    
    <legend>Photo URL</legend>
  <input type="text" className="input" value={photo} onChange={(e)=>setPhoto(e.target.value)}  />
</fieldset>
 <fieldset className="fieldset">    
    <legend>About/Bio</legend>
  <input type="text" className="input" value={about} onChange={(e)=>setAbout(e.target.value)}  />
</fieldset>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
    </div>
    {error && <p className="text-red-500 mt-2">{error}</p>}
  </div>    
</div>

<Card user={user}></Card>
{showToast && <Toast msg="Save Successfully"/>}
</div>
  )

}
export default EditProfile

// Make sure your backend returns the updated user object in res.data after profile edit