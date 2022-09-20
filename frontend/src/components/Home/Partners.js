import React from "react";


function Partners() {

  return (
    <div className="container  mb-5 ">
      <div className="row m-0 py-4">
        {Array.from({length:6},(v,k)=>k+1).map((partner)=>{
          return(<div className="col-lg-2 col-md-4 col-6"
          key={partner}>
          <img
            src={require("../../assets/brand/" + partner + ".png")}
            className="img-fluid"
            alt='partner'
          />
        </div>)
        })}
    
        

      </div>
    </div>
  );
}

export default Partners;

// for (i = 0; i < this.state.events.length; i++) {
//   myArray[i] = (
//     <Event
//       time={this.state.events[i].time}
//       title={this.state.events[i].title}
//     />
//   );
// }
// return myArray;
