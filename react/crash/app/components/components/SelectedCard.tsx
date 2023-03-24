import React from "react";
import { createRef, useRef, useState, useEffect } from "react";
import UserSetting from "./UserSetting";
import CountTest, { ICountTestHandler } from "../CountTest";
import TestInput from "./TestInput";
import TestInputBtn from "./TestInputBtn";
import "./style.css";

const SelectedCard = () => {
  const [activedMenu, setActivedMenu] = useState("ChangeUser");
  const activedLine = (
    <span className="absolute bottom-0 w-full h-0.5 bg-teal-600"></span>
  );
  const menu = ["ChangeUser", "CountTest"];
  const countTestRef = useRef<ICountTestHandler>(null!);
  const TestInputRef = useRef<any>(null!);
  return (
    <div className="shadow-lg rounded-xl dark:bg-white min-h-40">
      <nav className="flex items-center h-10 rounded-t-lg bg-gradient-to-b from-teal-400 shadow-lg px-3">
        {menu.map((item) => (
          <div
            key={item}
            className={`cursor-pointer h-full text-lg font-medium  rounded-tl-lg relative flex flex-col justify-center ${
              activedMenu === item ? "text-teal-600" : "text-gray-500"
            }`}
            onClick={() => setActivedMenu(item)}
          >
            <div className="px-5 ">{item}</div>
            {activedMenu === item ? activedLine : <></>}
          </div>
        ))}
      </nav>
      <section className="px-5 py-3">
        {activedMenu === "ChangeUser" ? (
          <>
            <UserSetting />
            <TestInput ref={TestInputRef} />
          </>
        ) : (
          <CountTest ref={countTestRef} />
        )}
      </section>
      <div>
        {activedMenu === "ChangeUser" ? (
          <div
            className="text-white leading-8 h-8 bg-gradient-to-tr from-blue-500 to-teal-500 rounded-lg mx-2 cursor-pointer text-center"
            onClick={() => TestInputRef.current.inputFocus()}
          >
            聚焦input(父组件)
          </div>
        ) : (
          <div
            className="text-white leading-8 h-8 bg-gradient-to-tr from-blue-500 to-teal-500 rounded-lg mx-2 cursor-pointer text-center"
            onClick={() => countTestRef.current.addCount()}
          >
            + 增加(父组件)
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedCard;
