import connectDB from "@/app/lib/db"; // DB connection helper
import User from "@/app/model/User";  // User model
import bcrypt from "bcryptjs"; // Library for hashing passwords

export async function POST(req) {
  try {
    // Parse JSON body
    const { name, email, password, role } = await req.json();

    // Validate input
    if (!name || !email || !password || !role) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    // Connect to the database
    await connectDB();

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return new Response(
        JSON.stringify({ message: "User already exists" }),
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Use 10 salt rounds

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Save the hashed password
      role,
    });

    await newUser.save();

    return new Response(
      JSON.stringify({ message: "User registered successfully" }),
      { status: 201 }
    );
  } catch (error) {
    // Handle server errors
    console.error("Signup error:", error);
    return new Response(
      JSON.stringify({ message: "Server error. Please try again later." }),
      { status: 500 }
    );
  }
}
