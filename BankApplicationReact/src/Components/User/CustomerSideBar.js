import React from 'react'
import {Link,Outlet} from 'react-router-dom';
const CustomerSideBar = () => {
  return (
    <div className='dashList'>
        <ul>
            <li id="list-padding"className="manager-info">
                <span>
                    <i className="fa-solid fa-user"></i>
                </span>
                <div style={{marginTop:`1.5em`}}>
                    <h5>Zara Qureshi</h5>
                    <p>Customer ID: 12345678</p>
                </div>
            </li>
            <hr className='line'/>
            <li id="drop-padding">
                <p>
                    <button className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Account  <i className="fa-sharp fa-solid fa-caret-down"></i>
                    </button>
                    {/* <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Button with data-bs-target
                    </button> */}
                </p>
                <div className="collapse" id="collapseExample">
                <div className="card card-body" id="drop-padding-body">
                    <p><Link to="addaccount">Add Account</Link></p>
                                
                    <p><Link to="editaccount">Edit Account</Link></p>
                    
                    <p><Link to="deleteaccount">Delete Account</Link></p>
                </div>
                </div>
            </li>
            <hr className='line'/>
            {/* <li id="drop-padding">
                <p>
                    <button class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                        Customer <i class="fa-sharp fa-solid fa-caret-down"></i>
                    </button> */}
                    {/* <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Button with data-bs-target
                    </button> */}
                {/* </p>
                <div class="collapse" id="collapseExample2">
                <div class="card card-body" id="drop-padding-body">
                    <p><Link to="addaccount">Add Account</Link></p>
                                
                    <p><Link to="editaccount">Edit Account</Link></p>
                                
                    <p><Link to="deleteaccount">Delete Account</Link></p>
                </div>
                </div>
            </li> */}
            <li id="drop-padding">
                <p style={{padding:`6px 12px`}}>
                    <Link to="balanceenquiry">Balance Enquiry</Link>
                </p>
            </li>
            <hr className='line'/>
            <li id="drop-padding">
                <p style={{padding:`6px 12px`}}>
                    <Link to="fundtransfer">Fund Transfer</Link>
                </p>
            </li>
            <hr className='line'/>
            {/* <li id="drop-padding">
                <p>
                    <Link to="withdraw">Withdrawal</Link>
                </p>
            </li>
            <hr className='line'/> */}
            {/* <li id="drop-padding">
                <p>
                    <Link to="deposit">Deposit</Link>
                </p>
            </li> */}
            <hr className='line'/>
            {/* <li id="drop-padding">
                <Link to="deposit">Deposit</Link>
            </li>
            <hr/> */}
            <li id="drop-padding">
            <p>
                    <button className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                        Statement <i className="fa-sharp fa-solid fa-caret-down"></i>
                    </button>
                    {/* <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Button with data-bs-target
                    </button> */}
                </p>
                <div className="collapse" id="collapseExample2">
                <div className="card card-body" id="drop-padding-body">
                    <p><Link to="addaccount">Mini Statement</Link></p>
                                
                    <p><Link to="editaccount">Customized Statement</Link></p>
                    
                    {/* <p><Link to="deleteaccount">Delete Account</Link></p> */}
                </div>
                </div>
            </li>
            <hr className='line'/>
            {/* <li id="drop-padding">
                <p>
                    <button class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                        Services <i class="fa-sharp fa-solid fa-caret-down"></i>
                    </button> */}
                    {/* <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Button with data-bs-target
                    </button> */}
                {/* </p>
                <div class="collapse" id="collapseExample3">
                <div class="card card-body" id="drop-padding-body">
                    
                        <p> */}
                            {/* <Link to="balanceenquiry">Balance Enquiry</Link>
                        </p> */}
                        {/* <hr/> */}
                        {/* <p>
                            <Link to="fundtransfer">Fund Transfer</Link>
                        </p> */}
                        {/* <hr/> */}
                        {/* <p>
                            <Link to="withdraw">Withdrawal</Link>
                        </p>  */}
                        {/* <hr/> */}
                        {/* <p>
                            <Link to="deposit">Deposit</Link>
                        </p> */}
                        {/* <hr/> */}
                        {/* <p>
                            <Link to="statement">Statement</Link>
                        </p> */}
                    
                    {/* <p><Link to="addaccount">Add Account</Link></p>
                                
                    <p><Link to="editaccount">Edit Account</Link></p>
                                
                    <p><Link to="deleteaccount">Delete Account</Link></p> */}
                {/* </div>
                </div>
                </li> */}
                
            {/* <li id="drop-padding">
                
            </li> */}
            {/* <li id="list-padding">
                <Link to="viewcustomer">View customers</Link>
            </li>
            <li id="list-padding">
                <Link to="addcustomer">Add customer</Link>
            </li>  */}
            {/* <li id="list-padding">
                <Link to="balanceenquiry">Balance Enquiry</Link>
            </li>
            <hr/>
            <li id="list-padding">
                <Link to="fundtransfer">Fund Transfer</Link>
            </li>
            <hr/>
            <li id="list-padding">
                <Link to="withdraw">Withdrawal</Link>
            </li> 
            <hr/>
            <li id="list-padding">
                <Link to="deposit">Deposit</Link>
            </li>
            <hr/>
            <li id="list-padding">
                <Link to="statement">Statement</Link> */}
                
                {/* <div className="dropdown">
                    <button style={{border:`0`,background:`#3943B7`}}className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Statement
                    </button>
                    <ul class="dropdown-menu" style={{background:`#3943B7`}}>
                        <li><Link className="dropdown-item" to="ministatement">Mini Statement</Link></li>
                        <li><Link className="dropdown-item" to="customizestatement">Customized Statement</Link></li>
                        
                    </ul>
                </div> */}
                {/* <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" style={{background:`#3943B7`}}id="edit" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Statement
                    </a>

                    <ul id="side-drop"className="dropdown-menu" style={{color:`#3943B7`,textAlign:`center`,transform:`translate3d(150px, 60px, 0px)`}}>
                        <li><Link style={{color:`#3943B7`}} className="dropdown-item" to="/editcustomer">Edit</Link></li>
                        <li><Link style={{color:`#3943B7`}} className="dropdown-item" to="/deletecustomer">Delete</Link></li>
                        <li><Link style={{color:`#3943B7`}}className="dropdown-item" to="/changepassword">Change Password</Link></li>
                    </ul>
                </div> */}
            {/* </li> */}
            {/* <li>
                <Link to="">Account</Link>
            </li> */}
            <li>
                {/* <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div> */}
                 
            </li>
            
        </ul>
        
    </div>
  
  )
}

export default CustomerSideBar