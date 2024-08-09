import { NextResponse } from "next/server";
import { getFeedbackQuestion } from "@connection/connection";

export async function POST(request) {
  const req = await request.json();
  console.log(req);
  const questions = await getFeedbackQuestion(req.eventId);
  return NextResponse.json({ data: questions });
}
