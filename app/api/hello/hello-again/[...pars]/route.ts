import { NextResponse } from "next/server"

export async function GET(request: Request, { params }) {
  // tasks
  const pars = params.pars;
  console.log(pars[0], pars[1], pars[2]);

  return NextResponse.json({ response: 'Hello Again, Next.js!' })
}

export async function POST(request: Request) {
  // tasks

  return NextResponse.json({ response: 'This is a post request' })
}