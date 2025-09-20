import React from 'react'

const ConnectionCard = (user) => {
     
    const{firstName , lastName , about ,photo} = user.user;
    // console.log("fromCard",user);
    
   
    
  return (
    <div>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectionCard