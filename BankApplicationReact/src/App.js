import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import AddCustomer from './Components/Manager/AddCustomer';
import Header from './Components/Header';
import ViewCustomer from './Components/Manager/ViewCustomer';
import ManagerDashboard from './Components/Manager/ManagerDashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import BalanceEnquiry from './Components/Manager/BalanceEnquiry';
import FundTransfer from './Components/Manager/FundTransfer';
import ManagerWithdrawal from './Components/Manager/ManagerWithdrawal';
import Deposit from './Components/Manager/Deposit';
import EditCustomer from './Components/Manager/EditCustomer';
import DeleteCustomer from './Components/Manager/DeleteCustomer';
import ChangePassword from './Components/Manager/ChangePassword';
import MiniStatement from './Components/Manager/MiniStatement';
import Home from './Components/Home';
import Statement from './Components/Manager/Statement';
import AddAccount from './Components/Manager/AddAccount';
import EditAccount from './Components/Manager/EditAccount';
import DeleteAccount from './Components/Manager/DeleteAccount';
import CustomerDashboard from './Components/User/CustomerDashboard';


function App() {
  return (
    // #
    <div className="App">
      {/* <Header/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      <BrowserRouter>
        <Routes>
          
          <Route path="/login" element={<Login/>}/>
          <Route path="/customer" element={<CustomerDashboard/>}/>
          <Route path="/" element={<ManagerDashboard/>}>
            <Route path="viewcustomer" element={<ViewCustomer/>}/>
            <Route path="/balanceenquiry" element={<BalanceEnquiry/>}/>
            <Route path="/fundtransfer" element={<FundTransfer/>}/>
            <Route path="/withdraw" element={<ManagerWithdrawal/>}/>
            <Route path="/deposit" element={<Deposit/>}/>
            <Route path="/addcustomer" element={<AddCustomer/>}/>
            <Route path="/editcustomer" element={<EditCustomer/>}/>
            <Route path="/deletecustomer" element={<DeleteCustomer/>}/>
            <Route path="/changepassword" element={<ChangePassword/>}/>
            <Route path="/statement" element={<Statement/>}/>
            <Route path="/addaccount" element={<AddAccount/>}/>
            <Route path="/editaccount" element={<EditAccount/>}/>
            <Route path="/deleteaccount" element={<DeleteAccount/>}/>
          </Route>
          {/* <Route path="/manager" component={<ManagerDashboard/>}/> */}
          
          
          
        </Routes>
      </BrowserRouter>
      {/* <ManagerDashboard/> */}
    </div>
  );
}

export default App;
