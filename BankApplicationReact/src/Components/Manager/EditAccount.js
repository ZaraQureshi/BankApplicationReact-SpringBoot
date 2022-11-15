import React from 'react'

const EditAccount = () => {
  return (
    < div className='manager-main'>
        {/* <div style={{width:`16em`,position:`fixed`,height:`100%`}}>
            
        </div> */}
        <div className="editaccount">
        <h3 >Edit Account</h3>
        <hr/>
            <div className="form-group row my-3">
                <div className='col-sm-3'>
                    <label>Customer ID</label>
                </div>
                <div className='col-sm-9'>
                    <input className="form-control" placeholder="Enter Customer Id"type="text" name="fname" />
                    {/* <p>{formErrors.fname}</p> */}
                </div>
            </div>
            <div className="form-group row my-3">
                <div className='col-sm-3'>
                    <label>Account Type</label>
                </div>
                <div className='col-sm-9'>
                    <div className="dropdown" >
                        <a className="btn btn-secondary dropdown-toggle" style={{background:`white`,color:`gray`,borderColor:`gray`,width:`100%`}}href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Account Type
                        </a>
                        <ul className="dropdown-menu" >
                            <li><a className="dropdown-item" href="#">Savings</a></li>
                            <li><a className="dropdown-item" href="#">Current</a></li>
                            <li><a className="dropdown-item" href="#">Salary</a></li>
                        </ul>
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
                <div className='col-sm-3'>
                    <label>Initial Deposit</label>
                </div>
                <div className='col-sm-9'>
                    <input className="form-control" placeholder="Enter initial deposit amount" type="text" name="fname" />
                    {/* <p>{formErrors.fname}</p> */}
                </div>
            </div>
            <div className="form-group row mb-3">
                <div className="col-sm-3" >
                    
                </div>
                <div className='col-sm-9' >
                    <div className="row mb-3">
                        {/* <div className='col-sm-6'> */}
                            <button id="submit-btn" className="btn btn-primary form-control"type="submit">
                                Submit
                            </button>
                        {/* </div> */}
                        {/* <div className='col-sm-6'> */}
                            <button id="reset-btn"className="btn btn-primary form-control"type="submit">
                                Reset
                            </button>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
        
    
    </div>
  )
}

export default EditAccount