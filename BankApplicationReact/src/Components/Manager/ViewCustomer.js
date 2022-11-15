import React from 'react'
import { Link } from 'react-router-dom'

const ViewCustomer = () => {
    const data=[
        {
            customerID:1234,
            customerName:"Zara Qureshi",
            customerPassword:"Zara1234"
        },
        {
            customerID:5678,
            customerName:"Sunny Dodti",
            customerPassword:"Sunny5678"
        },
        {
            customerID:9012,
            customerName:"Dilna Anchamkudi",
            customerPassword:"Dilna9012"
        },
        {
            customerID:3456,
            customerName:"Rutuparna Kudtarkar",
            customerPassword:"Rutu3456"
        },
        {
            customerID:7891,
            customerName:"Almas Shaikh",
            customerPassword:"Almas7891"
        },
    ]

  return (
    <div>
    <div className="viewcustomer">
        <h3>Customer Details</h3>
        <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">Customer ID</th>
                <th scope="col">Name</th>
                <th scope="col">Account Number</th>
                <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                
                {data.map((i,key)=>(
                    <>
                        <tr>
                        {/* <th scope="row">1</th> */}
                            <td>{i.customerID}</td>
                            <td>{i.customerName}</td>
                            <td>{i.customerPassword}</td>
                            <td>
                                <div className="dropdown">
                                    <a className="btn btn-secondary dropdown-toggle" id="edit" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Edit
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/editcustomer">Edit</Link></li>
                                        <li><Link className="dropdown-item" to="/deletecustomer">Delete</Link></li>
                                        <li><Link className="dropdown-item" to="/addaccount">Add Account</Link></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </>
                    )
                )}
               
                
                {/* <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr> */}
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default ViewCustomer