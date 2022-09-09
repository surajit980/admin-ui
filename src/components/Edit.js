import React from 'react'
import { Link } from "react-router-dom";

const Edit = ({ editUser,updateEditUser }) => {

  const handleSave=()=>{
    const name=document.getElementById("edit-name").value===''?editUser.name:document.getElementById("edit-name").value;
    const email=document.getElementById("edit-email").value===''?editUser.email:document.getElementById("edit-email").value;
    const role=document.getElementById("edit-role").value===''?editUser.role:document.getElementById("edit-role").value;
    updateEditUser(editUser,name,email,role);
  }


  return (
    <div className='edit'>
      <div>
        <h4>{editUser.name}</h4>
        <input id='edit-name' className='edit-inp' type="text" placeholder="Enter new name"/>
      </div>
      <div>
        <h4>{editUser.email}</h4>
        <input id='edit-email' className='edit-inp' type="text" placeholder="Enter new email"/>
      </div>
      <div>
        <h4>{editUser.role}</h4>
        <input id='edit-role' className='edit-inp' type="text" placeholder="Enter new role"/>
      </div>
      <Link to="/"><button className='edit-save-btn' onClick={handleSave}>Save</button></Link>
    </div>
  )
}

export default Edit
