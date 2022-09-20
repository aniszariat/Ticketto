import React, { useEffect, useState } from "react";
import TabUsersItem from "./TabUsersItem";
import { getUsers } from "../../../service/userAPI";
import moment from "moment";
function UsersList() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    getUsers().then((res) => {
      console.log(res?.data);
      setusers(res?.data);
    });
  }, []);
  return (
    <section className="container my-5 ">
      {/*title start*/}
      <div className="row mt-3">
        <div className="section-title">
          <h2>Users</h2>
          <p> Users List</p>
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
                      <th>User ID</th>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>Birthdate</th>
                      <th>Email</th>
                      <th>Operations</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {users?.map((items, keys) => (
                      <TabUsersItem items={items} key={keys} keys={keys} />
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

export default UsersList;
