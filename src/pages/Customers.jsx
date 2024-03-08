import React, { useState , useEffect} from 'react'
import AdminSidebar from '../components/AdminSidebar'
import Ajay from '../components/Ajay';
import { Link } from 'react-router-dom';
// import Ajay from "../components/Ajay"

const Customers = () => {
  const  [data, setData] = useState(null);

 useEffect(() => {
   fetchData();

 }, [])

 const fetchData = async()  => {
     const response = await fetch("http://localhost:3000/users")
    //  console.log(response.json())
    if(!response.ok){
      throw new Error("Network response was not ok")
    }
    const insuranceUserData = response.json()
     console.log(insuranceUserData)

 }
  return (
    <div className='adminContainer'>
       {/* sidebar */}
     <AdminSidebar />

{/* main */}
<main> Customers
<Ajay />

<Link to="/admin/form/register-insurance">
<button>Register Insurance Data</button>
</Link>
 <br /> <br />
<Link to="/admin/form/register-agent">
<button>Create new agent</button>
</Link>
</main>
  
 
    </div>
  )
}

export default Customers