'use client'
import React, { useState, useEffect } from "react";
import { search,SearchType } from "../../../../../api/musicApi/index";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
// import { useParams, Link ,useSearchParams} from "react-router-dom";
type Song = {
  id: string;
  name: string;
  artists?: Array<{
    id: string;
    name: string;
    img1v1Url?: string;
  }>;
  album?: {
    id: string;
    name: string;
    artist?: {
      id: string;
      name: string;
      img1v1Url?: string;
    };
  };
};
type PlayList = {
  id:string,
  name:string,
  description:string,
  coverImgUrl:string,
  playCount:string,
  bookCount:string,
  subscribed:boolean,
  creator:{
    nickname:string,
    userId:string,
    avatarUrl:string
  }
}
function SearchList() {

const [searchList, SetSearchList] = useState<Array<Song>>([]);
const [playList,setPlayList] = useState<Array<PlayList>>([])
const searchParams = useSearchParams();
const keywords = searchParams.get('keywords') ?? '';
const type = searchParams.get('type') ?? '';
  const doSearch = async (keywords?: string,type?:string) => {
    const data = await search({
      keywords,type
    });
    if(type===SearchType.songlist){
      setPlayList(data.result.playlists)
    }else{
      SetSearchList(data.result.songs);
    }
    
    console.log(data.result);
    
  };
  useEffect(() => {
    // console.log(a)
    doSearch(keywords,type);
  },[keywords,type]);
  return (

    <div>
      <ul>
        {searchList.map((song) => (
          <Link key={song.id} href={`/learningList/dynamicRoute/songDetail/${song.id}`}>
            <li className="rounded-lg p-2 m-2 mx-5 border hover:border-cyan-300 hover:shadow-md ">
              <h4>{song.name}</h4>
              <div className="text-sm text-gray-600">
                <span className="text-blue-400">
                  {song.artists?.map((a) => a.name).join("/")}
                </span>
                <span>
                  {song.album ? "-" : ""}
                  {song.album?.name}
                </span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
