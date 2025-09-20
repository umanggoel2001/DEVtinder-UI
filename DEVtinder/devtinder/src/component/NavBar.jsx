import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../utils/constant'
import { removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user)
  const handleLogout = async() => {
    await axios.post(BASE_URL+ '/logout',{}, { withCredentials: true })
    dispatch(removeUser());
    navigate("/login");


  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">🧑‍💻DEVtinder👩‍💻</a>
    </div>

    {user && ( <div className="flex gap-2">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      <p>Hello,{user.firstName}</p>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={user.photo} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <Link to="/profile" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li><Link to="/connections">Connections</Link></li>
          <li><Link to="/">Feed</Link></li>
          <li><Link to="/requests">Requests</Link></li>
          <li><a onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>
    </div>)}
   
  </div>
  )
}

export default NavBar