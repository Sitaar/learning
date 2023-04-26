"use client"
import { useState } from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
function Nav() {
  const [user, setUser] = useState("sitar");
  return (
    <nav className="pt-10 pb-5 flex justify-between">
      <Link href="/">
        <h1 className="font-burtons text-xl dark:text-white">{user}learning</h1>
      </Link>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-lg dark:text-white" />
        </li>
        <Link href="/learningList">
          <li className="ml-8 cursor-pointer bg-gradient-to-t from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md">
            Resume
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
