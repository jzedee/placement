import { NextResponse } from 'next/server';
import { getSession } from '@/app/lib/auth'; // Import the utility function

export async function GET(req) {
  const session = getSession(req); // Check if there's a valid session

  if (!session) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }

  // If session exists, proceed with the request
  return NextResponse.json({ message: 'Authenticated', user: session });
}
