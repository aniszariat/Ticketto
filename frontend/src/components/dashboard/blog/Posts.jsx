import React, { useEffect, useState } from "react";
import TabNewsItem from "./TabNewsItem";
import { getNews } from "../../../service/newsAPI";


export default function Posts() {
  const [news, setnews] = useState([])
    useEffect(()=>{
      getNews().then((res)=>{
       console.log(res?.data)
        setnews(res?.data)
      })
    },[])
  return (
  
    <section id="TabTickets" className="container my-5 ">
      {/*title start*/}
      <div className="row mt-3">
        <div className="section-title">
          <h2>Blog Posts</h2>
          <p> Posts List</p>
        </div>
      </div>
      {/*title end*/}
      {/*table Tickets start*/}
      <div className="row mt-3">
        <div className="col-lg-12 mx-auto">
          <div className="card rounded shadow border-0">
            <div className="card-body p-5 bg-white rounded">
              <div className="table-responsive">
                <table
                  id="example"
                  style={{ width: "100%" }}
                  className="table table-bordered"
                >
                  <thead className="bg-light text-center">
                    <tr>
                      <th>Creator ID</th>
                      <th>Title Post</th>
                      <th>Dateime</th>
                      <th>Object Post</th>
                   
                      <th>Operations</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                  {news?.map((items, keys) => (
            
            <TabNewsItem items={items} key={keys} keys={keys} />
         
        ))}
               
                  </tbody>
                </table>
              </div>
              {/*Table Tickets end*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
