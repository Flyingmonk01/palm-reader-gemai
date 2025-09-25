// app/api/set-reading-cookies/route.ts
import { NextResponse } from 'next/server';
// import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { love = '', career = '', health = '', future = '' } = await request.json();

  const response = NextResponse.json({ reading: { love, career, health, future } });

  // Set cookies that will be sent to the client
  response.cookies.set('love', love, { path: '/' });
  response.cookies.set('career', career, { path: '/' });
  response.cookies.set('health', health, { path: '/' });
  response.cookies.set('future', future, { path: '/' });

  return response;
}
