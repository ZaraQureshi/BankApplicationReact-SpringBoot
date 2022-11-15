import React,{useState} from 'react'

const Deposit = () => {
    const [accNum,setAccNum]=useState(0);
    const [amount,setAmount]=useState(0);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await fetch("http://localhost:8080/accounts/deposit",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
            body:JSON.stringify({
                payeeAccount:accNum,
                amount:amount,
            })
        }).then((res)=>{
            document.getElementById("error-alert").style.visibility = "visible";
            if (res.status != 200) {
              document.getElementById("error-alert").classList.add("alert-danger");
              document.getElementById("error-alert").classList.remove("alert-success");
              document.getElementById("error-alert").innerText="Transaction Unsuccessful.";
              console.log(res);
            } else {
              document.getElementById("error-alert").classList.add("alert-success");
              document.getElementById("error-alert").classList.remove("alert-danger");
              document.getElementById("error-alert").innerText="Transaction successful.";
            }
            
        })
    }
  return (
    <div className='manager-main'>
        <div className='depositform'>
            <h3>Deposit</h3>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div className="form-group row my-3">
                    <div className='col-sm-3'>
                        <label>Account Number</label>
                    </div>
                    <div className='col-sm-9'>
                        <input className="form-control" placeholder="Account Number" type="text" onChange={e=>setAccNum(e.target.value)}/>
                        {/* <p>{formErrors.fname}</p> */}
                    </div>
                </div>

                <div className="form-group row my-3">
                    <div className='col-sm-3'>
                        <label>Deposit Amount</label>
                    </div>
                    <div className='col-sm-9'>
                        <input className="form-control" placeholder="Amount" type="text" onChange={e=>setAmount(e.target.value)}/>
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
                        Transaction Unsuccessful.
                    
                    </div>
                </div>
        
            </div>
        </div>
    </div>
  )
}

export default Deposit