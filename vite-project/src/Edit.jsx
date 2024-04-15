import React, { useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import { updateUser } from './store/reducers/UserReducers'

const Edit = () => {
    const {id}=useParams()
   
    const users=useSelector((state)=>state.users)
    const existingUser=users.filter(f=>f.id==id)
    const {name,email}=existingUser[0]
const dispatch=useDispatch()
const navigate=useNavigate()
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    const handleUpdate=(e)=>{
      e.preventDefault()
dispatch(updateUser({
  id:id,
  name:uname,
  email:uemail
}))
navigate ('/')
    }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div className="w-50 border bg-secondary text-white p-5">
      <h3>Edit User</h3>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
onChange={e=>setName(e.target.value)}
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            value={uname}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
value={uemail}
onChange={e=>setName(e.target.value)}
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <br />
        <button className="btn btn-info">Update</button>
      </form>
    </div>
  </div>
  )
}

export default Edit
