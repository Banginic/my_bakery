import { NextResponse } from "next/server";
import { db } from "@/drizzle/index";
import { eq } from "drizzle-orm";
import { orderTable } from "@/drizzle/schema";

export async function UPDATE(req: Request) {
  const { body } = await req.json();
  const { trackingNumber, location } = body;
  if (!trackingNumber || !location) {
    return NextResponse.json(
      { success: false, error: "Missing tracking number or location" },
      { status: 400 }
    );
  }

  const order = await db
    .select()
    .from(orderTable)
    .where(eq(orderTable.trackingNumber, trackingNumber));

  if (order.length === 0) {
    return NextResponse.json(
      { success: false, error: "No Order Available" },
      { status: 404 }
    );
  }
  const existing = order[0]?.locations || [];
  const newLocation = [...existing, location];
  await db
    .update(orderTable)
    .set({ locations: newLocation, updatedAt: new Date() })
    .where(eq(orderTable.trackingNumber, trackingNumber));

  return NextResponse.json(
    { success: true, message: "Location added successfully." },
    { status: 202 }
  );
}
