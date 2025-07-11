"use client";

import React, { FormEvent, useState } from "react";

function TrackOrder() {
  const order = {
    orderId: 1232,
    RecieverName: "John Duo",
    phone: "+1 233 42232",
    paymentMethod: "Visa",
    email: "example@email.com",
    address: "1233, White bare Lake",
    country: "USA",
    cardDetails: '**** **** **34 1042',
    refund:'Pending',
    shippingDate: "07-23-2025",
    ref: "DS-2323",
    currentLocation: [
      { location: "DLA, Airport", date: "23-07-2025" },
      { location: "Paris, Airport Customs", date: "23-07-2025" },
      { location: "Dallas Int airport Custom, Airport", date: "23-07-2025" },
    ],
    status: "Delivering",
  };

  const [formState, setFormState] = useState({ error: "", isLoading: false });
  const [trackingNumber, setTrackingNumber] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormState({ error: "", isLoading: true });
  }
  return (
    <div className="min-h-[70dvh]">
      <h1 className="text-3xl font-bold text-center my-4">
        Track Your <span className="text-yellow-500 ">Order</span>
      </h1>
      <div className="w-[90%] lg:w-md mt-8 border mx-auto border-gray-300 p-4 rounded">
        <form onSubmit={handleSubmit}>
          <label htmlFor="trackingNumber" className="text-gray-600 block">
            Enter tracking number
          </label>
          <input
            type="text"
            value={trackingNumber}
            required
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="border py-2 px-4 rounded border-gray-300 "
            placeholder="DS-0232388434344"
          />
          <button
            type="submit"
            className=" bg-black text-white px-4 py-2 rounded cursor-pointer hover:black/80 ml-2"
          >
            {formState.isLoading ? (
              <span className="animate-pulse">Tracking ...</span>
            ) : (
              "Track"
            )}
          </button>
        </form>
      </div>

      <section className="my-12">
        {/* <div className="text-center">
          <h2 className="text-xl font-bold">No Order Found</h2>
          <p className="text-gray-600">Please try again Later</p>
        </div> */}
        <article className="border border-gray-300 rounded p-2 w-[90%] lg:w-md mx-auto">
          <div className="bg-gray-100 p-4 rounded">
            <div className="flex items-center gap-4 text-lg">
              <p className="text-gray-600">Order Reference:</p>
              <p className="">{order.ref}</p>
            </div>
            <div className="flex items-center gap-4 my-2">
              <p className="text-gray-600">Reciever&apos;s name:</p>
              <p>{order.RecieverName}</p>
            </div>
            <div className="flex items-center gap-4 my-2">
              <p className="text-gray-600">Reciever&apos;s email:</p>
              <p>{order.email}</p>
            </div>
            <div className="flex items-center gap-4 my-2">
              <p className="text-gray-600">Reciever&apos;s phone:</p>
              <p>{order.phone}</p>
            </div>
            <div className="flex items-center gap-4 my-2">
              <p className="text-gray-600">Reciever&apos;s address:</p>
              <p>
                {order.address} {order.country}
              </p>
            </div>
          </div>
          <div className="mt-8 p-4 bg-white">
            <div className="flex items-center gap-4">
              <p className="text-gray-600">Order status</p>
              <p className="text-green-500">{order.status}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-gray-600">Shipping date</p>
              <p className="">{order.shippingDate}</p>
            </div>
            <div className="flex items-center gap-4 border rounded p-2 border-gray-300">
              <p className="text-gray-600 block">Order current location</p>
              <div>
                {order.currentLocation.map((location) => (
                  <div key={location.location}>
                    <div className={`mx-auto text-gray-700  text-sm`}>
                      {location.location}
                    </div>
                    <div className="min-h-6 w-0.5 rounded  border"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="border py-2 px-4  rounded flex mx-auto text-red-500 hover:bg-red-100 cursor-pointer">
            Cancel Order
          </button>
        </article>
      </section>
    </div>
  );
}

export default TrackOrder;
