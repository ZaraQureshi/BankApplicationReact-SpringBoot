import React from 'react'
import CustomerSideBar from './CustomerSideBar'
import {Link,Outlet} from 'react-router-dom';
const CustomerDashboard = () => {
  return (
    <div>
        <CustomerSideBar/>
        <Outlet/>
        lemon
    </div>
  )
}

export default CustomerDashboard