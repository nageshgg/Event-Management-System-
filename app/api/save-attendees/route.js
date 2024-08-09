import { NextResponse } from "next/server";
import { saveAttendeesInfo } from "@connection/connection";

export async function POST(request) {
  const req = await request.json();
  console.log(req);
  const status = await saveAttendeesInfo(req);
  return NextResponse.json({ status: status });
}
