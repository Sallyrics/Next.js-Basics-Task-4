import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  const { name, message } = body;

  // Optional basic validation
  if (!name || !message) {
    return NextResponse.json(
      { success: false, error: "Name and message are required." },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: `Thank you, ${name}! Your message has been received.`,
      data: { name, message }
    },
    { status: 200 }
  );
}
