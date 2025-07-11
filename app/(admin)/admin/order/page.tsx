import React from "react";
import Link from "next/link";


function Orders() {
  const order = [
    {
      orderId: 123,
      name: "John Dou",
      email: "example@email.com",
      country: "USA",
    },
    {
      orderId: 1233,
      name: "John Dou",
      email: "example@email.com",
      country: "USA",
    },
    {
      orderId: 1234,
      name: "John Dou",
      email: "example@email.com",
      country: "USA",
    },
    {
      orderId: 1235,
      name: "John Dou",
      email: "example@email.com",
      country: "USA",
    },
  ];
  return (
    <div className="min-h-[75dvh] bg-gradient-to-b from-yellow-50 to-gray-50 p-4">
      <h1 className="text-yellow-400 text-xl lg:text-3xl font-bold text-center p-2">
        Orders
      </h1>
      <section className="max-w-4xl mx-auto">
        <Link href={'/admin/add-order'} className="border px-4 py-2 rounded cursor-pointer text-sm border-gray-300 hover:border-black">
          Add order
        </Link>
        <article className="border rounded border-gray-300 p-4 mt-4">
          {/* <div className="h-full w-full">
                  <h2 className="text-center font-bold text-lg">No Available Order</h2>
            </div> */}
          <div>
            {order.map((item) => (
              <Link href={`/admin/order/${item.orderId}`} key={item.orderId}>
                <div className="border border-gray-200 px-4 m cursor-pointer my-1 hover:bg-gray-800/10 ">
                  <div className="flex gap-8">
                    <div className="">
                      <p className="text-neutral-600">Name</p>
                      <p>{item.name}</p>
                    </div>
                    <div className="">
                      <p className="text-neutral-600">Email</p>
                      <p>{item.email}</p>
                    </div>
                    <div className="">
                      <p className="text-neutral-600">Country</p>
                      <p>{item.country}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

export default Orders;
