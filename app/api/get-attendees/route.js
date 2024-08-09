import { NextResponse } from "next/server";
import { getAttendees } from "@connection/connection";

export async function POST(request) {
  const req = await request.json();
  console.log(req);
  const AttendeeData = await getAttendees(req.eventId);
  return NextResponse.json({ data: AttendeeData });
}
