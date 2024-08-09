import { NextResponse } from "next/server";
import { getUser } from "@connection/connection";

export async function POST(request) {
  const req = await request.json();
  console.log(req);
  const users = await getUser(req);
  console.log("akjsdhfhaskhj", users);
  if (users && users.email == req.email && users.password == req.password) {
    return NextResponse.json({ status: "Successfull" });
  } else {
    return NextResponse.json({ status: "Error" });
  }
}
