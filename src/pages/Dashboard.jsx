import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import { Link } from 'react-router-dom';
import '../styles/dashboard.scss'
import '../styles/dashboard.scss'

import { CiCirclePlus } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";


// import "../styles/app.scss"
const Dashboard = () => {
  return (
    <div className='adminContainer dashboard'>

      {/* sidebar */}
      <AdminSidebar />

      {/* main */}
      <main>
        <header id='dahsHead'>
          <div>
            <Link to="/">Home</Link>
          </div>

          <div>
            <div className="buttons">
              <div className='campaign button'>
                <div className="btn"><CiCirclePlus /> New Campaign</div>
              </div>
              <div className='documentation button'>
                <div className="btn"><CiCircleQuestion />Documentation</div>
              </div>

            </div>
          </div>
        </header>
      </main>
    </div>
  );
};


export default Dashboard;