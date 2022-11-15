import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
// const navigate = useNavigate();
const Login = () => {
  const navigate = useNavigate();
  const [pass, setpass] = useState("");

  const [custid, setcustid] = useState("");
//   const [authenticated, setauthenticated] = useState(
//     localStorage.getItem(localStorage.getItem("authenticated") || false)
//   );
  const [loginData,setLoginData]=useState({name:'',id:''});

  // let history=useHistory();
  // setName=(e)=>{e.target.value;}
  // setpass1=(e)=>{e.target.value;}
  // setpass2=(e)=>{e.target.value;}
  // setemail=(e)=>{e.target.value;}
  // const users = [{ custid: "user", password: "user@#123" }];
  // useEffect(
  //     fetch("http:localhost:8080/customer/login",{
  //         method:"GET",

  //     }).then((res)=>console.log(res))
  // ,[]);

  const login = async () => {
    await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Number(custid),
        password: pass,
      }),
    })
    .then(function(res) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        if(res.status == 401) {
            console.log("401");
            document.getElementById("error-alert").style.visibility="visible";
        } else {
            // navigate("/");
            return res.json();
            // console.log(response.text);
            // localStorage.setItem('authenticated',true);
            // localStorage.setItem('loginData',)
            
        }
        
      }).then(function(data) {
        localStorage.setItem('loginData',JSON.stringify(data));
        console.log(loginData.id);
        console.log(data.role);
        if(data.role === "Customer") {
            console.log("HERE in lemon");
            navigate("/customer");
            return;
        }
        
        navigate("/"); // { "userId": 1, "id": 1, "title": "...", "body": "..." }
       
      });
   
    // console.log(response);
    // const body = await response.json();
    
    
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    // const acc=users.find((user)=>user.custid===custid);
    // if(acc&&acc.password===pass){
    // setauthenticated(true);
    await login();
  };

  return (
    <div className="loginform mx-auto">
      <h1>Login</h1>
      <br />
      <div className="container">
        <div className="alert alert-danger" id="error-alert"role="alert" style={{visibility:`hidden`}}>
        Invalid Credentials
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group row mb-3">
            {/* <label className='col-sm-2'>Email </label> */}
            <div className="col-sm-12">
              <input
                className="form-control"
                placeholder="Customer ID"
                type="text"
                id="email"
                value={custid}
                onChange={(e) => setcustid(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row mb-3">
            {/* <label className='col-sm-2'>Password </label> */}
            <div className="col-sm-12">
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                id="pass1"
                value={pass}
                onChange={(e) => setpass(e.target.value)}
              />
            </div>
          </div>
          <p style={{ textAlign: `right`, color: `gray`, fontSize: `small` }}>
            Forgot password?
          </p>
          <div className="form-group row mb-3 ">
            <div className="col-sm-12 ">
              <button
                style={{
                  background: `#3943B7`,
                  border: `none` /*,boxShadow: `0px 0px 5px 0px rgba(57,67,183,1)`*/,
                }}
                className="btn btn-primary form-control"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <p>OR</p>
            <div className='container'>
            <div className="form-group row" >
                <div className="col-sm-12 " >
                    <button style={{background:`#FF3864`,border:`none`/*,boxShadow:`0px 0px 5px 0px rgba(255,56,100,1)`*/}
      {/* className="btn btn-primary form-control"type="submit" > */}
      {/* <Link to='/login' style={{textDecoration:`none`,color:`white`}}>Login</Link> */}
      {/* </button> */}
      {/* </div> */}
      {/* </div>  */}
      {/* </div> */}
    </div>
  );
};

export default Login;
