import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// export async function POST(request: Request) {
//   try {
//     const { name, email, inquiryType } = await request.json();

//     // Basic validation
//     if (!name || !email || !inquiryType) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     await prisma.contact.create({
//       data: { name, email, inquiryType },
//     });

//     return NextResponse.json(
//       { message: "Contact form submitted successfully!" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Database error:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

export async function POST(request: Request) {
  try {
    const { name, email, inquiryType, message } = await request.json();

    // Basic validation for required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name, email, and inquiry type are required fields" },
        { status: 400 }
      );
    }

    await prisma.contact.create({
      data: {
        name,
        email,
        inquiryType: inquiryType || "contact-us",
        message: message || null, // Save message if provided, otherwise null
      },
    });

    return NextResponse.json(
      { message: "Contact form submitted successfully!" },
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
