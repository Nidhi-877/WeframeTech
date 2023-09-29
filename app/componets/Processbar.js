import React from "react";
import {BiDotsHorizontalRounded} from "react-icons/bi"
import {GoClock} from "react-icons/go"


const Processbar = () => {
  return (
    <div className=" process-items ">
      <div className="flex   flex-wrap " >
        <div className="  ml-7  mt-2 ">
          <div className="flex  items-center justify-between flex-wrap p-3 todo">
            <h2 className="">To-Do List (24)</h2>
            <button className="w-7 h-7 bg-blue-600 flex rounded-lg  text-2xl items-center justify-center ">+</button>
          </div>
          <div className="card color-primary rounded-xl px-3.5 mt-4 card-hight">
            <div className=" flex justify-between p-1">
              <li className="     text-yellow-400  ">Important</li>
              <BiDotsHorizontalRounded size={20} className="mr-3" />
            </div>
            <p >Create sign up sheet for holiday student/parent conferences.
</p>
            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mt-3 ">
              <div
                class="bg-yellow-200  h-2 rounded-full "
                style={{ width: "30%" }}
              ></div>
            </div>
            <div className="flex items-center    py-2.5">
              <div className="flex">
                <span className=" bg-slate-300  h-7 w-7 rounded-full   b-border z-30"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full  b-border relative right-2 z-20"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full  b-border relative right-4 z-10"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full  b-border relative right-6 z-0"></span>
              
               
              </div>
              <div className="flex items-center ">

              <GoClock size={10} className=" "/>
              <p className=" text-xs  text-stone-400">Due in 4 days</p>
             
              </div>
           
            </div>
          </div>
          <div className="card color-primary rounded-xl px-3.5 mt-4 mb-4 card-hight">
            <div className=" flex justify-between pt-2">
              <li className="    text-pink-500  ">Instructor Meeting</li>
              <BiDotsHorizontalRounded size={20} className="mr-3" />
            </div>
            <p >Plan holiday demonstration program. Create outline.

</p>
            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mt-4 ">
              <div
                class="bg-pink-500  h-2 rounded-full "
                style={{ width: "40%" }}
              ></div>
            </div>
            <div className="flex items-center justify-between  py-2.5">
              <div className="flex">
                <span className=" bg-slate-300  h-7 w-7 rounded-full   b-border z-30"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full  b-border relative right-2 z-20"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full  b-border relative right-4 z-10"></span>
               
              </div>
              <div className="flex items-center">

              <GoClock size={10} className="mr-1"/>
              <p className=" text-xs  text-stone-400">Due in 4 days</p>
             
              </div>
           
            </div>
          </div>
          <div className="card color-primary rounded-xl px-3.5 mt-4 mb-4 card-hight">
            <div className=" flex justify-between p-1">
              <li className="    text-green-500  ">Databse</li>
              <BiDotsHorizontalRounded size={20} className="mr-3" />
            </div>
            <p >Determine how many boards need to be ordered for testing and demo.
</p>
            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mt-3 ">
              <div
                class="bg-green-500  h-2 rounded-full "
                style={{ width: "25%" }}
              ></div>
            </div>
            <div className="flex items-center justify-between  py-2.5">
              <div className="flex">
                <span className=" bg-slate-300  h-7 w-7 rounded-full   b-border z-30"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full  b-border relative right-2 z-20"></span>
              
               
              </div>
              <div className="flex items-center">

              <GoClock size={10} className="mr-1"/>
              <p className=" text-xs  text-stone-400">Due in 4 days</p>
             
              </div>
           
            </div>
          </div>
        </div>
         
          <div className="Inprogress  ml-7 mt-2   ">
          <div className="flex  items-center justify-between p-3 todo">
            <h2 className=""> InProgress (2)</h2>
            <button  className="w-7 h-7 disable-btn flex rounded-lg  text-2xl items-center justify-center ">+</button>
          </div>
          <div >
          <div className="card color-primary rounded-xl px-3.5 mt-4 card-hight">
            <div className=" flex justify-between p-1">
              <li className="     text-cyan-300   ">Video</li>
              <BiDotsHorizontalRounded size={20} className="mr-3" />
            </div>
            <p >Create sparring tutorial video for the weekly class.
</p>
            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mt-5 ">
              <div
                class="bg-cyan-300  h-2 rounded-full "
                style={{ width: "80%" }}
              ></div>
            </div>
            <div className="flex items-center justify-between  py-2.5">
              <div className="flex">
                <span className=" bg-slate-300  h-7 w-7 rounded-full   b-border z-30"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full  b-border relative right-2 z-20"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full b-border relative right-4 z-10" ></span>
               
              </div>
              <div className="flex items-center">

              <GoClock size={10} className="mr-1"/>
              <p className=" text-xs  text-stone-400">Due in 4 days</p>
             
              </div>
                
            </div>
          </div>
          </div>
          <div className=" bg-black rounded-xl">
          <div className="card color-primary rounded-xl px-3.5 mt-4  card-hight rotate-6 translate-x-7 tiled ">
            <div className=" flex justify-between p-1">
              <li className="     text-yellow-200  ">Instructor Meeting</li>
              <BiDotsHorizontalRounded size={20} className="mr-3" />
            </div>
            <p >Create sign up sheet for holiday student/parent conferences.
</p>
            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mt-3 ">
              <div
                class="bg-yellow-200  h-2 rounded-full "
                style={{ width: "30%" }}
              ></div>
            </div>
            <div className="flex items-center  py-2.5">
              <div className="flex">
                <span className=" bg-slate-300  h-7 w-7 rounded-full   b-border z-30"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full  b-border relative right-2 z-20"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full  b-border relative right-4 z-10"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full  b-border relative right-6 z-0"></span>
              
               
              </div>
              <div className="flex items-center">

              <GoClock size={10} />
              <p className=" text-xs  text-stone-400">Due in 4 days</p>
             
              </div>
           
            </div>
          </div>
          </div>
         
        </div>
          
          <div >
          <div className="  ml-7 mt-2 ">
          <div className="flex  items-center justify-between p-3 todo">
            <h2 className="">Done(3)</h2>
            <button className="w-7 h-7 disable-btn flex rounded-lg  text-2xl items-center justify-center  ">+</button>
          </div>
          <div >
          <div className="card color-primary rounded-xl px-3.5 mt-4 card-hight">
            <div className=" flex justify-between p-1">
              <li className="     text-red-500  ">BUGS FIXING</li>
              <BiDotsHorizontalRounded size={20} className="mr-3" />
            </div>
            <p >Action Button needed for Google Maps visits.
</p>
            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mt-5 ">
              <div
                class="bg-red-500  h-2 rounded-full "
                style={{ width: "100%" }}
              ></div>
            </div>
            <div className="flex items-center   py-2.5">
              <div className="flex">
                <span className=" bg-slate-300  h-7 w-7 rounded-full   b-border z-30"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full  b-border relative right-2 z-20"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full  b-border relative right-4 z-10"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full  b-border relative right-6 z-0"></span>
              
               
              </div>
              <div className="flex items-center">

              <GoClock size={10} />
              <p className=" text-xs  text-stone-400">Due in 4 days</p>
             
              </div>
           
            </div>
          </div>
          </div>
          <div className="card-height">
          <div className="card color-primary rounded-xl px-3.5 card-hight mt-4">
            <div className=" flex justify-between p-1">
              <li className="   text-green-500   ">Database</li>
              <BiDotsHorizontalRounded size={20} className="mr-3" />
            </div>
            <p >Update new instructor photos.
</p>
            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mt-3 ">
              <div
                class="bg-green-500  h-2 rounded-full "
                style={{ width: "100%" }}
              ></div>
            </div>
            <div className="flex items-center justify-between  py-2.5">
              <div className="flex">
                <span className=" bg-slate-300  h-7 w-7 rounded-full   b-border z-30"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full  b-border relative right-2 z-20"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full b-border relative right-4 z-10" ></span>
               
              </div>
              <div className="flex items-center">

              <GoClock size={10} className="mr-1"/>
              <p className=" text-xs  text-stone-400">Due in 4 days</p>
             
              </div>
           
            </div>
          </div>
          </div>
          <div className="card color-primary rounded-xl px-3.5 card-hight mt-4 mb-4">
            <div className=" flex justify-between p-1">
              <li className="    text-pink-500  ">Instructor Meeting</li>
              <BiDotsHorizontalRounded size={20} className="mr-3" />
            </div>
            <p >Review/correct yellow belt techniques.
</p>
            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mt-3 ">
              <div
                class="bg-pink-500  h-2 rounded-full "
                style={{ width: "100%" }}
              ></div>
            </div>
            <div className="flex items-center justify-between  py-2.5">
              <div className="flex">
                <span className=" bg-slate-300  h-7 w-7 rounded-full   b-border z-30"></span>
                <span className=" bg-slate-300  h-7 w-7 rounded-full  b-border relative right-2 z-20"></span>
              
               
              </div>
              <div className="flex items-center">

              <GoClock size={10} className="mr-1"/>
              <p className=" text-xs  text-stone-400">Due in 4 days</p>
             
              </div>
           
            </div>
          </div>
        </div>
          </div>
         
          <div className="Revised card ml-7  mt-2  ">
          <div className="flex  items-center justify-between p-3 todo">
            <h2 className=""> Revised (0)</h2>
            <button className="w-7 h-7  disable-btn flex rounded-lg  text-2xl items-center justify-center ">+</button>
          </div>
          
         
          <div className="color-primary move-card rounded-xl px-3.5 mt-4">
            <div className=" flex justify-between p-1">
              <p className=" flex items-center justify-center  rounded-xl movehere ">Move card here</p>
            
            </div>
            
           
          </div>
         
        </div>
          
      </div>
      
    </div>
  );
};

export default Processbar;
