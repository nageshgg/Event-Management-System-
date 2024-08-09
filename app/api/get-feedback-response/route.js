import { NextResponse } from "next/server";
import { getFeedbackResponse } from "@connection/connection";

export async function POST(request) {
  const req = await request.json();
  console.log("IN here" + req);
  const data = await getFeedbackResponse(req.evetId);
  return NextResponse.json({ data });
}
