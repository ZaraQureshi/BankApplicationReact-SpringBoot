import React from 'react'

const DeleteCustomer = () => {
  return (
    <div className='manager-main'>
        <div className='deletecustomer '>
       
            <h3>Delete Customer</h3>
            <hr/>
            {/* <p style={{color:`red`}}>Enter Account Number to delete customer. *</p> */}
            <div className="form-group row my-3">
                <div className='col-sm-3'>
                    <label>Account Number</label>
                </div>
                <div className='col-sm-9'>
                    <input className="form-control" placeholder="Enter account number"type="text" name="fname" />
                    {/* <p>{formErrors.fname}</p> */}
                </div>
            </div>
            <div className="form-group row mb-3">
                <div className="col-sm-3" >
                    
                </div>
                <div className='col-sm-9' style={{textAlign:`left`}}>
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

export default DeleteCustomer