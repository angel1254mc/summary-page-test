import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

function Detailed() {
    return (
      <div className="w-full h-[100vh] flex">
          <div className="w-[200px] h-full bg-teal-800">
  
          </div>
          <div className="w-full h-full px-6 py-2 flex flex-col relative">
            <div className="flex justify-between w-full">
              <h1 className="header text-2xl font-semibold">SABER II Request For Information</h1>
              <div className="flex justify-between w-[150px]">
                <div className="py-1 px-4 text-teal-500 ">Manage</div>
                <div className="py-1 px-4 border-gray-300 rounded-md border-2">Back</div>
              </div>
            </div>
            <div className="flex"><p className="px-2 py-1 text-xs bg-yellow-500 rounded-xl text-white flex w-auto">Strategic</p></div>
            <div className="bcc-group flex gap-x-6 text-sm">
              <div className="email-bcc">
                BCC to: <a href="">angellopezpol1254@gmail.com</a>
              </div>
              <div className="stage-select flex gap-x-2">
                <p>Stage: </p>
                <select>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </div>
              <div className="subscribe-group">
                Click To Subscribe
              </div>
            </div>
            <Tabs className=""/>
            <Outlet/>
          </div>
      </div>
    );
  }
  
  export default Detailed;
  