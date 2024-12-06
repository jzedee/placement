import connectDB from "@/app/lib/db"; // Database connection helper
import User from "@/app/model/User"; // User model
import bcrypt from "bcryptjs"; // For password comparison
import { NextResponse } from "next/server"; // Next.js response handling
import { serialize } from "cookie"; // To create secure cookies

export async function POST(req) {
  try {
    // Parse the request body
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      console.error("Missing email or password");
      return NextResponse.json({ message: "Email and Password are required" }, { status: 400 });
    }

    // Connect to the database
    await connectDB();
    console.log("Database connected");

    // Find the user by email
    const user = await User.findOne({ email });
    console.log("User found:", user ? user.email : "No user found");

    if (!user) {
      // No user with the provided email
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }

    // Compare the input password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isPasswordMatch);

    if (!isPasswordMatch) {
      // Password mismatch
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }

    // Create the session data (session is typically the user details you want to store in the cookie)
    const session = {
      name: user.name,
      email: user.email,
      role: user.role,
    };

    // Serialize the session into a cookie
    const cookie = serialize("auth_token", JSON.stringify(session), {
      httpOnly: true, // Prevents JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === "production", // Ensure secure cookies in production
      sameSite: "strict", // Protect against CSRF
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/", // Cookie is available throughout the whole site
    });
    console.log("Serialized Cookie:", cookie);

    // Send the response with the cookie
    const response = NextResponse.json({ message: "Login successful", session });

    // Set the 'Set-Cookie' header in the response to set the cookie in the browser
    response.headers.set("Set-Cookie", cookie);

    return response;

  } catch (error) {
    console.error("Error during login:", error.message);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
