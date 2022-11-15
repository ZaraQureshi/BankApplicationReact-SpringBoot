import React,{useState,useEffect} from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loginData"));
    console.log(loggedInUser, "HERRERER");
//    console.log(loggedInUser.id);
    if (!loggedInUser) {
      navigate("/login");
    } else {
        setLoading(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("loginData");
    navigate("login/");
  };
  
  return (
    <div className="dashList">
      <ul>
        <li id="list-padding" className="manager-info">
          <span>
            <i className="fa-solid fa-user"></i>
          </span>
          <div style={{ marginTop: `1.5em` }}>
            <h5>Zara Qureshi</h5>
            <p>ID: 12345678</p>
          </div>
        </li>
        <hr className="line" />
        <li id="drop-padding">
          <p>
            <button
              className="btn btn-primary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Account <i className="fa-sharp fa-solid fa-caret-down"></i>
            </button>
            {/* <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Button with data-bs-target
                    </button> */}
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body" id="drop-padding-body">
              <p>
                <Link to="addaccount">Add Account</Link>
              </p>

              <p>
                <Link to="editaccount">Edit Account</Link>
              </p>

              <p>
                <Link to="deleteaccount">Delete Account</Link>
              </p>
            </div>
          </div>
        </li>
        <hr className="line" />
        <li id="drop-padding">
          <p>
            <button
              className="btn btn-primary"
              data-bs-toggle="collapse"
              href="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample2"
            >
              Customer <i className="fa-sharp fa-solid fa-caret-down"></i>
            </button>
            {/* <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Button with data-bs-target
                    </button> */}
          </p>
          <div className="collapse" id="collapseExample2">
            <div className="card card-body" id="drop-padding-body">
              <p>
                <Link to="addcustomer">Add Customer</Link>
              </p>

              <p>
                <Link to="editcustomer">Edit Customer</Link>
              </p>

              <p>
                <Link to="deletecustomer">Delete Customer</Link>
              </p>
            </div>
          </div>
        </li>
        <hr className="line" />
        <li id="drop-padding">
          <p>
            <button
              className="btn btn-primary"
              data-bs-toggle="collapse"
              href="#collapseExample3"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample3"
            >
              Services <i className="fa-sharp fa-solid fa-caret-down"></i>
            </button>
            {/* <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Button with data-bs-target
                    </button> */}
          </p>
          <div className="collapse" id="collapseExample3">
            <div className="card card-body" id="drop-padding-body">
              <p>
                <Link to="balanceenquiry">Balance Enquiry</Link>
              </p>
              {/* <hr/> */}
              <p>
                <Link to="fundtransfer">Fund Transfer</Link>
              </p>
              {/* <hr/> */}
              <p>
                <Link to="withdraw">Withdrawal</Link>
              </p>
              {/* <hr/> */}
              <p>
                <Link to="deposit">Deposit</Link>
              </p>
              {/* <hr/> */}
              <p>
                <Link to="statement">Statement</Link>
              </p>

              {/* <p><Link to="addaccount">Add Account</Link></p>
                                
                    <p><Link to="editaccount">Edit Account</Link></p>
                                
                    <p><Link to="deleteaccount">Delete Account</Link></p> */}
            </div>
          </div>
        </li>
        <hr className="line" />
        <li id="drop-padding">
          <p>
            <button
              className="btn btn-primary"
              onClick={logout}
              role="button"
              aria-expanded="false"
            >
              Logout
            </button>
            {/* <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Button with data-bs-target
                    </button> */}
          </p>
        </li>
        <hr className="line" />
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

        {/* <div classNameName="dropdown">
                    <button style={{border:`0`,background:`#3943B7`}}classNameName="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Statement
                    </button>
                    <ul className="dropdown-menu" style={{background:`#3943B7`}}>
                        <li><Link classNameName="dropdown-item" to="ministatement">Mini Statement</Link></li>
                        <li><Link classNameName="dropdown-item" to="customizestatement">Customized Statement</Link></li>
                        
                    </ul>
                </div> */}
        {/* <div classNameName="dropdown">
                    <a classNameName="btn btn-secondary dropdown-toggle" style={{background:`#3943B7`}}id="edit" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Statement
                    </a>

                    <ul id="side-drop"classNameName="dropdown-menu" style={{color:`#3943B7`,textAlign:`center`,transform:`translate3d(150px, 60px, 0px)`}}>
                        <li><Link style={{color:`#3943B7`}} classNameName="dropdown-item" to="/editcustomer">Edit</Link></li>
                        <li><Link style={{color:`#3943B7`}} classNameName="dropdown-item" to="/deletecustomer">Delete</Link></li>
                        <li><Link style={{color:`#3943B7`}}classNameName="dropdown-item" to="/changepassword">Change Password</Link></li>
                    </ul>
                </div> */}
        {/* </li> */}
        {/* <li>
                <Link to="">Account</Link>
            </li> */}
        <li>
          {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div> */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
