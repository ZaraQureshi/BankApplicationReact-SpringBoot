import React ,{useState}from 'react'

const DeleteAccount = () => {

    const [accNum, setAccNum] = useState(0);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(accNum);
        fetch("http://localhost:8080/accounts/"+Number(accNum),{
            method:"DELETE",
            // headers: {
            //     "Content-Type": "application/json",
            // },
            // body:JSON.stringify({
            //     accountNumber:Number(accNum)
            // })
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
            document.getElementById("error-alert").innerText="Account deleted successfullyy";
          }
        });
    }
  return (
    <div className='manager-main'>
        <div className='deleteaccount '>
            <div className="deleteaccount-content">
                <h3>Delete Account</h3>
                <hr/>
                <form onSubmit={handleSubmit}style={{marginTop:`5em`}}>
                    {/* <p style={{color:`red`}}>Enter Account Number to delete customer. *</p> */}
                    <div className="form-group row my-3">
                        <div className='col-sm-3' style={{textAlign:'right'}}>
                            <label>Account Number</label>
                        </div>
                        <div className='col-md-7 col-sm-9'>
                            <input className="form-control" placeholder="Enter account number"type="text" name="accNum" onChange={e=> setAccNum(e.target.value)} />
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
                                        Delete
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
            </div>
        </div>
    </div>
  )
}

export default DeleteAccount