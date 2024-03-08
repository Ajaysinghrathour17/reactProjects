import React, { Suspense, lazy } from 'react'; 
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import Loader from './components/Loader';
import FormNewPolicy from './components/forms/FormNewPolicy';
import NewAgent from './components/forms/NewAgent';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Groups from './pages/Groups';
import Templates from './pages/Templates';
import Campaigns from './pages/Campaigns';
import KeyAutomation from './pages/KeyAutomation';
import Agent from './pages/Agent';
import Inbox from './pages/Inbox.jsx';


const Dashboard = lazy(() => import("./pages/Dashboard")) ;
const Products = lazy(() => import("./pages/Products")) ;
const Transaction = lazy(() => import("./pages/Transaction")) ;

const Customers = lazy(() => import("./pages/Customers")) ;


const App = () => {
  return (
    <Router >
      <Suspense fallback={<Loader />} >
      <Routes>
      <Route path="/" element={<Home  />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product" element={<Products />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="groups" element={<Groups />} />
        <Route path="templates" element={<Templates />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="inbox" element={<Inbox />} />

        <Route path="keyword-automation" element={<KeyAutomation />} />
        <Route path="assign-agent" element={<Campaigns />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="customer" element={<Customers />} />
        <Route path="form/register-insurance" element={<FormNewPolicy  />} />
        <Route path="form/register-agent" element={<NewAgent />} />



      </Routes>
      </Suspense>
    </Router>
  )
}

export default App