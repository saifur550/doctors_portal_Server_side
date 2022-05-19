import React from 'react';
import { toast } from 'react-toastify'

const UserRow = ({user,refetch}) => {
    const {email,role} = user;

    const makeAdmin =() =>{
      fetch(`https://shrouded-sea-42586.herokuapp.com/user/admin/${email}`, {

        method:'PUT',
        headers:{
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => {
        if(res.status === 403){
          toast.error('Failed to make and admin')
        }
        return res.json()
      })
      .then(data=> {
        console.log(data);
      if (data.modifiedCount > 0){
        refetch()
        toast.success('successfully make an admin')
      }
      })
    }

   
    return (
    
      <tr>
        <th>{0}</th>
        <td>{email}</td>
        <td>
          {
            role !== 'admin' &&
            <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>
          }
        </td>
        <td><button className="btn btn-xs">Add User</button></td>
      </tr>
   
   
    );
};

export default UserRow;