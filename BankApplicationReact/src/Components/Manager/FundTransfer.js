import React,{useState} from 'react'

const FundTransfer = () => {
    const [payer,setPayer]=useState(0);
    const [payee,setPayee]=useState(0);
    const [amount,setAmount]=useState(0);

    let handleSubmit=async(e)=>{
        e.preventDefault();
        await fetch("http://localhost:8080/accounts/fundtransfer",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
            body:JSON.stringify({
                payerAccount:payer,
                payeeAccount:payee,
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
            
    })};

  return (
    <div className='manager-main'>
        <div className="fundtransfer">
        <h3>Fund Transfer</h3>
        <hr/>
        <form onSubmit={handleSubmit}>
            <div className="form-group row my-3">
                <div className='col-sm-3' style={{textAlign:`right`}}>
                    <label>Payer Account Number</label>
                </div>
                <div className='col-sm-9'>
                    <input className="form-control" placeholder="Payer Account Number"type="text" onChange={e=>setPayer(e.target.value)} />
                    {/* <p>{formErrors.fname}</p> */}
                </div>
            </div>
            <div className="form-group row my-3">
                <div className='col-sm-3' style={{textAlign:`right`}}>
                    <label>Payee Account Number</label>
                </div>
                <div className='col-sm-9'>
                    <input className="form-control" placeholder="Payee Account Number"type="text" onChange={e=>setPayee(e.target.value)} />
                    {/* <p>{formErrors.fname}</p> */}
                </div>
            </div>
            <div className="form-group row my-3">
                <div className='col-sm-3' style={{textAlign:`right`}}>
                    <label>Amount</label>
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

export default FundTransfer;