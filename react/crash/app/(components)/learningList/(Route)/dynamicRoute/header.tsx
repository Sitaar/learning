"use client";
import React, { useState, useEffect, useRef } from "react";
import { defaultSearch, SearchType } from "../../../../api/musicApi/index";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";
// import { NavLink, Outlet,useNavigate } from "react-router-dom";

let interval: any = null;

function Header() {
  const router = useRouter();
  // const navigate = useNavigate()
  //搜索默认值获取与更新
  const [defaultSearchValue, SetDefaultSearchValue] = useState("");
  const updateDefaultValue = async () => {
    const data = await defaultSearch();
    if (data) SetDefaultSearchValue(data);
  };
  if (interval === null) interval = setInterval(updateDefaultValue, 10000);

  useEffect(() => {
    updateDefaultValue();
    return () => {
      clearInterval(interval);
    };
  }, []);

  const [searchValue, SetSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("blur", () => {
        clearInterval(interval);
      });
    }
  }, []);
  const [searchType, setSearchType] = useState([
    {
      code: SearchType.zhonghe,
      name: "综合",
      selected: true,
    },
    {
      code: SearchType.signalsong,
      name: "单曲",
      selected: false,
    },
    {
      code: SearchType.songlist,
      name: "歌单",
      selected: false,
    },
    {
      code: SearchType.video,
      name: "视频",
      selected: false,
    },
    {
      code: SearchType.singer,
      name: "歌手",
      selected: false,
    },
    {
      code: SearchType.diantai,
      name: "电台",
      selected: false,
    },
    {
      code: SearchType.zhuanji,
      name: "专辑",
      selected: false,
    },
    {
      code: SearchType.voice,
      name: "声音",
      selected: false,
    },
    {
      code: SearchType.MV,
      name: "MV",
      selected: false,
    },
    {
      code: SearchType.user,
      name: "用户",
      selected: false,
    },
  ]);
  return (
    <div className="px-10">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-notosans text-lg font-semibold  pr-5">
            SITARMUSIC
          </h1>
          <div className="relative">
            <AiOutlineSearch className="absolute text-lg left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10 w-full"
              ref={inputRef}
              value={searchValue}
              onChange={(e) => {
                SetSearchValue(e.target.value);
              }}
              type="text"
              placeholder={defaultSearchValue ?? "请输入搜索内容"}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const newsearchType = searchType.map((item) => {
                    if (item.code === SearchType.zhonghe) {
                      item.selected = true;
                    } else {
                      item.selected = false;
                    }
                    return item;
                  });
                  setSearchType(newsearchType);
                  router.push(
                    `/learningList/dynamicRoute/searchList?keywords=${
                      searchValue || defaultSearchValue
                    }`
                  );
                }
              }}
            />
          </div>
        </div>
        <ul className="flex w-full overflow-auto gap-4 pt-4 pb-2 border-b">
          {searchType.map((type) => (
            <li
              key={type.code}
              className="relative cursor-pointer"
              onClick={() => {
                const newsearchType = searchType.map((item) => {
                  if (item.code === type.code) {
                    item.selected = true;
                  } else {
                    item.selected = false;
                  }
                  return item;
                });
                setSearchType(newsearchType);
                if (type.code === SearchType.zhonghe) {
                  router.push(
                    `/learningList/dynamicRoute/searchList?keywords=${
                      searchValue || defaultSearchValue
                    }`
                  );
                } else {
                  router.push(
                    `/learningList/dynamicRoute/searchList?keywords=${
                      searchValue || defaultSearchValue
                    }&type=${type.code}`
                  );
                }
              }}
            >
              <div
                className={`${
                  type.selected ? "text-black" : "text-gray-500"
                } w-8 text-center`}
              >
                {type.name}
              </div>
              <div
                className={
                  type.selected
                    ? `rounded-sm w-4 h-1 bg-teal-300 mx-auto mt-1`
                    : ""
                }
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
