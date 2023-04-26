import React, { Component } from "react";
import { useState, useEffect, useContext } from "react";
// import { userContext,Consumer } from "../../../page";

function UserSetting() {
  // const contextValue = useContext(userContext);
  const [user, setUser] = useState("");

  return (
    <div>
      {/* <Consumer>
            {({name,comand})=><div>{name}</div>}
        </Consumer> */}
      <div className="flex items-center">
        用户名：
        <div className="border h-8 rounded-sm flex items-center px-1">
          <input
            type="text"
            placeholder="输入用户名"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <span className="ml-2 cursor-pointer bg-gradient-to-t from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md">
          更改
        </span>
      </div>
    </div>
  );
}

export default UserSetting;
