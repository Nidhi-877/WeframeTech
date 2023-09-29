import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { PiChatsCircleFill } from "react-icons/pi";
import { BsFillCalendarFill } from "react-icons/bs";
import { GiShop } from "react-icons/gi";
import {RxBorderDotted} from"react-icons/rx"
import {BsArrowRight} from"react-icons/bs"
import {BiReceipt} from "react-icons/bi"

import { MdSettings } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className=" relative sidebar  max-lg:hidden
      ">
      <div>
        <div className="flex items-center justify-around   header sideshadow">
          <h1 className="text-2xl">weframetch</h1>
          <p >
            {" "}
            <AiOutlineMenu  size='20' className="color-secondary" />
          </p>
        </div>
        <div className=" menus ">
          <h1 >MAIN MENU</h1>

          <p className="flex h-12  items-center ">
            <AiOutlineDashboard  className="inactive-contact"/>
           <ul className="inactive-contact"> Dashbord</ul>
          </p>
          <p className="flex h-12 items-center">
            {" "}
            <MdEmail  className="inactive-contact"/>
         <ul className="inactive-contact">   Email </ul>
         <span className="flex absolute right-12 items-center">
         <ul className="badges mr-2  max-xl:hidden">17</ul>{" "}
         <ul className="email-vector  max-lg:hidden">{">"}</ul>
         </span>
          </p>
          <p className="flex h-12 items-center">
            {" "}
            <PiChatsCircleFill />
           <ul> Chat</ul>
          </p>
          <p className="flex h-12 items-center active  max-lg:hidden">
            {" "}
            <RiContactsBook2Line />
            <ul >Kanban</ul>
            <span className="  absolute right-14">{'>'}</span>
          </p>
          <p className="flex h-12 items-center">
            {" "}
            <RiContactsBook2Line />
            <ul>Contact</ul>
          
            <>
              <span className=" text-center  absolute right-14 badge-new  max-xl:hidden">
                New
              </span>
            </>
          </p>
          <p className="flex h-12 items-center">
            {" "}
            <BsFillCalendarFill />
            <ul>Calender</ul> 
          </p>
          <p className="flex h-12 items-center">
            {" "}
            <MdEmail  className="inactive-contact max-lg:hidden"/>
            <ul>  Courses</ul>
            <span className="  absolute right-14">{'>'}</span>
          </p>
          <p className="flex h-12 items-center">
            {" "}
            <GiShop  className="inactive-contact"/>
            <ul > Shop</ul>
           
          </p>
          <p className="flex h-12 items-center max-lg:hidden"><BiReceipt/> <ul>Invoices</ul>
          <span className="  absolute right-14">{'>'}</span>
          
          </p>
          <p className="flex h-12 items-center">
            {" "}
            <MdSettings />
            <ul>Settings</ul>
           
          </p>
        </div>
        <div className="mt-20  menus">

        <div className="add-side overflow-hidden relative">
          <div className="ml-5">
          <RxBorderDotted  size={20}  />
  <RxBorderDotted size={20}  className="dots" />
  <RxBorderDotted  size={20}  className="dots"/>
  <RxBorderDotted size={20}  className="dots"/>
  <RxBorderDotted size={20}  className="dots"/>
          </div>

  
  <div className="text-start ml-5 z-10">
    <h3>Increse Your </h3>
    <h3>Work With Kanban</h3>
  </div>
  <BsArrowRight size={20}  className="text-start ml-5" />
  <div className="gradient w-32 h-32 rou flex justify-items-end absolute  z-0 "></div>
</div>
         
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
