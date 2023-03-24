"use client";
import { AiFillWechat, AiOutlineWeibo, AiOutlineQq } from "react-icons/ai";
import { useState } from "react";
import dev from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import Image from "next/image";

import { CardInfo, ServiceCard } from "./ServiceCard";
import SelectedCard from "./components/SelectedCard";
export default function HomePage() {
  const [user, setUser] = useState("sitar");
  const changeUser = { name: user, comand: (name: string) => setUser(name) };
  const cardsInfo: Array<CardInfo> = [
    {
      id: "01",
      icon: design,
      title: "Beautiful Designs",
      desc: "Creating elegant designs suited for your needs following core design theory.",
      tools: ["Photoshop", "Illustrator", "Figma", "Indesign"],
    },
    {
      id: "02",
      icon: code,
      title: "Pretty Code",
      desc: "Creating elegant designs suited for your needs following core design theory.",
      tools: ["VsCode", "IDE", "Indesign"],
    },
    {
      id: "03",
      icon: consulting,
      title: "Useful blog",
      desc: "Creating elegant designs suited for your needs following core design theory.",
      tools: ["Leetcode", "Illustrator", "Figma", "Indesign"],
    },
  ];
  const websImage = [web1, web2, web3, web4, web5, web6];
  const webList = websImage.map((web, index) => (
    <div className="basis-1/3 flex-1" key={index}>
      <Image
        src={web}
        alt="web"
        className="rounded-lg object-cover w-full h-full"
      />
    </div>
  ));
  return (
    <>
      <section className="min-h-screen">
          <SelectedCard />
        <div className="text-center p-10 py-10 ">
          <h2 className="text-5xl text-teal-600 dark:text-teal-400 py-2 font-medium md:text-6xl">
            Dimitri Marco
          </h2>
          <h3 className="dark:text-white text-2xl py-2 md:text-3xl">
            Developer and designer.
          </h3>
          <p className="mx-auto text-md  max-w-xl leading-8 py-5 text-gray-800 dark:text-gray-200 md:text-xl">
            Freelancer providing services for programming and design content
            needs. Join me down below and let's get cracking!
          </p>
        </div>
        <div className="flex justify-center text-5xl text-gray-600 gap-16 dark:text-gray-400">
          <AiFillWechat className="cursor-pointer " />
          <AiOutlineQq className="cursor-pointer " />
          <AiOutlineWeibo className="cursor-pointer " />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image src={dev} alt="dev" fill className="object-cover" />
        </div>
      </section>
      <section>
        <div>
          <h3 className="py-1 text-3xl dark:text-white">Services I offer</h3>
          <p className="text-md leading-8 py-2 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and collaborated with talanted people to create digital products for
            both business and consumer use.
          </p>
          <p className="text-md leading-8 py-2 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>
        <ServiceCard cardsInfo={cardsInfo} />
      </section>
      <section>
        <div>
          <h3 className="dark:text-white py-1 text-3xl">Portofolio</h3>
          <p className="text-md leading-8 py-2 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and collaborated with talanted people to create digital products for
            both business and consumer use.
          </p>
          <p className="text-md leading-8 py-2 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          {webList}
        </div>
      </section>
    </>
  );
}
