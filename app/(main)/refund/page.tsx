import React from "react";
import { FormRefund, Newsletters } from "@/components/index";

function Refund() {
  const order = {
    orderId: 1232,
    RecieverName: "John Duo",
    phone: "+1 233 42232",
    paymentMethod: "Visa",
    email: "example@email.com",
    address: "1233, White bare Lake",
    country: "USA",
    paymentDetails: "**** **** **34 1042",
    refund: "Pending",
    shippingDate: "07-23-2025",
    ref: "DS-2323",
    currentLocation: [
      { location: "DLA, Airport", date: "23-07-2025" },
      { location: "Paris, Airport Customs", date: "23-07-2025" },
      { location: "Dallas Int airport Custom, Airport", date: "23-07-2025" },
    ],
    status: "Delivering",
  };
  return (
    <div className="min-h-[70dvh] bg-gradient-to-b from-yellow-50 to gray-50 py-4">
      <h1 className="text-yellow-400 text-2xl font-bold lg:text-3xl text-center">
        Refund
      </h1>
      <section>
        <FormRefund />
        <div className="my-4 border rounded border-gray-300 w-sm mx-auto shadow-md">
          <article className="border-gray-300 rounded  w-[90%] lg:w-md mx-auto">
            <div className=" p-4 rounded">
              <div className="flex items-center gap-4 text-lg">
                <p className="text-gray-600">Order Reference:</p>
                <p className="">{order.ref}</p>
              </div>
              <div className="flex items-center gap-4 my-2">
                <p className="text-gray-600">Name:</p>
                <p>{order.RecieverName}</p>
              </div>
              <div className="flex items-center gap-4 my-2">
                <p className="text-gray-600">Email:</p>
                <p>{order.email}</p>
              </div>
              <div className="flex items-center gap-4 my-2">
                <p className="text-gray-600">Phone:</p>
                <p>{order.phone}</p>
              </div>
              <div className="flex items-center gap-4 my-2">
                <p className="text-gray-600">Payment details:</p>
                <p>{order.paymentDetails}</p>
              </div>
              <div className="flex items-center gap-4 my-2">
                <p className="text-gray-600">Address:</p>
                <p>
                  {order.address} {order.country}
                </p>
              </div>
            </div>
            <div className="mt-8 p-4 bg-white/50">
              <div className="flex items-center gap-4">
                <p className="text-gray-600">Refund status</p>
                <p className="text-green-500">{order.refund}</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-600">Start date</p>
                <p className="">{order.shippingDate}</p>
              </div>
            </div>
          </article>
        </div>
        <Newsletters />
      </section>
    </div>
  );
}

export default Refund;
