import React from "react";
import { EditOrder, OrderDetailsCTA } from "@/components/index";

async function OrderDetails({ params }: { params: Promise<{ orderId: string }> }) {
 const { orderId } = await params 
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
    <div className="min-h-[70dvh] bg-gradient-to-b max-w-3xl mx-auto from-yellow-50 to-gray-50 p-4">
      <h1 className=" text-xl lg:text-3xl font-bold text-center p-2">
        Order <span className="text-yellow-500">Details</span>
      </h1>
      <section className="border border-gray-300 p-4 rounded">
        <p className="text-lg pb-4">
          Order Ref: <span className="underline">{"DS-0235454235"}</span>
        </p>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">Name:</p>
          <p>{order.RecieverName}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">Email:</p>
          <p>{order.email}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">phone:</p>
          <p>{order.phone}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">Address:</p>
          <p>{order.address}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">Country:</p>
          <p>{order.country}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">Payment details:</p>
          <p>{order.paymentDetails}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">Payment Method:</p>
          <p>{order.paymentMethod}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-neutral-600">Status:</p>
          <p className="text-green-600">{order.status}</p>
        </div>
        <OrderDetailsCTA orderId= { orderId} />
       
        <EditOrder orderId={orderId} />
      </section>
    </div>
  );
}

export default OrderDetails;
