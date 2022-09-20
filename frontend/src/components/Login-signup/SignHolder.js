import React from 'react'

function SignHolder(props) {
  return (
    <div className="container-fluid  shadow pb-5 pt-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.894)' }}>
    <div className="row">
      <div className="col mb-5 mb-5  mt-5">      
        <div className="container card shadow pt-5 pe-5 ps-5 pb-5 " style={{fontFamily: '"Montserrat"'}}>
          <div className="row justify-content-center align-items-center justify-items-center align-middle">
            <div className="col-md-6 mt-3">         
            <img src="assets/sign/sign.webp" className="img-fluid rounded-1  w-100 " alt="authentication component"  style={{height:'630px'}}/>
            </div>
            
            <div className="col-md-8 bg-white rounded-3 w-50 pb-5 ">
            <h1 className="mb-3 mt-5 ">{props.word1} <span style={{color: 'rgb(243, 101, 50)'}}>{props.word2}</span> </h1>
            <h5 className="text-muted font-weight-normal mb-4 lead"> Lorem ipsum dolor sit ! </h5>


            <div className="forms-sample  mb-3"> 
            {props.children}
            </div>
            </div>         
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default SignHolder