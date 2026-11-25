import { NextResponse } from 'next/server';
import { users } from './data';

// GET /api/users -- Return a list of users
export async function GET() {
  return NextResponse.json(users, { status: 200 });
}

// POST /api/users -- Add a new user (with basic validation)
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (
      typeof name !== 'string' || !name.trim() ||
      typeof email !== 'string' || !email.trim()
    ) {
      return NextResponse.json(
        { error: "Both 'name' and 'email' are required." },
        { status: 400 }
      );
    }

    const newUser = {
      id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
      name: name.trim(),
      email: email.trim(),
    };

    users.push(newUser);

    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid JSON request body." },
      { status: 400 }
    );
  }
}
