import { NextResponse } from "next/server";
import { getFeedbackForm } from "@connection/connection";

export async function POST(request) {
  const req = await request.json();
  console.log(req);
  const message = await getFeedbackForm(req);
  return NextResponse.json({ data: message });
}
