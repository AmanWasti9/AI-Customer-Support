import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();
export async function POST(req) {
  const data = await req.json();
  console.log(data);

  return NextResponse.json({ message: "Hello from the server!" });
}
