//--------------------Feedback form-----------

import { NextResponse } from "next/server";
import { createUserQuuery } from "@connection/connection";

export async function POST(request) {
  const req = await request.json();
  console.log(req);
  const message = await createUserQuuery(req);
  return NextResponse.json({ data: message });
}