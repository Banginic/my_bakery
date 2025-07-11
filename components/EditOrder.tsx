"use client";
import React, { FormEvent, useContext, useState } from "react";
import { close } from "@/assets/photo";
import Image from "next/image";
import { AppContext } from "@/context/AppProvider";

function EditOrder({ orderId }: { orderId: string }) {
  const { setEditOrder, showEditOrder } = useContext(AppContext)!;
  const [formState, setFormState] = useState({ error: "", isLoading: false });
  const [formData, setFormData] = useState({ location: "", time: "" });

  async function handleSumbit(event: FormEvent) {
    event.preventDefault();
    setFormState({ error: "", isLoading: true });
  }
  return (
    <div
      className={`${
        showEditOrder ? "fixed" : "hidden"
      } inset-0 bg-black/80 grid place-items-center `}
    >
      <form
        onSubmit={handleSumbit}
        className="border border-gray-300 rounded py-4 px-8 bg-white w-sm relative"
      >
        <button
          type="button"
          onClick={() => setEditOrder(false)}
          className="absolute top-4 right-4 cursor-pointer hover:bg-gray-200 p-1"
        >
          <Image src={close} alt="./placeholder.png" width={25} />
        </button>
        <h1 className="text-lg font-semibold lg:text-2xl text-center mb-4">
          Add Transit
        </h1>
        <div className="mb-4">
          <label htmlFor="location" className="block">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            className="border border-gray-300 px-4 py-2 rounded w-full"
            placeholder="Atlanta airport custom"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block">
            Time
          </label>
          <input
            type="time"
            id="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="border border-gray-300 px-4 py-2 rounded w-full"
            placeholder="Atlanta airport custom"
          />
        </div>
        <button
          type="submit"
          disabled={formState.isLoading}
          className="bg-black px-4 py-2.5 disabled:bg-black/60 rounded text-yellow-300 w-full cursor-pointer hover:bg-black/80"
        >
          {formState.isLoading ? (
            <span className="animate-pulse">Adding....</span>
          ) : (
            "Add Transit"
          )}
        </button>
        <p className="h-4  text-red-500 text-center my-1">{formState.error}</p>
      </form>
    </div>
  );
}

export default EditOrder;
