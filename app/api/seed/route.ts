// app/api/events/seed/route.ts
import { NextResponse } from "next/server";
import defaultEvent from "../events/defaultEvent";
import { connectToDatabase } from "@/lib/mongoose";
import Event from "@/lib/models/event";

export async function GET() {
  await connectToDatabase()

  try{
    await Event.create(defaultEvent)

    return NextResponse.json({
      message: 'Event succcessfully added',
      event: defaultEvent
    });

  } catch(e) {
    console.log(`error: ${e}`)
    return NextResponse.json({
      message: 'Event not sucessfully',
      error: e
    })
  }
}