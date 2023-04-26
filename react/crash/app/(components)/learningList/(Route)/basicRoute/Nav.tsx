"use client"
import React, { useEffect } from "react";
import { data } from "./data";
import Link from "next/link";
function Nav() {
  const routeList = data.result.result.list;
  useEffect(() => {
    console.log(routeList);
  });
  return (
    <ul className="flex flex-wrap bg-slate-300 p-2">
      {routeList.map((route) => (
        <Link key={route.id} href={`learningList/basicRoute/routeItem/${route.id}`}>
          <li className="px-2">{route.name}</li>
        </Link>
      ))}
    </ul>
  );
}

export default Nav;
