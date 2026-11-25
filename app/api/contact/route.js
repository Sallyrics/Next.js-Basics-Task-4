import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Optional: Check for an Authorization header (401 Unauthorized)
    const authHeader = request.headers.get('authorization');
    if (authHeader !== 'Bearer my-secret-token') {
      return NextResponse.json(
        { error: "Unauthorized: Missing or invalid token." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { name, message } = body;

    // 400 Bad Request for missing or invalid fields
    if (
      typeof name !== 'string' || !name.trim() ||
      typeof message !== 'string' || !message.trim()
    ) {
      return NextResponse.json(
        { error: "Both 'name' and 'message' must be non-empty strings." },
        { status: 400 }
      );
    }

    // 201 Created on success
    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${name.trim()}! Your message has been created.`,
        data: { name: name.trim(), message: message.trim() }
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid JSON request body." },
      { status: 400 }
    );
  }
}
