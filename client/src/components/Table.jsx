import React from "react";
import { Utensils, Armchair, BarChartHorizontalBig, Users, Clock, CreditCard, UserPlus } from "lucide-react";

const Table = ({ status, people = 0 }) => {
  return (
    <div className="w-full h-full px-2 text-white">
      <div className="rounded-t-md bg-orange-100 text-xl flex gap-2 text-yellow-900 justify-center items-center">
        {status === "unavailable" ? <Utensils /> : <Armchair />}
        <h1>A-01</h1>
      </div>
      <div className="bg-teal-600 w-full rounded-b-md flex flex-col gap-6 px-4 divide-y divide-blue-200">
        <div className="flex flex-col pt-2">
        <h2 className="text-center">ข้อมูล</h2>
         <div className="pt-2 flex flex-col gap-2">
         <div className="flex gap-2">
            <BarChartHorizontalBig />
            <p>{status === "unavailable" ? "โต๊ะว่าง" : "โต๊ะกำลังใช้งาน"}</p>
          </div>
          <div className="flex gap-2">
            <Users />
            <p>{people}/4</p>
          </div>
         </div>
        </div>
        <div className="flex justify-between py-2">
            <div className="flex gap-2">
                <Clock/>
                <p className="">00:00:00</p>
            </div>
            <button className="flex gap-2 bg-gray-100 text-gray-800 rounded-md px-2 py-1">
                {status === "unavailable" ? (<><UserPlus />เพิ่มลูกค้า</>) : (<><CreditCard/>ชำระเงิน</>)}
            </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
