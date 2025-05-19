"use client";

import AppAreaChart from "@/components/AppAreaChart";
import AppCard from "@/components/AppCard";
import AppChart from "@/components/AppChart";
import AppPieChart from "@/components/AppPieChart";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className=" grid grid-cols-1 gap-5 lg:grid-cols-1 xl:grid-cols-4 overflow-x-hidden">
      <div className=" bg-gray-900 p-2 text-center lg:col-span-1 xl:col-span-2 2xl:col-span-2 rounded-xl ">
        <AppChart />
      </div>
      <div className=" bg-gray-900 p-2 text-center col-span-1 rounded-xl lg:col-span-1 xl:col-span-1 ">
        <AppCard title="Popular Content" />
      </div>
      <div className=" bg-gray-900 p-2 text-center col-span-1 rounded-xl lg:col-span-1 xl:col-span-1 ">
        <AppPieChart />
      </div>
      <div className=" bg-gray-900 p-2 text-center col-span-1 rounded-xl lg:col-span-1 xl:col-span-1 2xl:order-none  ">
        <TodoList />
      </div>
      <div className=" bg-gray-900 p-2 text-center lg:col-span-2 xl:col-span-2 2xl:col-span-2 rounded-xl">
        <AppAreaChart />
      </div>
      <div className=" bg-gray-900 p-2 text-center col-span-1 rounded-xl lg:col-span-1 xl:col-span-1 ">
        <AppCard title="Transections" />
      </div>
    </div>
    // <div>hi</div>
  );
}
