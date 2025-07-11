import React from "react";

function AddOrder() {
  return (
    <div className="min-h-screen my-4 grid mt-12 ">
      <form
        action=""
        className="border border-gray-300 rounded shadow-sm p-4 text-sm min-w-sm mx-auto"
      >
        <h1 className="text-center text-xl lg:text-2xl font-bold mb-4">
          Create Order
        </h1>
      <div className="flex gap-2 mb-4">
          <div className="w-45">
          <label htmlFor="name" className="text-neutral-600 block">Name</label>
          <input type="text" placeholder="Myrima Tabs" className="border px-4 py-2 w-full rounded border-gray-300" />
        </div>
        <div className="w-45">
          <label htmlFor="name" className="text-neutral-600 block">Email</label>
          <input type="email" placeholder="myrimatabs@email.com" className="border w-full px-4 py-2 rounded border-gray-300" />
        </div>
      </div>
      <div className="flex gap-2 mb-4">
          <div className="w-45">
          <label htmlFor="phone" className="text-neutral-600 block">Phone</label>
          <input type="text" placeholder="+1 323 4422 2323" className="border w-full px-4 py-2 rounded border-gray-300" />
        </div>
        <div className="w-45">
          <label htmlFor="address" className="text-neutral-600 block">Address</label>
          <input type="text" placeholder="122 Rd Texas" className="border w-full px-4 py-2 rounded border-gray-300" />
        </div>
      </div>
      <div className="flex gap-2 mb-4">
          <div className="w-45">
          <label htmlFor="country" className="text-neutral-600 block">Recieving Country</label>
          <input type="text" placeholder="Canada" className="border w-full px-4 py-2 rounded border-gray-300" />
        </div>
        <div className="w-45">
          <label htmlFor="paymentMethod" className="text-neutral-600 block">Payment Method</label>
          <input type="text" placeholder="Visa" className="border w-full px-4 py-2 rounded border-gray-300" />
        </div>
      </div>
      <div className="flex gap-2 mb-4">
         
        <div className="w-45">
          <label htmlFor="amount" className="text-neutral-600 block">Amount</label>
          <input type="text" placeholder="$40.00" className="border w-full px-4 py-2 rounded border-gray-300" />
        </div>
        <div className="w-45">
          <label htmlFor="weight" className="text-neutral-600 block">Parkage Weight</label>
          <input type="text" placeholder="23.0kg" className="border w-full px-4 py-2 rounded border-gray-300" />
        </div>
      </div>
      <div className="flex gap-2 mb-4">
         
        <div className="w-45">
          <label htmlFor="sendingCountry" className="text-neutral-600 block">Sending Country</label>
          <input type="text" placeholder="US" className="border w-full px-4 py-2 rounded border-gray-300" />
        </div>
        <div className="w-45">
          <label htmlFor="weight" className="text-neutral-600 block">Parkage weight</label>
          <input type="text" placeholder="23.0kg" className="border w-full px-4 py-2 rounded border-gray-300" />
        </div>
      </div>
  
          
       
      <button className="bg-black text-yellow-300 px-4 cursor-pointer hover:bg-black/70 py-2.5 rounded  w-full font-semibold">Add Order</button>
      </form>
    </div>
  );
}

export default AddOrder;
