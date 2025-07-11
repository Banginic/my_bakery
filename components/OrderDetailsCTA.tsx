"use client";
import { AppContext } from "@/context/AppProvider";
import React, { useContext } from "react";

function OrderDetailsCTA({ orderId }: { orderId: string}) {
  const { setEditOrder } = useContext(AppContext)!;
  return (
    <div className="flex justify-end items center gap-4 mt-12">
      <button
        onClick={() => setEditOrder(true)}
        className="px-4 py-2 rounded text-sm  cursor-pointer border border-green-300 text-green-800 bg-green-100 hover:bg-green-200"
      >
        Edit Order
      </button>
      <button
        onClick={() => setEditOrder(true)}
        className="px-4 py-2 rounded text-sm  cursor-pointer border border-gray-300 text-gray-800 bg-gray-100 hover:bg-gray-200"
      >
        Refund Order
      </button>
      <button className="px-4 py-2 rounded text-sm  cursor-pointer border border-red-300 text-red-500 bg-red-100 hover:bg-red-200">
        Delete Order
      </button>
    </div>
  );
}

export default OrderDetailsCTA;
