import connectDB from "@/app/lib/db"; // DB connection helper
import User from "@/app/model/User"; // User model
import bcrypt from "bcryptjs"; // To compare hashed passwords
import { NextResponse } from "next/server";
import { serialize } from "cookie"; // For setting cookies

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; // Secret key for signing JWT

export async function POST(req) {
  const { email, password } = await req.json(); // Parse JSON body

  if (!email || !password) {
    return NextResponse.json({ message: "Email and Password are required" }, { status: 400 });
  }

  try {
    // Connect to the database
    await connectDB();

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }

    // Compare the hashed passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }

    // Create a session (JWT or cookie)
    const session = {
      name: user.name,
      email: user.email,
      role: user.role,
    };

    // Serialize the cookie with user session data
    const cookie = serialize("auth_token", JSON.stringify(session), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Ensure it's secure in production
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/", // Ensure it works for all paths
    });

    // Log to check if the cookie is serialized correctly
    console.log("Serialized Cookie: ", cookie);

    // Set the cookie in the response headers
    const response = NextResponse.json({ message: "Login successful", session });
    response.headers.set("Set-Cookie", cookie);

    // Log to check if the cookie header is set properly
    console.log("Set-Cookie Header: ", response.headers.get("Set-Cookie"));

    return response;
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
