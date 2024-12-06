// app/api/auth/session/route.js

import { parse } from "cookie"; // For parsing cookies
import { NextResponse } from "next/server";

export async function GET(req) {
  const cookies = parse(req.headers.get("cookie") || "");
  const authToken = cookies.auth_token;

  if (!authToken) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  try {
    const session = JSON.parse(authToken);
    return NextResponse.json({ session });
  } catch (error) {
    return NextResponse.json({ message: "Error retrieving session" }, { status: 500 });
  }
}
