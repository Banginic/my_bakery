"use client";

import { useMutation } from "@tanstack/react-query";

import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";

function OrderDetails() {
  const [formState, setFormState] = useState({ error: "", isLoading: false });
  const [trackingNumber, setTrackingNumber] = useState("");

  const { data, isPending, isError, mutate } = useMutation({
    mutationFn: async () => {
      const response = await fetch(
        `/api/list-single-order?orderId=${trackingNumber}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.json();
    },
    onSuccess: () => {
      toast.success("Order details fetched successfully");
      setFormState({ error: "", isLoading: false });
    },
    onError: (error) => {
      setFormState({ error: error.message, isLoading: false });
    },
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    mutate();
  }
  return (
    <div className="min-h-[70dvh] bg-gradient-to-b max-w-3xl mx-auto from-yellow-50 to-gray-50 p-4">
      <h1 className=" text-xl lg:text-3xl font-bold text-center p-2">
        Order <span className="text-yellow-500">Details</span>
      </h1>
      {/* Form */}
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
      ;
      {isPending && (
        <div className="h-[50dvh] grid place-items-center">
          <p className="animate-pulse text-3xl text-yellow-800 font-bold">
            Loading...
          </p>
        </div>
      )}
      {isError && (
        <div className="text-red-600 h-[50dvh] grid place-items-center">
          Error loading orders
        </div>
      )}
      {!isPending &&
      !isError &&
      (!data || !data.data || data.data.length === 0) ? (
        <div className="h-[50dvh] grid place-items-center">
          <p className="text-2xl text-gray-800-600 font-bold">
            Please enter a valid tracking number
          </p>
        </div>
      ) : (
        <section className="border border-gray-300 p-4 rounded">
          <p className="text-lg pb-4">
            Order Ref:{" "}
            <span className="underline">{data?.data[0].trackingNumber}</span>
          </p>
          <div className="flex items-center gap-4">
            <p className="text-neutral-600">Name:</p>
            <p>{data?.data[0].name}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-neutral-600">Email:</p>
            <p>{data?.data[0].email}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-neutral-600">phone:</p>
            <p>{data?.data[0].phone}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-neutral-600">Address:</p>
            <p>{data?.data[0].address}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-neutral-600">Country:</p>
            <p>{data?.data[0].sendingCountry}</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-neutral-600">Payment Method:</p>
            <p>{data?.data[0].paymentMethod}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-neutral-600">Weight:</p>
            <p>{data?.data[0].packageWeight}Kg</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-neutral-600">Amount:</p>
            <p>${data?.data[0].amount.toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-neutral-600">Sending Country:</p>
            <p>{data?.data[0].sendingCountry}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-neutral-600">Status:</p>
            <p className="text-green-600">{data?.data[0].status}</p>
          </div>
          <div className=" bg-green-50 p-4 rounded border border-green-200 mt-4">
            <p className="text-green-600 mb-3">Order location:</p>
            <div>
              <p className="text-green-800">
                {data?.data[0].locations &&
                  data?.data[0]?.locations.map(
                    (location: { place: string; time: Date }) => (
                      <article key={location.place}>
                        <p>{location.place}</p>
                        <p className="text-xs">
                          {new Date(location.time).toLocaleTimeString()}
                        </p>
                        <div className="min-h-6 border w-1 bg-gray-700 rounded"></div>
                      </article>
                    )
                  )}
              </p>
            </div>
          </div>
          <button
            onClick={() => toast.warn("Sent order cancellation request.")}
            className="px-4 py-2 rounded my-1 mt-4 bg-red-100 text-red-900 hover:bg-red-200 cursor-pointer"
          >
            Cancel Order
          </button>
        </section>
      )}
    </div>
  );
}

export default OrderDetails;
