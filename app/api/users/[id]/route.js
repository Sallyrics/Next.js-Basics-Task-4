import { NextResponse } from 'next/server';
import { users } from '../data';

// GET /api/users/[id] -- Return user info by ID
export async function GET(request, { params }) {
  const { id } = await params;
  const userId = Number(id);

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return NextResponse.json(
      { error: `User with ID ${id} not found.` },
      { status: 404 }
    );
  }

  return NextResponse.json(user, { status: 200 });
}
