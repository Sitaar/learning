import React, { useEffect } from "react";
import { data } from "./components/data";
import { Link } from "react-router-dom";

function RouterPage() {
  const routeList = data.result.result.list;
  useEffect(() => {
    console.log(routeList);
  });

  return (
    <ul>
      {routeList.map((route) => (
        <Link  key={route.id}  to={`/navList/${route.id}`}>
          <li>{route.name}</li>
        </Link>
      ))}
    </ul>
  );
}

export default RouterPage;
