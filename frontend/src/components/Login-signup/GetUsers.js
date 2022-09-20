import React, { useContext, useEffect } from "react";
import { userContext } from "../../store/user-context";

export default function GetUsers() {
  const usersCtx = useContext(userContext);
  useEffect(() => {
    usersCtx.getAllUsers();
  }, []);
  console.log("alluser : ", usersCtx.usersTab.length);
  return (
    <div>
      All users
      <ol>
        {usersCtx.usersTab.map((user) => {
          return <li key={user._id}> {user.FirstName} 
          <img
          style={{ height: 200 }}
          className="card-img-top img-fluid "
          src={user.ProfileImg}
          alt={user.ProfileImg}
        />
           </li>;
        })}
      </ol>
    </div>
  );
}
