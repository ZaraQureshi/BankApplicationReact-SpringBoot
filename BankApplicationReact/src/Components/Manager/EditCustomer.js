import React,{useState} from 'react'

const EditCustomer = () => {
    const initialValues={
        fname:"",lname:"",
        address1:"",address2:"",
        city:"",state:"",
        zip:"",
        pass1:"",pass2:"",
        email:"",phone:""
    }
    const [formValues,setFormValues]=useState(initialValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        console.log(formErrors);
    }
    // useEffect(() => {
    //     console.log(formErrors);
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //       console.log(formValues);
    //     }
    //   }, [formErrors]);
    const validate=(values)=>{
        // if(values.fname === undefined) {return}
        const errors={};
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const blank=/^[^\s].*/;
        if(!values.fname){
            errors.fname="First name is required";
        }
        // }else if((/[0-9]/).test(values.fname)){
        //     errors.fname="First Name should not contain numbers"
        // }
        else if(!(/^[a-zA-Z ]*$/).test(values.fname)){
            errors.fname="First Name should not contain numbers, special characters."
        }else if(!blank.test(values.fname)){
            errors.fname="First character cannot be space."
        }
        if(!values.lname){
            errors.lname="Last name is required";
        }else if(!(/^[a-zA-Z ]*$/).test(values.lname)){
            errors.lname="Last Name should not contain numbers, special characters."
        }else if(!blank.test(values.lname)){
            errors.lname="First character cannot be space."
        }
        if(!values.email){
            errors.email="Email is required";
        }else if(!regex.test(values.email)){
            errors.email="Email is not valid";
        }
        if(!values.address1){
            errors.address1="Address cannot be empty."
        }else if(!blank.test(values.address1)){
            errors.address1="First character cannot be space."
        }
        if(!values.city){
            errors.city="City cannot be empty."
        }else if(!blank.test(values.city)){
            errors.city="First character cannot be space."
        }else if(!(/^[a-zA-Z ]*$/).test(values.city)){
            errors.city="City should not contain numbers, special characters."
        }
        
        if(!values.state){
            errors.state="State cannot be empty."
        }else if(!(/^[a-zA-Z ]*$/).test(values.state)){
            errors.state="State should not contain numbers, special characters."
        }else if(!blank.test(values.state)){
            errors.state="First character cannot be space."
        }
        if(!values.phone){
            errors.phone="Phone number cannot be empty."
        }else if(!(/^[0-9]+$/).test(values.phone)){
            errors.phone="Phone number should only contain numbers."
        }else if(!blank.test(values.phone)){
            errors.phone="First character cannot be space."
        }
        if(!values.zip){
            errors.zip="Pin cannot be empty."
        }else if(!(/^[0-9]+$/).test(values.zip)){
            errors.zip="Pin should not contain numbers, special characters."
        }else if(values.zip.length!==6){
            errors.zip="Pin should be 6 digits."
        }else if(!blank.test(values.zip)){
            errors.zip="First character cannot be space."
        }
        return errors;
        
    }

    const resetValue=(e)=>{
        e.preventDefault();
        setFormValues({
            fname:"",lname:"",
        address1:"",address2:"",
        city:"",state:"",
        zip:"",
        pass1:"",pass2:"",
        email:"",phone:""
        })
    }
    // const [fname, setFname] = useState("")
    // const [lname, setLname] = useState("")
    // const [address1, setAddress1] = useState("")
    // const [address2, setAddress2] = useState("")
    // const [city, setCity] = useState("")
    // const [state, setState] = useState("")
    // const [zip, setZip] = useState("")
    // const [country, setCountry] = useState("")
    // const [pass1, setpass1] = useState("")
    // const [pass2, setpass2] = useState("")
    // const [email, setemail] = useState("")
    // const [phone, setPhone] = useState("")

    // setName=(e)=>{e.target.value;}
    // setpass1=(e)=>{e.target.value;}
    // setpass2=(e)=>{e.target.value;}
    // setemail=(e)=>{e.target.value;}
    // let handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log(fname,lname,phone,email)

    // }


  return (
    <div className='manager-main'>
        <div className='editform'>
            <h3 >Edit customer</h3>
            <hr/>
            <div className='container'style={{width:`40em`}}>
                <form onSubmit={handleSubmit}>
                    <h5 className='col-sm-2'>Name <span>*</span></h5>
                    <div className="form-group row mb-3">
                        
                        <div className='col-sm-6'>
                            <input className="form-control" placeholder="First Name"type="text" name="fname" value={formValues.fname} onChange={handleChange}/>
                            <p>{formErrors.fname}</p>
                        </div>
                        <div className='col-sm-6'>
                            <input className="form-control" placeholder="Last Name"type="text" name="lname" value={formValues.lname} onChange={handleChange}/>
                            <p>{formErrors.lname}</p>
                        </div>
                    </div>
                    <h5 className='col-sm-2'>Address <span>*</span></h5>
                    <div className="form-group row mb-3">
                        {/* <label className='col-sm-2'>Email </label> */}
                        <div className='col-sm-12'>
                            <input className="form-control" placeholder="Street Address"type="text" name="address1" value={formValues.address1} onChange={handleChange}/>
                            <p>{formErrors.address1}</p>
                        </div>
                    </div>
                    {/* <div className="form-group row mb-3">
                        <div className='col-sm-12'>
                            <input className="form-control" placeholder="Street Address Line 2"type="text" name="address2" value={formValues.address2} onChange={handleChange}/>
                            
                        </div>
                    </div> */}
                    <div className="form-group row mb-3">
                        
                        <div className='col-sm-6'>
                            <input className="form-control" placeholder="City"type="text" name="city" value={formValues.city} onChange={handleChange}/>
                            <p>{formErrors.city}</p>
                        </div>
                        <div className='col-sm-6'>
                            <input className="form-control" placeholder="Zip Code"type="text" name="zip" value={formValues.zip} onChange={handleChange}/>
                            <p>{formErrors.zip}</p>
                        </div>
                        
                    </div>
                    <div className="form-group row mb-3">
                        
                        <div className='col-sm-12'>
                            <input className="form-control" placeholder="State"type="text" name="state" value={formValues.state} onChange={handleChange}/>
                            <p>{formErrors.state}</p>
                        </div>
                        {/* <div className='col-sm-6'>
                            <input className="form-control" placeholder="Country"type="text" id="country" value={formValues.country} onChange={(e)=>setCountry(e.target.value)}/>
                        </div> */}
                    </div>
                    
                    <h5 className='col-sm-2'>Contact <span>*</span></h5>
                    <div className="form-group row mb-3">
                        
                        <div className='col-sm-12'>
                            <input className="form-control" placeholder="Email"type="text" name="email" value={formValues.email} onChange={handleChange}/>
                            <p>{formErrors.email}</p>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        
                        <div className='col-sm-12'>
                            <input className="form-control" placeholder="Phone Number"type="text" name="phone" value={formValues.phone} onChange={handleChange}/>
                            <p>{formErrors.phone}</p>
                        </div>
                    </div>
                    {/* <h5 className='col-sm-2'>Password</h5>
                    <div className="form-group row mb-3"> */}
                        {/* <label className='col-sm-2'>Password </label> */}
                        {/* <div className='col-sm-12'>
                            <input className="form-control" placeholder="Password"type="password"id="pass1" value={formValues.pass1} onChange={(e)=>setpass1(e.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group row mb-3"> */}
                        {/* <label className='col-sm-2'>Confirm Password</label> */}
                        {/* <div className='col-sm-12'>
                            <input className="form-control" placeholder="Confirm Password"type="password"id="pass2" value={formValues.pass2} onChange={(e)=>setpass2(e.target.value)}/>
                        </div>
                    </div> */}
                    {/* <div className="form-group row mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" for="flexCheckDefault">
                                I agree to terms and conditions.
                            </label>
                        </div>
                    </div> */}
                    <div style={{textAlign:`center`}}>
                        {/* <div className="col-sm-6 " > */}
                            <button id="submit-btn"className="btn btn-primary form-control"type="submit">
                                Submit
                            </button>
                        {/* </div>
                        <div className="col-sm-6 " > */}
                            <button id="reset-btn"onClick={resetValue} style={{background:`#FF3864`,border:`none`/*,boxShadow:`0px 0px 5px 0px rgba(255,56,100,1)`*/}}className="btn btn-primary form-control"type="submit">
                                {/* <Link to='/login' style={{textDecoration:`none`,color:`white`}}>Login</Link> */}Reset
                            </button>
                        {/* </div> */}
                    </div>
                    
                </form>
            </div>
            {/* <p>OR</p>
            <div className='container'>
            <div className="form-group row" >
                <div className="col-sm-12 " > */}
                    {/* <button style={{background:`#FF3864`,border:`none`/*,boxShadow:`0px 0px 5px 0px rgba(255,56,100,1)`*/}
                    {/* className="btn btn-primary form-control"type="submit" > */} 
                        {/* <Link to='/login' style={{textDecoration:`none`,color:`white`}}>Login</Link> */}
                    {/* </button> */}
                {/* </div> */}
            {/* </div> */}
            {/* </div> */}
        </div>
       
    </div>
  )
  
}

export default EditCustomer