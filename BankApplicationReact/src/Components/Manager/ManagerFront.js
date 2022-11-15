import React from 'react'

const ManagerFront = () => {
    const items=JSON.parse(localStorage.getItem('loginData'));
    // console.log(items.charAt(2));
    console.log(items.name);
  return (
    <div>
        <div className='manager-main-front' >
            <div className="manager-front-head" >
                <div className='d-flex'>
                    {/* <span> */}
                        <img src="./img5.jpg"/>
                        {/* <i className="fa-solid fa-user"></i> */}
                    {/* </span> */}
                    <div className="manager-front-head-content"style={{marginTop:`1.5em`}}>
                        <h5>{items.name}</h5>
                        <p>ID: 12345678</p>
                    </div>
                </div>
                <div style={{marginTop:`1.5em`}}>
                    <h5>Total Customers:</h5>
                    <p>30</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default ManagerFront