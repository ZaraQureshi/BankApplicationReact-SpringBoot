import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ManagerHeader from "./ManagerHeader";
// import Register from './AddCustomer';
import Sidebar from "../Sidebar";
import ViewCustomer from "./ViewCustomer";
import { Navigate } from "react-router-dom";
import ManagerFront from "./ManagerFront";

const ManagerDashboard = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loginData"));
    console.log(loggedInUser, "HERRERER");
   console.log(loggedInUser.id);
    if (!loggedInUser) {
      navigate("/login");
    } else {
        setLoading(false);
    }
  }, []);

  // const [reg, setreg] = useState(false);
  // const [view,setview]=useState(false);
  // const selected=(e)=>{
  //     if(reg===true){
  //         <Link to="/addcustomer"/>
  //     }else if(view===true){
  //         return <ViewCustomer/>
  //     }else{
  //         return null;
  //     }
  // }
  // if (!authenticated) {
  //     console.log('dhgsvd')
  //     return <Navigate replace to="/login" />;

  // } else {
  return (
    <div>
      {/* <div className="container-fluid"> */}
      {/* <Header/>*/}
      {/* <Outlet/>  */}
      {/* <div className='row g-0'>
                <div className='col-2 '> */}
      {/* <ManagerHeader/> */}
      {!loading ? (
        <>
          <Sidebar />
          <Outlet />
          {/* <ManagerFront /> */}
        </>
      ) : (
        <>Loading.....</>
      )}
      {/* <div className="list-group">
                        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                            The current link item
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">A second link item</a>
                        <a href="#" className="list-group-item list-group-item-action">A third link item</a>
                        <a href="#" className="list-group-item list-group-item-action">A fourth link item</a>
                        <a href="#" className="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">A disabled link item</a>
                    </div> */}
      {/* <span>
                        <Link to="" id="1">View Customers</Link>
                    </span>
                    <hr/>
                    <span>
                        <Link to="/addcustomer">Add Customer</Link>
                    </span>
                    <hr/>
                    <span>
                        <Link to="">Balance Enquiry</Link>
                    </span>
                    <hr/>
                    <span>Fund Transfer</span>
                    <hr/>
                    <span>Withdrawal</span>
                    <hr/>
                    <span>Deposit</span>
                    <hr/>
                    <span>Mini Statement</span>
                    <hr/> */}
      {/* </div> */}

      {/* <div className='col-10 dashContent'>
                    <div id='dashContent1'>
                       
                    </div>
                </div> */}

      {/* </div> */}
    </div>
  );
};
export default ManagerDashboard;
