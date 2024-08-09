import { NextResponse } from "next/server";
import { saveFeedbackQuestion } from "@connection/connection";

export async function POST(request) {
  const req = await request.json();
  console.log(req);
  const status = await saveFeedbackQuestion(req);
  return NextResponse.json({ status: status });
}
