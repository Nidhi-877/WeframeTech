import React from "react";

import { IoArrowBackCircle } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BiSolidCommentDetail } from "react-icons/bi";
const Header = () => {
  return (
    <div className="process-items   ">
      <div className=" mt-5 ml-7 mr-7     mb-14 md:h-32 ">
        <div className="flex justify-between headers ">
          <div>
            <div className="flex ml-5  mt-7 items-center  ">
              <span>
                <IoArrowBackCircle size={28} />
              </span>
              <h2 className="ml-2">School November Tasks</h2>
            </div>
            <span className="  text-xs  text-slate-400 ml-10 mt-1">
              Created by Instructor Day on November 31, 2022
            </span>
          </div>
          <div className="flex mt-5 ml-7  items-center">
            <div className="m-4">
              <h3>Centered Martial Arts</h3>
              <p className="text-xs  text-slate-400 mt-1 text-end ">
                Sunnyvale, Ca
              </p>
            </div>
            <span>
              <img
                className="w-14 h-12  rounded-lg mr-3"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </span>
            <span>
              <BsThreeDotsVertical />
            </span>
          </div>
        </div>
        <div className="flex justify-between headers  ">
          <div className="flex   mt-3 md:flex-wrap mx-3  ">
            <div className="flex items-center ">
              <div className="flex  ">
                <span className=" bg-slate-300  h-9 w-9   rounded-full  border-dotted b-border   "></span>
                <span className=" bg-slate-300  h-9 w-9 rounded-full  b-border relative right-2    "></span>
                <span className=" bg-slate-300  h-9 w-9 rounded-full b-border relative right-4   "></span>
                <span className=" bg-slate-300  h-9 w-9 rounded-full  b-border relative right-6   "></span>
                <span className="  flex bp-border  h-9 w-9 rounded-full  b-border  relative right-8   items-center justify-center text-lg   ">
                  5+
                </span>
              </div>
            </div>
            <div>
              <button className="btn-blue h-7 px-2 w-32 rounded-lg flex items-center">
                <MdPersonAddAlt1 className="mr-2" />
                Invite People
              </button>
            </div>
            <div>
              <button className="btn-black w-20 rounded-xl ml-3">
                Private
              </button>
            </div>
            <div>
              <button className="btn-blue h-7 w-14 rounded-xl ml-3  ">
                Edit
              </button>
            </div>
            <div>
              <button className="btn-black w-32 rounded-xl ml-3  flex items-center justify-center  ">
                <BiSolidCommentDetail />
                45 Comments
              </button>
            </div>
          </div>

          <div className="flex items-center   ">
            <p className=" flex items-center   ml-4 w-72">Total Progress 60%</p>

            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                class="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
