import { NextResponse } from "next/server";
import { saveFeedbackResponse } from "@connection/connection";

export async function POST(request) {
  const req = await request.json();
  console.log(req);
  const status = await saveFeedbackResponse(req);
  return NextResponse.json({ status: status });
}
