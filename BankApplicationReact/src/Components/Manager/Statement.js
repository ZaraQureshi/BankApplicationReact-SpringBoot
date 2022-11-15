import React,{useState} from 'react'

const Statement = () => {
    const [accNum, setAccNum] = useState(0);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await fetch("http://localhost:8080/transactions/statement/"+Number(accNum),{
            method:"GET"
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
        })
    }
  return (
    <div className='manager-main'>
        <div className='statement' >
            <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Mini Statement</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Customized Statement</button>
            </li>
            
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className=''>
                        <h3 style={{marginTop:`1em`,textAlign:`left`}}>Mini Statement</h3>
                        <hr/>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group row my-3">
                                <div className='col-sm-3'>
                                    <label>Account Number</label>
                                </div>
                                <div className='col-sm-9'>
                                    <input className="form-control" placeholder="First Name"type="text" onChange={e=>setAccNum(e.target.value)}/>
                                    {/* <p>{formErrors.fname}</p> */}
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <div className="col-sm-3" >
                                    
                                </div>
                                <div className='col-sm-9' style={{textAlign:`left`}}>
                                <div className="row mb-3">
                                        <div className='col-sm-6'>
                                            <button id="submit-btn" className="btn btn-primary form-control"type="submit">
                                                Submit
                                            </button>
                                        </div>
                                        <div className='col-sm-6'>
                                            <button id="reset-btn"className="btn btn-primary form-control"type="submit">
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className=''>
                        <h3 style={{marginTop:`1em`,textAlign:`left`}}>Customized Statement</h3>
                        <hr/>
                        <div className="form-group row my-3">
                            <div className='col-sm-3'>
                                <label>Account Number</label>
                            </div>
                            <div className='col-sm-9'>
                                <input className="form-control" placeholder="First Name"type="text" name="fname" />
                                {/* <p>{formErrors.fname}</p> */}
                            </div>
                        </div>
                        <div className="form-group row my-3">
                            <div className='col-sm-3'>
                                <label>From Date</label>
                            </div>
                            <div className='col-sm-9'>
                                <input className="form-control" placeholder="First Name"type="date" name="fname" />
                                {/* <p>{formErrors.fname}</p> */}
                            </div>
                        </div>
                        <div className="form-group row my-3">
                            <div className='col-sm-3'>
                                <label>To Date</label>
                            </div>
                            <div className='col-sm-9'>
                                <input className="form-control" placeholder="First Name"type="date" name="fname" />
                                {/* <p>{formErrors.fname}</p> */}
                            </div>
                        </div>
                        <div className="form-group row my-3">
                            <div className='col-sm-3'>
                                <label>Amount Lower Limit</label>
                            </div>
                            <div className='col-sm-9'>
                                <input className="form-control" placeholder="First Name"type="text" name="fname" />
                                {/* <p>{formErrors.fname}</p> */}
                            </div>
                        </div>
                        <div className="form-group row my-3">
                            <div className='col-sm-3'>
                                <label>Number of Transaction</label>
                            </div>
                            <div className='col-sm-9'>
                                <input className="form-control" placeholder="First Name"type="date" name="fname" />
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
            
            </div>
        </div>
    </div>
  )
}

export default Statement;