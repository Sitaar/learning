"use client"
import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <nav className="bg-teal-100 w-1/5 p-2">
      <ul>
        <Link href={"/learningList/basicReact"}>
          <li>react基础知识</li>
        </Link>

        <li>
          <div>路由</div>
          <ul className="pl-2">
            <Link href={"/learningList/basicRoute"}>
              <li>基础路由</li>
            </Link>
            <Link href={"/learningList/dynamicRoute"}>
              <li>动态路由</li>
            </Link>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
