"use client"
import React, { useEffect } from "react";
// import { useParams,useMatch } from "react-router-dom";
import { data } from "../../data";
import Image from "next/image";
// import { match } from "assert";
// interface Props {
//   params: any;
// }
function NavItem({ params }: { params: { slug: string } }) {
  console.log(params.slug);
    const id = params.slug[0];
  //   const match = useMatch('/navList/:id')
  // match =  {
  //     "params": {
  //         "id": "8"
  //     },
  //     "pathname": "/navList/8",
  //     "pathnameBase": "/navList/8",
  //     "pattern": {
  //         "path": "/navList/:id",
  //         "caseSensitive": false,
  //         "end": true
  //     }
  // }
    const item=data.result.result.list.find(
      (item) => item.id.toString() === id
    );
  useEffect(() => {
    console.log(id ,item, "route");
  });
  return (
    <div>
      <h1>{item?.name}</h1>
      <p dangerouslySetInnerHTML={{ __html: item?.content ?? '' }}></p>
      <ul className="flex items-center">
        {item?.tag.split(",").map((t) => (
          <li
            className="h-5 px-1 bg-blue-200 text-sm text-blue-700 border border-blue-500"
            key={t}
          >
            {t}
          </li>
        ))}
      </ul>
      <div className="flex">
        <img src={item?.pic} alt="" />
        {/* <Image alt={item?.name ?? "1"} src={url(item?.pic)} /> */}
        <div>
          <ul className="flex">
            <li className="h-5 px-1 bg-blue-200 text-sm text-blue-700 border border-blue-500">
              {item?.peoplenum}
            </li>
            <li className="h-5 px-1 bg-blue-200 text-sm text-blue-700 border border-blue-500">
              {item?.cookingtime}
            </li>
          </ul>
          <ul>
            {item?.material.map((m) => (
              <li key={m.mname}>
                {m.mname}, &nbsp; {m.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        {item?.process.map((p) => (
          <div key={p.pcontent}>
            <h4 dangerouslySetInnerHTML={{ __html: p.pcontent ?? '' }}></h4>
            <img src={p?.pic} alt="" />
            {/* <Image alt={p?.pcontent ?? "1"} src={p?.pic ?? ""} /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavItem;
