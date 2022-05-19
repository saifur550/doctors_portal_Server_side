import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const User = () => {
    const {data:users,isLoading,refetch} = useQuery('users' ,()=> fetch('https://shrouded-sea-42586.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h4 className='text-2xl font-semibold text-secondary'>All User list : {users.length} </h4>

            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Admin</th>
        <th>Add User</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user, index)=> <UserRow
            key={user._id}
            user={user}
            index={index}
            refetch={refetch}
            >
            </UserRow>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default User;