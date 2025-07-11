import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { orderTable } from "@/drizzle/schema";
import { generateSecureEightDigitString } from "@/lib/generateEightNumber";
import { db } from "@/drizzle/index";

export async function Post(req: Request) {
  const body = await req.json();
  const {
    name,
    email,
    phone,
    address,
    receivingCountry,
    amount,
    parckageWeight,
    sendingCountry,
    locations,
    trackingNumber,
  } = body;
  if (
    !name ||
    !email ||
    !phone ||
    !address ||
    !receivingCountry ||
    !amount ||
    !parckageWeight ||
    !sendingCountry ||
    !locations ||
    !trackingNumber
  ) {
    return NextResponse.json(
      { error: "All fields are required", success: false },
      { status: 400 }
    );
  }
  const orderRef = "DS" + `${generateSecureEightDigitString()}`;

  const existRef = await db
    .select()
    .from(orderTable)
    .where(eq(orderTable.trackingNumber, orderRef))
    .limit(1);
  if (existRef.length === 1) {
    return NextResponse.json(
      { success: false, error: "Order Already exist, Try again" },
      { status: 400 }
    );
  }
  const order = await db.insert(orderTable).values({
    name, email, phone, address,
     receivingCountry, amount, parckageWeight, sendingCountry,
     locations, trackingNumber: orderRef, updatedAt: new Date()
  })
 
  return NextResponse.json({ success: true, message: 'Order created successfully', data:order}, { status: 201})
}