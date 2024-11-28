import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from '../about componets/AboutPage';
import Service from '../service componets/Service';
import Dasbord from '../admin componets/Dasbord';
import Login from '../login componets/Login';
import AdminDashbord from '../admin componets/AdminDashbord';
import EmployeeEdit from '../admin componets/EmployeeEdit';
import AddNewEmployee from '../admin componets/AddNewEmployee';
import AddNewCustomerr from '../admin componets/AddNewCustomerr';
import Customers from '../about componets/Customers';
import EditEmployee from '../admin componets/EditEmployee';
import EditCustomer from '../admin componets/EditCustomer';
import Oreder from '../admin componets/Oreder';
import VihickeOrder from '../admin componets/VihickeOrder';
import Ditail from '../admin componets/Ditail';
import Services from '../admin componets/Services';
import Status from '../admin componets/Status';
import Contact from '../contact components/Contact';
import AddAccount from '../admin componets/AddAccount';
import StartParent from '../start/startParent';




function App() {
  return (
    <Router>
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/service" element={<Service />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<StartParent />} />

      {/* Admin Dashboard Route with Layout */}
      <Route path="/dashboard" element={<Dasbord />}>
      <Route path='add-account' element = {<AddAccount/>} />
        <Route path='edit-employee/:id' element={<EditEmployee />} />
        <Route path='customers' element={<Customers />} />
        <Route path='' element={<AdminDashbord />} />
        <Route path='admin-dashboard' element={<AdminDashbord />} /> 
        <Route path='add-new-customer' element={<AddNewCustomerr />} /> 
        <Route path='add-employee' element={<AddNewEmployee />} /> 
        <Route path='employe-edit' element={<EmployeeEdit />} />{/* Admin Dashboard Content */}
        <Route path='edit-customer/:id' element = {<EditCustomer/>} />
        <Route path='customer-order/:id' element = {<Oreder/>}/>
        <Route path="vihicke" element={<VihickeOrder />} />
        <Route path="ditail/:id" element={<Ditail />} />
        <Route path="add-services" element={<Services/>} />
        <Route path="status" element={<Status />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
