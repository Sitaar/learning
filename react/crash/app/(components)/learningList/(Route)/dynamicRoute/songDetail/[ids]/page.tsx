'use client'
import React, { useState, useEffect } from "react";
import { songDetail } from "../../../../../../api/musicApi/index";;
import {IoIosArrowBack} from "react-icons/io"
// import { useParams,useLocation } from "react-router-dom";
import {useRouter} from "next/navigation"

function SongItem({params:{ids}}:{params:{ids:string}}) {
    // const {ids}  = useParams()
    // const {state:{ids}} = useLocation()
    const router = useRouter()
    const getSongDetail = async (ids:string)=>{
       const data = await songDetail(ids)
       console.log(data)
    }
    useEffect(()=>{
        console.log(ids)
        if(ids)getSongDetail(ids)
        
    },[ids])
    return (
        <div>
            <div className="flex items-center py-2" onClick={()=>router.back()}>
                <IoIosArrowBack/>
                <span className="mx-2">返回列表</span>
            </div>
            {ids}
        </div>
    );
}

export default SongItem;