import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, message } = body;

    if (!name || !name.trim() || !message || !message.trim()) {
      return NextResponse.json(
        { error: "Both 'name' and 'message' fields are required." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${name.trim()}! Your message has been received.`,
        data: { name: name.trim(), message: message.trim() }
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid JSON request body." },
      { status: 400 }
    );
  }
}
