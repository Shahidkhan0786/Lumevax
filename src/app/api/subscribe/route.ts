import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic validation for required fields

    if (!email) {
      return NextResponse.json(
        { error: "email are required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "غلط ای میل فارمیٹ" }, { status: 400 });
    }

    await prisma.subscribe.create({
      data: {
        email,
      },
    });

    return NextResponse.json(
      { message: "Email submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
