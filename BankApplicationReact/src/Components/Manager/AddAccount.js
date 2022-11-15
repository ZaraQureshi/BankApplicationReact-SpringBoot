import React, { useState } from "react";

const AddAccount = () => {
  const initialValues = {
    custid: "",
    type: "",
    deposit: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/accounts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer: {
          customerId: Number(formValues.custid),
        },

        type: Number(formValues.type),
        accountBalance: formValues.deposit,
      }),
    }).then((res) => {
        document.getElementById("error-alert").style.visibility = "visible";
      if (res.status != 200) {
        document.getElementById("error-alert").classList.add("alert-danger");
        document.getElementById("error-alert").classList.remove("alert-success");
        document.getElementById("error-alert").innerText="Invalid Data";
        console.log(res);
      } else {
        document.getElementById("error-alert").classList.add("alert-success");
        document.getElementById("error-alert").classList.remove("alert-danger");
        document.getElementById("error-alert").innerText="Account created successfullyy";
      }
    });

    console.log(formValues);
  };
  return (
    // <div>
    <div className="manager-main">
      {/* <div style={{width:`16em`,position:`fixed`,height:`100%`}}>
            
        </div> */}
      <div className="addaccount">
        <h3>Add Account</h3>
        <hr />

        <form onSubmit={handleSubmit} style={{marginTop:`5em`}}>
          <div className="form-group row my-3">
            <div className="col-sm-3" style={{textAlign: "right"}}>
              <label >Customer ID</label>
            </div>
            <div className="col-sm-7">
              <input
                className="form-control"
                placeholder="Enter Customer Id"
                type="text"
                name="custid"
                value={formValues.custid}
                onChange={handleChange}
              />
              {/* <p>{formErrors.fname}</p> */}
            </div>
          </div>
          <div className="form-group row my-3">
            <div className="col-sm-3" style={{textAlign: "right"}}>
              <label>Account Type</label>
            </div>
            <div className="col-sm-7">
              {/* <div className="dropdown display-none">
                <input
                  className="btn btn-secondary dropdown-toggle"
                  name="type"
                  value={formValues.type}
                  onChange={handleChange}
                  style={{
                    background: `white`,
                    color: `gray`,
                    borderColor: `gray`,
                    width: `100%`,
                  }}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  placeholder="Account Type"
                />
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Savings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Current
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Salary
                    </a>
                  </li>
                </ul>
              </div> */}
              <div>
                <select
                  className="form-select"
                  onChange={handleChange}
                  name="type"
                >
                  <option value="0" selected>
                    Savings
                  </option>
                  <option value="1">Current</option>
                </select>
              </div>
              {/* <select>
                                <option>Savings</option>
                                <option>Current</option>
                                <option>Salary</option>
                            </select> */}
              {/* </div> */}
            </div>
          </div>
          <div className="form-group row my-3">
            <div className="col-sm-3" style={{textAlign: "right"}}>
              <label>Initial Deposit</label>
            </div>
            <div className="col-sm-7">
              <input
                className="form-control"
                name="deposit"
                value={formValues.deposit}
                onChange={handleChange}
                placeholder="Enter initial deposit amount"
                type="text"
              />
              {/* <p>{formErrors.fname}</p> */}
            </div>
          </div>
          <div className="form-group row mb-3">
            <div className="col-sm-3"></div>
            <div className="col-sm-9">
              <div className="row mb-3">
                {/* <div className='col-sm-6'> */}
                <button
                  id="submit-btn"
                  className="btn btn-primary form-control"
                  type="submit"
                >
                  Submit
                </button>
                {/* </div> */}
                {/* <div className='col-sm-6'> */}
                <button
                  id="reset-btn"
                  className="btn btn-primary form-control"
                  type="submit"
                >
                  Reset
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </form>
        <div className="form-group row my-3">
            <div className="col-sm-3" style={{textAlign: "right"}}>
             
            </div>
            <div className="col-sm-7">
            
            <div
                className="alert alert-danger"
                id="error-alert"
                role="alert"
                style={{ visibility: `hidden` }}
            >
                Invalid Credentials
            
            </div>
            </div>
        
        </div>
        {/* <div className="container">
            <div className="alert alert-success" id="success-alert"role="alert" style={{visibility:`hidden`}}>
            Invalid Credentials
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default AddAccount;
