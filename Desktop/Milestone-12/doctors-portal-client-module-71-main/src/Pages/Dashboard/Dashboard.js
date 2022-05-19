import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../../Hooks/UseAdmin';


const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = UseAdmin(user)
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
            <h4 className="text-4xl font-bold text-purple-500"> welcome to Your DashBoard</h4>
            <Outlet></Outlet>
          {/* <!-- Page content here --> */}
          
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li className='mb-4'>< Link to='/dashboard'> MY Appointment</Link></li>
            <li>< Link to='/dashboard/myreview'>MY  Review</Link></li>
            <li>< Link to='/dashboard/history'>MY  History</Link></li>
            { admin && 
            <>
            <li><Link to="/dashboard/users">All Users</Link></li>
            <li><Link to="/dashboard/adddoctor">Add Doctor</Link></li>
            </>
            }
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;