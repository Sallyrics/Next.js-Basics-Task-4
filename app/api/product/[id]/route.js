import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = await params;

  return NextResponse.json({
    id: id,
    name: "Wireless Headphones",
    price: 99.99,
    description: "Noise-cancelling over-ear headphones with 30-hour battery life."
  });
}
