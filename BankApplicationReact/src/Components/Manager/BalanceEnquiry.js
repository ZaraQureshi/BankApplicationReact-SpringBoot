import React,{useState} from 'react'

const BalanceEnquiry = () => {
const [accNum, setAccNum] = useState(0);
const [accData,setAccData]=useState({
    accType:0,accBalance:0,customerId:0
});
     async function handleSubmit(e){
        e.preventDefault();
        await fetch("http://localhost:8080/accounts/"+Number(accNum),{
            method:"GET",
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            // accData.accType=String(data.type);
            // accData.accBalance=data.accountBalance;
            // accData.customerId=data.customer.customerId;
            setAccData(accData=>({
                ...accData,
                accBalance:data.accountBalance,
                accType:data.type,
                customerId:data.customer.customerId
            }))
            // setAccData(accData.accType=String(data.type),
            // accData.accBalance=data.accountBalance,
            // accData.customerId=data.customer.customerId);
            console.log(accData);
        })
    }

  return (
    <div className='manager-main'>
        <div className='balanceform'>
            <h3 >Balance Enquiry</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group row my-3">
                    <div className='col-sm-3' style={{textAlign:`right`}}>
                        <label>Account Number</label>
                    </div>
                    <div className='col-sm-9'>
                        <input className="form-control" placeholder="Enter account number"type="text" name="enquiry" onChange={e=>setAccNum(e.target.value)}/>
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
        </div>
        <div className='balanceform'>
            <div className="form-group row my-3">
                <div className='col-sm-3' style={{textAlign:`right`}}>
                    <label>Account Balance:</label>
                </div>
                <div className='col-sm-9'>
                    <label>{accData.accBalance}</label>
                </div>
            </div>
            <div className="form-group row my-3">
                <div className='col-sm-3' style={{textAlign:`right`}}>
                    <label>Account Type:</label>
                </div>
                <div className='col-sm-9'>
                    <label>{accData.accType}</label>
                </div>
            </div>
            <div className="form-group row my-3">
                <div className='col-sm-3' style={{textAlign:`right`}}>
                    <label>Customer ID:</label>
                </div>
                <div className='col-sm-9'>
                    <label>{accData.customerId}</label>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default BalanceEnquiry