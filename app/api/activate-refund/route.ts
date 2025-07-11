import { orderTable } from "@/drizzle/schema";
import { db } from "@/drizzle/index";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function UPDATE(req: Request) {
  const { body } = await req.json();
  const { trackingNumber } = body;

  const order = await db
    .select()
    .from(orderTable)
    .where(eq(orderTable.trackingNumber, trackingNumber))
    .limit(1);
  if (order.length === 0) {
    return NextResponse.json(
      { success: false, error: "No Order Available" },
      { status: 404 }
    );
  }

  const setRefund = !order[0].refund
const refundMessage = setRefund ? 'Refunded Successfully' : 'Refund Canceled'

  await db.update(orderTable)
    .set({ refund: setRefund, updatedAt: new Date() })
    .where(eq(orderTable.trackingNumber, trackingNumber));

    return NextResponse.json({ success: true, message: refundMessage, data: order[0] }, { status: 202 });
}
