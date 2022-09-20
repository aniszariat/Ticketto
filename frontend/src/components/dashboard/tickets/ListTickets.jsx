import React, { useEffect, useState } from "react";
import TabTicketItem from "../tickets/TabTicketItem"
import {getTicket} from "../../../service/ticketAPI";

export default function ListTickets() {
  const [ticket, settickets] = useState([])
    useEffect(()=>{
      getTicket().then((res)=>{
       console.log(res?.data)
        settickets(res?.data)
      })
    },[])
  return (
    <section id="TabTickets" className="container my-5 ">
  {/*title start*/} 
  <div className="row mt-3">
    <div className="section-title">
      <h2>Tickets</h2>
      <p> Tickets List</p>
    </div>
  </div>
  {/*title end*/}
  {/*table Tickets start*/}
  <div className="row ">
    <div className="col-lg-12 mx-auto">
      <div className="card rounded shadow border-0">
        <div className="card-body p-5 bg-white rounded">
          <div className="table-responsive">
            <table id="example" style={{width: '100%'}} className="table table-bordered">
              <thead className="bg-light">
                <tr>
                  <th>Ticket Reference</th>
                  <th>Ticket Price</th>
                  <th>Ticket Quantity</th>
              
                  <th>Category</th>
              
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody className="text-center">
              {ticket?.map((items, keys) => (
            
            <TabTicketItem items={items} key={keys} keys={keys} />
              
            ))}</tbody>
            </table>
          </div>
          {/*Table Tickets end*/}
        </div></div></div></div></section>
  );
}

