import React from 'react'

const Toast = ({ msg }) => {
  return (
    <div>
        <div className="toast toast-top toast-center">
  <div className="alert alert-info">
    <span>{msg}</span>
  </div>
</div>
    </div>
  )
}

export default Toast